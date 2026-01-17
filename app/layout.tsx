import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Kioko | Software Engineer",
  description:
    "Full-stack developer specializing in web, mobile, and AI solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
