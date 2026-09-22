import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const openTo = ["Full-Time Opportunities", "Internships", "Freelance Projects", "Collaborations", "Software Development Projects", "AI & Technology Projects", "Learning Opportunities"];
const interests = ["Website Development", "Application Development", "Full-Stack Development", "Generative AI", "Software Development", "Coding"];

export function Goals() {
  return (
    <section id="goals" className="border-y border-editorial bg-[var(--surface-2)]" aria-labelledby="goals-title">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32 lg:px-12">
        <SectionLabel id="goals-title" number="06" eyebrow="Direction / Opportunities" title="Ready to turn curiosity into craft." />
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <div className="border border-[var(--gold)]/40 bg-[var(--surface)] p-7 md:p-10" data-testid="career-goal">
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[var(--gold)]">Career goal</p>
            <div className="mt-7 space-y-6 font-editorial text-2xl leading-tight md:text-3xl">
              <p>My goal is to begin my career as a Software Developer where I can apply my technical knowledge, work on real-world projects, learn from experienced professionals, and continuously develop my skills.</p>
              <p>I aim to build practical software solutions while growing into a well-rounded technology professional with expertise in modern development and AI-integrated applications.</p>
            </div>
          </div>
          <div className="space-y-8">
            <div data-testid="open-to-list">
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[var(--gold)]">Open to</p>
              <ul className="mt-4 divide-y divide-[var(--line)] border-y border-editorial">
                {openTo.map(item => <li key={item} className="flex items-center justify-between py-3 text-sm"><span>{item}</span><ArrowUpRight size={14} className="text-[var(--muted)]" /></li>)}
              </ul>
            </div>
            <div data-testid="professional-interests">
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[var(--gold)]">Professional interests</p>
              <div className="mt-4 flex flex-wrap gap-2">{interests.map(item => <span key={item} className="border border-editorial px-3 py-2 font-mono text-[9px] uppercase tracking-[.08em] text-[var(--muted)]">{item}</span>)}</div>
            </div>
            <div data-testid="languages">
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[var(--gold)]">Languages</p>
              <p className="mt-4 font-editorial text-2xl">English / Tamil</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}