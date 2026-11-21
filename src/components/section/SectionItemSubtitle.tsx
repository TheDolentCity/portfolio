export default function SectionItemSubtitle({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <h4 className="hidden md:block print:block text-xs leading-5 font-semibold text-zinc-400 print:text-zinc-700">
      {children}
    </h4>
  )
}
