"use client";

import { useState, useEffect, useRef } from "react";
import { commands } from "@/lib/commands";

interface OutputLine {
  type: "command" | "output" | "error";
  content: string | React.ReactElement;
}

export default function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<OutputLine[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const getWelcomeMessage = () => {
    return (
      <pre className="text-[#00ff00] text-glow">
        {`
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║   ██████╗ ███████╗██╗   ██╗    ██████╗  ██████╗ ██████╗ ║
║   ██╔══██╗██╔════╝██║   ██║    ██╔══██╗██╔═══██╗██╔══██╗║
║   ██║  ██║█████╗  ██║   ██║    ██████╔╝██║   ██║██████╔╝║
║   ██║  ██║██╔══╝  ╚██╗ ██╔╝    ██╔═══╝ ██║   ██║██╔══██╗║
║   ██████╔╝███████╗ ╚████╔╝     ██║     ╚██████╔╝██║  ██║║
║   ╚═════╝ ╚══════╝  ╚═══╝      ╚═╝      ╚═════╝ ╚═╝  ╚═╝║
║                                                          ║
╚══════════════════════════════════════════════════════════╝

Welcome to my terminal portfolio!
`}
      </pre>
    );
  };

  useEffect(() => {
    // Welcome message
    setOutput([
      { type: "output", content: getWelcomeMessage() },
      { type: "output", content: "" },
      { type: "output", content: 'Type "help" to see available commands.' },
      { type: "output", content: "" },
    ]);
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();

    if (!trimmedCmd) return;

    // Add command to history
    setCommandHistory((prev) => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    // Add command to output
    setOutput((prev) => [
      ...prev,
      { type: "command", content: `$ ${trimmedCmd}` },
    ]);

    // Parse command
    const [command, ...args] = trimmedCmd.toLowerCase().split(" ");

    // Handle clear command specially
    if (command === "clear") {
      setOutput([]);
      return;
    }

    // Execute command
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
          content: `Command not found: ${command}. Type "help" for available commands.`,
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
      // Simple autocomplete
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
      className="crt min-h-screen p-8 relative"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="max-w-4xl mx-auto">
        <div ref={outputRef} className="mb-4 max-h-[80vh] overflow-y-auto">
          {output.map((line, i) => (
            <div
              key={i}
              className={`mb-1 ${
                line.type === "command"
                  ? "text-[#00d9ff]"
                  : line.type === "error"
                    ? "text-[#ff5555]"
                    : "text-[#00ff00]"
              }`}
            >
              {line.content}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-[#00d9ff] mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-[#00ff00] caret-[#00ff00]"
            autoFocus
            spellCheck={false}
          />
          <span className="cursor text-[#00ff00] ml-1">▊</span>
        </form>
      </div>
    </div>
  );
}
