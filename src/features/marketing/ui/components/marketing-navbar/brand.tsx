import Image from "next/image";
import Link from "next/link";

export function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-card ring-1 ring-border/60">
        <Image
          src="/epigraphe-logo.svg"
          alt="Epigraphe Atelier Code"
          width={20}
          height={20}
          priority
        />
      </div>
      <span className="text-sm font-semibold tracking-wide text-foreground">
        Epigraphe
      </span>
    </Link>
  );
}
