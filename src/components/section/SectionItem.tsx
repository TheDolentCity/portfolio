import { cn } from '@/lib/utils';

export default function SectionItem({
  href,
  small,
  children,
}: {
  href?: string | undefined;
  small?: boolean | undefined;
  children: React.ReactNode;
}) {
  const css = cn(
    'p-2 rounded-xl',
    href ? 'action-border' : 'border-2 border-transparent',
    small ? 'text-xs' : 'text-sm',
  );

  if (href) {
    return (
      <a href={href} className={css}>
        {children}
      </a>
    );
  } else {
    return <div className={css}>{children}</div>;
  }
}
