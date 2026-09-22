import { SectionLabel } from "./SectionLabel";

export function Education() {
  return (
    <section id="education" className="border-y border-editorial bg-[var(--surface-2)]" aria-labelledby="education-title">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32 lg:px-12">
        <SectionLabel id="education-title" number="04" eyebrow="Education / 2026" title="Where the foundations are taking shape." />
        <div className="mt-14 ml-2 border-l border-[var(--gold)]/40">
          <article className="relative pl-8 pb-12" data-testid="education-degree">
            <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-[var(--gold)]" />
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[var(--gold)]">2026–2030 / Currently pursuing</p>
            <h3 className="mt-4 font-editorial text-3xl md:text-4xl">Bachelor of Engineering</h3>
            <p className="mt-2 text-[var(--muted)]">Computer Science Engineering</p>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[.14em] text-[var(--muted)]">Sethu Institute of Technology, Kariapatti</p>
          </article>
          <article className="relative pl-8" data-testid="education-school">
            <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full border border-[var(--gold)] bg-[var(--bg)]" />
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[var(--muted)]">Completed / 2026</p>
            <h3 className="mt-4 font-editorial text-3xl md:text-4xl">AISSCE — Science</h3>
            <p className="mt-2 text-[var(--muted)]">PCM with Computer Science</p>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[.14em] text-[var(--muted)]">Krishnamal Ramasubbaiyer School, Madurai</p>
          </article>
        </div>
      </div>
    </section>
  );
}