export default function SectionBody({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`flex flex-col gap-0 ${className}`}>{children}</div>;
}
