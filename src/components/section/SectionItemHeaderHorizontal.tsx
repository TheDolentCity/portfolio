export default function SectionItemHeaderHorizontal({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="flex gap-2 mb-1 items-end overflow-x-hidden min-w-0 max-w-full">{children}</div>
}
