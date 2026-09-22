type Props = { number: string; eyebrow: string; title: string; id?: string };

export function SectionLabel({ number, eyebrow, title, id }: Props) {
  return (
    <div id={id} className="grid gap-4 border-t border-editorial pt-5 md:grid-cols-[90px_1fr]">
      <span data-testid={`section-number-${number}`} className="font-mono text-xs tracking-[.18em] text-[var(--gold)]">{number}</span>
      <div>
        <p data-testid={`section-eyebrow-${number}`} className="font-mono text-[10px] uppercase tracking-[.22em] text-[var(--muted)]">{eyebrow}</p>
        <h2 data-testid={`section-title-${number}`} className="mt-2 font-editorial text-4xl leading-none md:text-6xl">{title}</h2>
      </div>
    </div>
  );
}