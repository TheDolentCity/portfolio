export default function SectionItem({
  href,
  children,
}: {
  href?: string | undefined;
  children: React.ReactNode;
}) {
  if (href) {
    return (
      <a href={href} className="p-2 rounded-xl action-border">
        {children}
      </a>
    );
  } else {
    return (
      <div className="p-2 rounded-xl border-2 border-transparent">
        {children}
      </div>
    );
  }
}
