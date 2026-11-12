export default function Section({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const css = className ?? '';

  return <div className={`overflow-y-auto ${css}`}>{children}</div>;
}
