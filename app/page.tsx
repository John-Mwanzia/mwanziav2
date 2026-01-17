"use client";

import { useState } from "react";
import Header from "@/components/Header";
import TerminalBlock from "@/components/TerminalBlock";
import CommandPrompt from "@/components/CommandPrompt";
import Link from "next/link";

export default function Home() {
  const [showInteractive, setShowInteractive] = useState(false);

  const projects = [
    {
      name: "Terra Bloom",
      url: "https://terra-bloom.vercel.app/",
      description: "E-commerce platform for plants and gardening",
      tech: "React, Next.js, Tailwind",
    },
    {
      name: "Mr Frames Kenya",
      url: "https://mr-frames-ke.vercel.app/",
      description: "E-commerce platform for frames and art",
      tech: "React, Node.js, MongoDB",
    },
    {
      name: "Study Buddy AI",
      url: "https://study-buddy-ai.vercel.app",
      description: "AI-powered study assistant application",
      tech: "Next.js, OpenAI, TypeScript",
    },
    {
      name: "Clinical Forex",
      url: "https://clinicalforex.com/",
      description: "Forex trading education platform",
      tech: "React, Node.js, Express",
    },
    {
      name: "Smart Tech Stores",
      url: "https://smart-tech-stores.vercel.app/",
      description: "E-commerce platform for tech products",
      tech: "Next.js, Stripe, MongoDB",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        {/* Header Navigation */}
        <Header />

        {/* Hero Section */}
        <section className="mb-20">
          <TerminalBlock>
            <div className="mb-3">
              <span className="text-gray-500">john@portfolio:~$</span> whoami
            </div>
            <div className="ml-6 space-y-2">
              <div>
                <span className="text-green-500">●</span> Software Engineer |
                Full-Stack Developer
              </div>
              <div>
                <span className="text-yellow-500">●</span> Building innovative
                solutions across web, mobile & AI
              </div>
            </div>
          </TerminalBlock>

          <div className="my-16 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              # HI, I&apos;M JOHN KIOKO
              <span className="animate-pulse ml-2">_</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Software engineer with expertise in front-end, back-end, mobile
              development, and UI/UX design.
              <br />
              Passionate about building transformative digital experiences.
            </p>
          </div>
        </section>

        {/* Skills/Tech Stack */}
        <section className="mb-20">
          <TerminalBlock>
            <div className="mb-6">
              <span className="text-gray-500">john@portfolio:~$</span> grep
              &quot;${"{LANG}"}&quot; /var/log/activity.log
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="border border-gray-700 p-4 text-center hover:border-gray-500 transition-colors">
                <div className="font-bold mb-1">JavaScript</div>
                <div className="text-sm text-gray-500">(ES6+)</div>
              </div>
              <div className="border border-gray-700 p-4 text-center hover:border-gray-500 transition-colors">
                <div className="font-bold mb-1">TypeScript</div>
                <div className="text-sm text-gray-500">(Type-safe)</div>
              </div>
              <div className="border border-gray-700 p-4 text-center hover:border-gray-500 transition-colors">
                <div className="font-bold mb-1">React</div>
                <div className="text-sm text-gray-500">(+ Next.js)</div>
              </div>
              <div className="border border-gray-700 p-4 text-center hover:border-gray-500 transition-colors">
                <div className="font-bold mb-1">React Native</div>
                <div className="text-sm text-gray-500">(Mobile)</div>
              </div>
              <div className="border border-gray-700 p-4 text-center hover:border-gray-500 transition-colors">
                <div className="font-bold mb-1">Node.js</div>
                <div className="text-sm text-gray-500">(+ Express)</div>
              </div>
              <div className="border border-gray-700 p-4 text-center hover:border-gray-500 transition-colors">
                <div className="font-bold mb-1">Python</div>
                <div className="text-sm text-gray-500">(Backend/ML)</div>
              </div>
              <div className="border border-gray-700 p-4 text-center hover:border-gray-500 transition-colors">
                <div className="font-bold mb-1">MongoDB</div>
                <div className="text-sm text-gray-500">(NoSQL)</div>
              </div>
              <div className="border border-gray-700 p-4 text-center hover:border-gray-500 transition-colors">
                <div className="font-bold mb-1">Tailwind</div>
                <div className="text-sm text-gray-500">(CSS)</div>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Also: PHP, Machine Learning, Figma (UI/UX Design)
            </div>
          </TerminalBlock>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-3xl mb-6 text-center">
            <span className="text-gray-500">/*</span> PROJECTS{" "}
            <span className="text-gray-500">*/</span>
          </h2>
          <TerminalBlock>
            <div className="mb-6">
              <span className="text-gray-500">john@portfolio:~$</span> ls -lah
              ~/projects/
            </div>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index}>
                  <div className="text-white mb-1">drwxr-xr-x</div>
                  <div className="ml-6">
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-lg mb-2 hover:text-gray-400 transition-colors inline-block"
                    >
                      {project.name}/
                    </Link>
                    <div className="text-gray-400 mb-1">
                      {project.description}
                    </div>
                    <div className="text-sm text-gray-600">
                      Tech: {project.tech}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TerminalBlock>
        </section>

        {/* Interactive Terminal */}
        <section className="mb-20">
          <div className="mb-6 text-center">
            <button
              onClick={() => setShowInteractive(!showInteractive)}
              className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors text-sm"
            >
              {showInteractive ? "[-] Hide" : "[+] Show"} Interactive Terminal
            </button>
          </div>
          {showInteractive && <CommandPrompt />}
        </section>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-gray-800">
          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            <a
              href="https://github.com/johnkioko"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors text-sm"
            >
              github
            </a>
            <a
              href="https://linkedin.com/in/johnkioko"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors text-sm"
            >
              linkedin
            </a>
            <a
              href="mailto:johnmwanzia277@gmail.com"
              className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors text-sm"
            >
              email
            </a>
          </div>
          <div className="text-sm text-gray-500">
            <span className="text-gray-600">$</span> Built with Next.js &
            Tailwind CSS
          </div>
        </footer>
      </div>
    </main>
  );
}
