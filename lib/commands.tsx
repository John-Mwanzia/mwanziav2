import React from "react";

export const commands: Record<
  string,
  (args: string[]) => React.ReactElement | string
> = {
  help: () => (
    <div>
      <div className="mb-2">
        Available commands: help, about, skills, projects, services, contact,
        whoami, uptime, clear
      </div>
    </div>
  ),

  whoami: () => (
    <div>
      <div>John Kioko - Software Engineer</div>
      <div>
        Full-stack developer passionate about building innovative solutions
      </div>
      <div>Specializing in web, mobile, and AI-driven applications</div>
    </div>
  ),

  uptime: () => {
    const startYear = 2019;
    const years = new Date().getFullYear() - startYear;
    return (
      <div>
        <div>System uptime: {years}+ years of professional development</div>
        <div className="text-gray-500">
          Load average: Coffee high, bugs low, innovation constant
        </div>
      </div>
    );
  },

  about: () => (
    <div className="space-y-2">
      <div>
        I&apos;m a software engineer with a diverse skill set, encompassing both
        front-end
      </div>
      <div>
        and back-end development as well as mobile applications and AI-driven
        solutions.
      </div>
      <div className="mt-2">
        My expertise extends beyond web development, allowing me to tackle
        complex
      </div>
      <div>challenges and deliver comprehensive, high-quality solutions.</div>
      <div className="mt-2">
        Whether it&apos;s designing intuitive user interfaces, optimizing system
        performance,
      </div>
      <div>
        or implementing cutting-edge technologies, I&apos;m driven by a passion
        for
      </div>
      <div>innovation and excellence.</div>
    </div>
  ),

  skills: () => (
    <div className="space-y-2">
      <div>
        <span className="text-white">Languages:</span> JavaScript, TypeScript,
        Python, PHP
      </div>
      <div>
        <span className="text-white">Frontend:</span> React, Next.js, Tailwind
        CSS
      </div>
      <div>
        <span className="text-white">Mobile:</span> React Native
      </div>
      <div>
        <span className="text-white">Backend:</span> Node.js, Express, MongoDB
      </div>
      <div>
        <span className="text-white">Design:</span> Figma, UI/UX Design
      </div>
      <div>
        <span className="text-white">Other:</span> Machine Learning, Git, REST
        APIs
      </div>
    </div>
  ),

  projects: () => (
    <div className="space-y-3">
      <div>
        <div className="text-white">→ Mr Frames Kenya</div>
        <div className="ml-4 text-sm text-gray-400">
          E-commerce platform for frames and art
        </div>
        <div className="ml-4 text-xs text-gray-600">
          React, Node.js, MongoDB
        </div>
      </div>
      <div>
        <div className="text-white">→ Mobile App Suite</div>
        <div className="ml-4 text-sm text-gray-400">
          Cross-platform mobile applications
        </div>
        <div className="ml-4 text-xs text-gray-600">
          React Native, TypeScript
        </div>
      </div>
      <div>
        <div className="text-white">→ ML Projects</div>
        <div className="ml-4 text-sm text-gray-400">
          Machine learning implementations
        </div>
        <div className="ml-4 text-xs text-gray-600">Python, TensorFlow</div>
      </div>
      <div>
        <div className="text-white">→ UI/UX Designs</div>
        <div className="ml-4 text-sm text-gray-400">
          Interface designs and prototypes
        </div>
        <div className="ml-4 text-xs text-gray-600">Figma, Adobe XD</div>
      </div>
    </div>
  ),

  services: () => (
    <div className="space-y-3">
      <div>
        <div className="text-white">📱 Mobile Development</div>
        <div className="ml-4 text-sm">
          Creating cross-platform mobile apps with React Native
        </div>
      </div>
      <div>
        <div className="text-white">🌐 Web Development</div>
        <div className="ml-4 text-sm">
          Full-stack web applications with modern frameworks
        </div>
      </div>
      <div>
        <div className="text-white">🎨 UI/UX Design</div>
        <div className="ml-4 text-sm">
          Intuitive and visually appealing interfaces with Figma
        </div>
      </div>
      <div>
        <div className="text-white">🤖 AI Solutions</div>
        <div className="ml-4 text-sm">
          Machine learning models and intelligent systems
        </div>
      </div>
    </div>
  ),

  contact: () => (
    <div className="space-y-1">
      <div>
        <span className="text-white">Email:</span> johnmwanzia277@gmail.com
      </div>
      <div>
        <span className="text-white">Phone:</span> 0707979247
      </div>
      <div>
        <span className="text-white">Status:</span> Available for freelance &
        full-time work
      </div>
      <div className="mt-2 text-gray-500">
        Feel free to reach out for collaborations or opportunities!
      </div>
    </div>
  ),
};
