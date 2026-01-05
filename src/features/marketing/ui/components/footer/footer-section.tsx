import Link from "next/link";
import { footerContent } from "@/features/marketing/content/footer";
import { Container } from "../shared/container";

export function FooterSection() {
  const { brand, columns, bottom } = footerContent;

  return (
    <footer className="border-t border-border/60 bg-background">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-12">
          <div className="space-y-3 md:col-span-5">
            <div className="text-sm font-semibold tracking-wide">
              {brand.name}
            </div>
            <p className="text-sm text-muted-foreground">{brand.tagline}</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:col-span-7 md:justify-items-end">
            {columns.map((col) => (
              <div key={col.title} className="space-y-3">
                <div className="text-xs font-semibold tracking-widest text-muted-foreground">
                  {col.title.toUpperCase()}
                </div>

                <ul className="space-y-2">
                  {col.links.map((l) => {
                    const isExternal =
                      l.href.startsWith("http") ||
                      l.href.startsWith("mailto:") ||
                      l.href.startsWith("tel:");

                    return (
                      <li key={l.href}>
                        {isExternal ? (
                          <a
                            href={l.href}
                            target={
                              l.href.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                              l.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {l.label}
                          </a>
                        ) : (
                          <Link
                            href={l.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {l.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border/60 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">{bottom.copyright}</p>

          <div className="flex gap-4">
            {bottom.links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
