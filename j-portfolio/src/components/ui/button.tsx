import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  const variants = {
    primary: "bg-[var(--gold)] text-[#0B0F17] hover:bg-[var(--amber)]",
    outline: "border border-[var(--line)] bg-transparent text-[var(--ink)] hover:border-[var(--gold)] hover:text-[var(--gold)]",
    ghost: "bg-transparent text-[var(--muted)] hover:text-[var(--ink)]",
  };
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}