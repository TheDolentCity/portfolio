export default function ContactLinkText({
  children,
}: {
  children: React.ReactNode;
}) {
  return <span className="text-xs whitespace-nowrap">{children}</span>;
}
