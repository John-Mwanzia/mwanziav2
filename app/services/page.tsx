import Header from "@/components/Header";
import TerminalBlock from "@/components/TerminalBlock";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <Header />

        <section className="mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">
            # SERVICES
          </h1>

          <TerminalBlock>
            <div className="mb-6">
              <span className="text-gray-500">john@portfolio:~$</span> cat
              services.log
            </div>
            <div className="space-y-6">
              <div>
                <div className="text-white font-bold mb-2">
                  📱 Mobile Development (React Native)
                </div>
                <div className="ml-4 text-gray-400">
                  Creating cross-platform mobile applications with seamless user
                  experiences using React Native.
                </div>
              </div>
              <div>
                <div className="text-white font-bold mb-2">
                  🌐 Web Development
                </div>
                <div className="ml-4 text-gray-400">
                  Developing comprehensive web applications that integrate
                  robust front-end interfaces with efficient back-end systems.
                </div>
              </div>
              <div>
                <div className="text-white font-bold mb-2">
                  🎨 UI/UX Design with Figma
                </div>
                <div className="ml-4 text-gray-400">
                  Designing intuitive and visually appealing interfaces with a
                  focus on user experience using Figma.
                </div>
              </div>
              <div>
                <div className="text-white font-bold mb-2">
                  ⚡ Full-Stack Development
                </div>
                <div className="ml-4 text-gray-400">
                  End-to-end application development using modern frameworks
                  like React, Next.js, Node.js, and databases like MongoDB and
                  PostgreSQL.
                </div>
              </div>
              <div>
                <div className="text-white font-bold mb-2">
                  🔗 API Development & Integration
                </div>
                <div className="ml-4 text-gray-400">
                  Building RESTful APIs, integrating third-party services, and
                  implementing secure authentication systems.
                </div>
              </div>
              <div>
                <div className="text-white font-bold mb-2">
                  🛒 E-commerce Solutions
                </div>
                <div className="ml-4 text-gray-400">
                  Complete e-commerce platforms with payment integration,
                  inventory management, and admin dashboards.
                </div>
              </div>
              <div>
                <div className="text-white font-bold mb-2">
                  🤖 AI & Machine Learning
                </div>
                <div className="ml-4 text-gray-400">
                  Implementing machine learning models and AI-driven features to
                  enhance application functionality.
                </div>
              </div>
            </div>
          </TerminalBlock>
        </section>
      </div>
    </main>
  );
}
