export default function SectionItemHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="min-w-0 gap-2 truncate font-semibold tracking-tight text-focus">
      {children}
    </h3>
  );
}
