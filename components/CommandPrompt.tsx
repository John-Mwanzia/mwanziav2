"use client";

import React, { useState, useRef, useEffect } from "react";
import { commands } from "@/lib/commands";

interface OutputLine {
  type: "command" | "output" | "error";
  content: string | React.ReactElement;
}

export default function CommandPrompt() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<OutputLine[]>([
    {
      type: "output",
      content:
        'Interactive terminal ready. Type "help" for available commands.',
    },
    { type: "output", content: "" },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    setCommandHistory((prev) => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    setOutput((prev) => [
      ...prev,
      { type: "command", content: `$ ${trimmedCmd}` },
    ]);

    const [command, ...args] = trimmedCmd.toLowerCase().split(" ");

    if (command === "clear") {
      setOutput([]);
      return;
    }

    if (commands[command]) {
      const result = commands[command](args);
      setOutput((prev) => [
        ...prev,
        { type: "output", content: result },
        { type: "output", content: "" },
      ]);
    } else {
      setOutput((prev) => [
        ...prev,
        {
          type: "error",
          content: `bash: ${command}: command not found`,
        },
        { type: "output", content: "" },
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const availableCommands = Object.keys(commands);
      const matches = availableCommands.filter((cmd) =>
        cmd.startsWith(input.toLowerCase()),
      );
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  return (
    <div
      className="border border-gray-800 p-8 bg-black"
      onClick={() => inputRef.current?.focus()}
    >
      <div ref={outputRef} className="mb-6 max-h-96 overflow-y-auto space-y-1">
        {output.map((line, i) => (
          <div
            key={i}
            className={`${
              line.type === "command"
                ? "text-gray-500"
                : line.type === "error"
                  ? "text-red-500"
                  : "text-white"
            }`}
          >
            {line.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center">
        <span className="text-gray-500 mr-2">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-white caret-white"
          autoFocus
          spellCheck={false}
        />
        <span className="cursor text-white ml-1">▊</span>
      </form>
    </div>
  );
}
