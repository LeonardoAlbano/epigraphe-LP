import { cn } from "@/lib/utils";

/**
 * Variantes por psicologia das cores:
 * rose    → problema, risco, urgência
 * green   → solução, sucesso, crescimento
 * blue    → confiança, clareza, valor
 * purple  → criatividade, portfólio, qualidade
 * amber   → prova social, calor, otimismo
 * orange  → ação, processo, energia
 * cyan    → conhecimento, calma, FAQ
 * indigo  → expertise, profundidade, global
 */
export type BadgeVariant =
  | "rose"
  | "green"
  | "blue"
  | "purple"
  | "amber"
  | "orange"
  | "cyan"
  | "indigo";

const STYLES: Record<BadgeVariant, string> = {
  rose:
    "border-[rgb(251_113_133/0.38)] bg-[rgb(251_113_133/0.07)] text-[rgb(251_113_133)] " +
    "shadow-[0_0_10px_rgb(251_113_133/0.28),0_0_28px_rgb(251_113_133/0.10),inset_0_0_8px_rgb(251_113_133/0.05)]",
  green:
    "border-[rgb(34_197_94/0.38)] bg-[rgb(34_197_94/0.07)] text-[rgb(34_197_94)] " +
    "shadow-[0_0_10px_rgb(34_197_94/0.28),0_0_28px_rgb(34_197_94/0.10),inset_0_0_8px_rgb(34_197_94/0.05)]",
  blue:
    "border-[rgb(96_165_250/0.38)] bg-[rgb(96_165_250/0.07)] text-[rgb(96_165_250)] " +
    "shadow-[0_0_10px_rgb(96_165_250/0.28),0_0_28px_rgb(96_165_250/0.10),inset_0_0_8px_rgb(96_165_250/0.05)]",
  purple:
    "border-[rgb(167_139_250/0.38)] bg-[rgb(167_139_250/0.07)] text-[rgb(167_139_250)] " +
    "shadow-[0_0_10px_rgb(167_139_250/0.28),0_0_28px_rgb(167_139_250/0.10),inset_0_0_8px_rgb(167_139_250/0.05)]",
  amber:
    "border-[rgb(251_191_36/0.38)] bg-[rgb(251_191_36/0.07)] text-[rgb(251_191_36)] " +
    "shadow-[0_0_10px_rgb(251_191_36/0.28),0_0_28px_rgb(251_191_36/0.10),inset_0_0_8px_rgb(251_191_36/0.05)]",
  orange:
    "border-[rgb(251_146_60/0.38)] bg-[rgb(251_146_60/0.07)] text-[rgb(251_146_60)] " +
    "shadow-[0_0_10px_rgb(251_146_60/0.28),0_0_28px_rgb(251_146_60/0.10),inset_0_0_8px_rgb(251_146_60/0.05)]",
  cyan:
    "border-[rgb(34_211_238/0.38)] bg-[rgb(34_211_238/0.07)] text-[rgb(34_211_238)] " +
    "shadow-[0_0_10px_rgb(34_211_238/0.28),0_0_28px_rgb(34_211_238/0.10),inset_0_0_8px_rgb(34_211_238/0.05)]",
  indigo:
    "border-[rgb(129_140_248/0.38)] bg-[rgb(129_140_248/0.07)] text-[rgb(129_140_248)] " +
    "shadow-[0_0_10px_rgb(129_140_248/0.28),0_0_28px_rgb(129_140_248/0.10),inset_0_0_8px_rgb(129_140_248/0.05)]",
};

type SectionBadgeProps = {
  label: string;
  variant: BadgeVariant;
  className?: string;
};

export function SectionBadge({ label, variant, className }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 backdrop-blur-sm",
        "text-[11px] font-semibold tracking-[0.22em] uppercase",
        STYLES[variant],
        className,
      )}
    >
      {label}
    </span>
  );
}
