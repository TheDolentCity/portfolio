import type { ReactNode } from 'react';

export default function Card({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="relative p-4 rounded border border-zinc-800 bg-black hover:border-blue-700 hover:bg-blue-700/10 mst"
    >
      {children}
    </a>
  );
}
