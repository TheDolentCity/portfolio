export default function SectionItemHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="flex gap-2 items-end whitespace-nowrap text-sm font-semibold tracking-tight text-focus">
      {children}
    </h3>
  );
}
