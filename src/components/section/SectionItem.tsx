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
  function onClick() {
    if (href) {
      window.location.href = href;
    }
  }

  const css = cn(
    'p-2 rounded-xl',
    href ? 'action-border cursor-pointer' : 'border-2 border-transparent',
    small ? 'text-xs' : 'text-sm',
  );

  if (href) {
    return (
      <div onClick={onClick} className={css}>
        {children}
      </div>
    );
  } else {
    return <div className={css}>{children}</div>;
  }
}
