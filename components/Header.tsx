import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-16 flex justify-center gap-4 text-sm flex-wrap">
      <Link
        href="/"
        className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors"
      >
        home
      </Link>
      <Link
        href="/about"
        className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors"
      >
        about
      </Link>
      <Link
        href="/services"
        className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors"
      >
        services
      </Link>
    </header>
  );
}
