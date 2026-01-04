type NavLinkItem = {
  label: string;
  href: string;
};

type NavLinksProps = {
  items: readonly NavLinkItem[];
};

export function NavLinks({ items }: NavLinksProps) {
  return (
    <nav className="hidden items-center gap-6 lg:flex">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
