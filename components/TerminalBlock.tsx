interface TerminalBlockProps {
  children: React.ReactNode;
}

export default function TerminalBlock({ children }: TerminalBlockProps) {
  return (
    <div className="border border-neutral-800 p-8 bg-black">
      {children}
    </div>
  );
}
