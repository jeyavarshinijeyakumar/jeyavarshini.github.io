import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

type Props = { theme: "dark" | "light"; onToggle: () => void };

const nav = [
  ["About", "about"],
  ["Constellation", "constellation"],
  ["Skills", "skills"],
  ["Education", "education"],
  ["Goals", "goals"],
];

export function Header({ theme, onToggle }: Props) {
  const [open, setOpen] = useState(false);
  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };

  return (
    <header className="sticky top-0 z-50 border-b border-editorial bg-[var(--bg)]/95 backdrop-blur-md" data-testid="site-header">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 md:px-8 lg:px-12">
        <button type="button" onClick={() => go("top")} className="font-editorial text-xl" aria-label="Go to top" data-testid="logo-link">
          J<span className="text-[var(--gold)]">.</span>J<span className="text-[var(--gold)]">.</span>
        </button>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation" data-testid="desktop-navigation">
          {nav.map(([label, id]) => <button key={id} type="button" onClick={() => go(id)} className="underline-link font-mono text-[9px] uppercase tracking-[.16em] text-[var(--muted)] transition-colors hover:text-[var(--ink)]" data-testid={`nav-${id}`}>{label}</button>)}
          <Button onClick={() => window.location.href = "mailto:jeyavarshinijeyakumar@gmail.com?subject=Let's%20connect"} className="ml-2 px-4 py-2" data-testid="header-connect-cta">Let’s connect <ArrowUpRight size={14} /></Button>
          <ThemeToggle theme={theme} onToggle={onToggle} />
        </nav>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle theme={theme} onToggle={onToggle} />
          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} className="border border-editorial p-2" data-testid="mobile-menu-toggle">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-navigation" className="border-t border-editorial bg-[var(--bg)] px-5 py-4 lg:hidden" aria-label="Mobile navigation" data-testid="mobile-navigation">
          {nav.map(([label, id]) => <button key={id} type="button" onClick={() => go(id)} className="block w-full border-b border-editorial py-4 text-left font-mono text-[10px] uppercase tracking-[.16em] text-[var(--muted)]" data-testid={`mobile-nav-${id}`}>{label}</button>)}
          <button type="button" onClick={() => { window.location.href = "mailto:jeyavarshinijeyakumar@gmail.com?subject=Let's%20connect"; setOpen(false); }} className="mt-4 flex w-full items-center justify-between bg-[var(--gold)] px-4 py-3 text-left font-mono text-[10px] font-semibold uppercase tracking-[.12em] text-[#0B0F17]" data-testid="mobile-connect-cta">Let’s connect <ArrowUpRight size={14} /></button>
        </nav>
      )}
    </header>
  );
}