import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative min-h-[calc(100vh-76px)] overflow-hidden border-b border-editorial">
      <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-14 px-5 py-16 md:grid-cols-[1.1fr_.9fr] md:px-8 lg:px-12">
        <div className="reveal">
          <p data-testid="hero-metadata" className="font-mono text-[10px] uppercase tracking-[.25em] text-[var(--gold)]">Computer Science / 2026–2030</p>
          <h1 id="hero-title" data-testid="hero-name" className="mt-5 max-w-4xl font-editorial text-6xl leading-[.9] tracking-[-.035em] md:text-8xl lg:text-[9rem]">
            Jeyavarshini J<span className="text-[var(--gold)]">.</span>
          </h1>
          <p data-testid="hero-title-role" className="mt-7 max-w-xl font-mono text-xs uppercase leading-6 tracking-[.16em] text-[var(--muted)] md:text-sm">
            Computer Science Engineering Student / Aspiring Software Developer
          </p>
          <p data-testid="hero-tagline" className="mt-7 max-w-2xl font-editorial text-2xl italic leading-tight md:text-3xl">
            Turning Ideas into Code, and Code into Impact.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => window.location.href = "mailto:jeyavarshinijeyakumar@gmail.com?subject=Let's%20connect"} data-testid="hero-connect-cta">
              Let’s connect <ArrowUpRight size={16} />
            </Button>
            <Button variant="outline" onClick={() => document.getElementById("constellation")?.scrollIntoView({ behavior: "smooth" })} data-testid="hero-skill-map-cta">
              Explore the skill map <ArrowDownRight size={16} />
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap gap-8 border-t border-editorial pt-5">
            <div data-testid="hero-location" className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.18em] text-[var(--muted)]"><MapPin size={13} className="text-[var(--gold)]" /> Madurai, India</div>
            <div data-testid="hero-focus" className="font-mono text-[10px] uppercase tracking-[.18em] text-[var(--muted)]">Focus / Web + AI</div>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[520px] reveal [animation-delay:.15s]" aria-label="Typographic monogram visual" data-testid="hero-monogram">
          <div className="absolute inset-[8%] border border-[var(--gold)]/40" />
          <div className="absolute inset-[18%] border border-editorial" />
          <div className="orbit absolute inset-[12%] rounded-full border border-[var(--gold)]/25 border-dashed" />
          <div className="orbit-reverse absolute inset-[28%] rounded-full border border-[var(--cyan)]/20" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="font-editorial text-[8rem] leading-[.7] tracking-[-.08em] md:text-[10rem]">
              J<span className="text-[var(--gold)]">J</span>
            </div>
            <p className="mt-8 font-mono text-[9px] uppercase tracking-[.28em] text-[var(--muted)]">Portfolio / 01</p>
          </div>
          <span className="absolute left-[9%] top-[22%] font-mono text-[9px] tracking-[.2em] text-[var(--muted)]">ALWAYS LEARNING</span>
          <span className="absolute bottom-[23%] right-[7%] font-mono text-[9px] tracking-[.2em] text-[var(--muted)]">ALWAYS BUILDING</span>
          <span className="absolute bottom-[8%] left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[.2em] text-[var(--gold)]">MADURAI · IN</span>
          <div className="glow-pulse absolute left-[20%] top-[14%] h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
          <div className="glow-pulse absolute bottom-[19%] right-[18%] h-1.5 w-1.5 rounded-full bg-[var(--cyan)] [animation-delay:1.5s]" />
        </div>
      </div>
    </section>
  );
}