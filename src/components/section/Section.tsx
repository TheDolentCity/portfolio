export default function Section({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const css = className ?? '';

  return <div className={`${css}`}>{children}</div>;
}
