import Header from "@/components/Header";
import TerminalBlock from "@/components/TerminalBlock";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <Header />

        <section className="mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">
            # ABOUT ME
          </h1>

          <TerminalBlock>
            <div className="mb-6">
              <span className="text-gray-500">john@portfolio:~$</span> cat
              about.txt
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I&apos;m a software engineer with a diverse skill set,
                encompassing both front-end and back-end development as well as
                mobile applications and AI-driven solutions.
              </p>
              <p>
                My expertise extends beyond web development, allowing me to
                tackle complex challenges and deliver comprehensive,
                high-quality solutions. Whether it&apos;s designing intuitive
                user interfaces, optimizing system performance, or implementing
                cutting-edge technologies, I&apos;m driven by a passion for
                innovation and excellence.
              </p>
              <p>
                Let&apos;s collaborate to build transformative digital
                experiences that push the boundaries of what&apos;s possible.
              </p>
            </div>
          </TerminalBlock>
        </section>
      </div>
    </main>
  );
}
