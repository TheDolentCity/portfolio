import type { ReactNode } from 'react';

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main className="relative z-0 w-full px-8 md:px-12 pt-6 pb-24 print:px-0 print:py-0 bg-linear-to-b from-black via-zinc-950 to-zinc-950">
      {children}
    </main>
  );
}
