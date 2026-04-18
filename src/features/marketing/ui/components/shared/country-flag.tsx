import type { CountryCode } from "@/features/marketing/content/testimonials";
import { cn } from "@/lib/utils";

const COUNTRY_LABEL: Record<CountryCode, string> = {
  BR: "Brasil",
  PT: "Portugal",
  ES: "Espanha",
};

/* ─── SVGs minimais, fiéis às cores oficiais ─── */
function FlagBR() {
  return (
    <svg viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {/* Verde */}
      <rect width="20" height="14" fill="#009c3b" />
      {/* Losango amarelo */}
      <polygon points="10,1.4 18.6,7 10,12.6 1.4,7" fill="#ffdf00" />
      {/* Círculo azul */}
      <circle cx="10" cy="7" r="3.2" fill="#002776" />
      {/* Faixa branca "Ordem e Progresso" — simplificada como linha */}
      <rect x="6.2" y="6.55" width="7.6" height="0.9" fill="#fff" rx="0.45" />
    </svg>
  );
}

function FlagPT() {
  return (
    <svg viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {/* Vermelho */}
      <rect width="20" height="14" fill="#dc241f" />
      {/* Verde (40%) */}
      <rect width="8" height="14" fill="#006600" />
      {/* Escudo simplificado — círculo amarelo com traço */}
      <circle cx="8" cy="7" r="2.4" fill="#ffdf00" stroke="#dc241f" strokeWidth="0.5" />
      <circle cx="8" cy="7" r="1.2" fill="none" stroke="#002776" strokeWidth="0.7" />
    </svg>
  );
}

function FlagES() {
  return (
    <svg viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {/* Vermelho base */}
      <rect width="20" height="14" fill="#c60b1e" />
      {/* Faixa amarela central (50%) */}
      <rect y="3.5" width="20" height="7" fill="#ffc400" />
    </svg>
  );
}

import type { ReactNode } from "react";

const FLAG_MAP: Record<CountryCode, () => ReactNode> = {
  BR: FlagBR,
  PT: FlagPT,
  ES: FlagES,
};

type CountryFlagProps = {
  code: CountryCode;
  className?: string;
};

export function CountryFlag({ code, className }: CountryFlagProps) {
  const Flag = FLAG_MAP[code];
  return (
    <span
      role="img"
      aria-label={COUNTRY_LABEL[code]}
      title={COUNTRY_LABEL[code]}
      className={cn(
        "inline-block overflow-hidden rounded-[3px]",
        "ring-1 ring-white/10",
        className,
      )}
      style={{ width: 20, height: 14, flexShrink: 0 }}
    >
      <Flag />
    </span>
  );
}
