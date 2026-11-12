export default function SectionItemParagraph({
  small,
  children,
}: {
  small?: boolean | undefined;
  children: React.ReactNode;
}) {
  return <p className={small ? 'text-xs' : ''}>{children}</p>;
}
