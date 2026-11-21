import Navigation from '@/components/navigation/Navigation';
import ResumeButton from '@/components/resume/ResumeButton';

export default function Header() {
  return (
    <header className="print:hidden relative z-50 flex flex-wrap w-full gap-3 px-6 py-2 items-center justify-between border-b border-zinc-700 bg-zinc-950">
      <a href="/" className="flex flex-col gap-1 mr-6 rounded acc-focus">
        <h2 className="text-2xl font-bold tracking-tight text-focus whitespace-nowrap">
          Dante Nardo
        </h2>
      </a>
      <span className="grow order-last sm:order-0">
        <Navigation />
      </span>
      <ResumeButton />
    </header>
  );
}
