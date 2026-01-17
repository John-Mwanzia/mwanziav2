import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-16 flex justify-center gap-4 text-sm flex-wrap">
      <Link
        href="/"
        className="border border-neutral-700 px-6 py-2 "
      >
        home
      </Link>
      <Link
        href="/about"
        className="border border-neutral-700 px-6 py-2 "
      >
        about
      </Link>
      <Link
        href="/services"
        className="border border-neutral-700 px-6 py-2 "
      >
        services
      </Link>
    </header>
  );
}
