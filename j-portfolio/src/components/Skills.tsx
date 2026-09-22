import { SectionLabel } from "./SectionLabel";
import { skills, proficiencyWidth } from "../data";
import { Code2, Database, Sparkles, GitBranch } from "lucide-react";

const groups = [
  { title: "Programming & Web", icon: Code2, names: ["Python", "Java", "HTML", "Full-Stack Development"] },
  { title: "Databases", icon: Database, names: ["MySQL"] },
  { title: "AI & Modern Technology", icon: Sparkles, names: ["Generative AI", "Prompt Engineering", "AI Tools", "Claude", "GitHub Copilot"] },
  { title: "Foundations", icon: GitBranch, names: ["Computer Networking", "Git"] },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32 lg:px-12" aria-labelledby="skills-title">
      <SectionLabel id="skills-title" number="03" eyebrow="Toolkit / Foundations" title="The tools and foundations behind the learning curve." />
      <div className="mt-14 grid gap-px border border-editorial bg-[var(--line)] md:grid-cols-2">
        {groups.map((group, groupIndex) => {
          const Icon = group.icon;
          return (
            <article key={group.title} className="bg-[var(--bg)] p-7 md:p-9" data-testid={`skill-card-${groupIndex + 1}`}>
              <div className="flex items-start justify-between gap-5">
                <h3 className="max-w-xs font-editorial text-3xl">{group.title}</h3>
                <Icon size={22} strokeWidth={1.2} className="text-[var(--gold)]" aria-hidden="true" />
              </div>
              <div className="mt-8 space-y-5">
                {group.names.map(name => {
                  const skill = skills.find(s => s.name === name)!;
                  return (
                    <div key={skill.name} data-testid={`skill-row-${skill.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "")}`}>
                      <div className="flex items-center justify-between gap-4 text-sm">
                        <span>{skill.name}</span><span className="font-mono text-[9px] uppercase tracking-[.12em] text-[var(--muted)]">{skill.proficiency}</span>
                      </div>
                      <div className="mt-2 h-px w-full bg-[var(--line)]"><div className={`h-full bg-[var(--gold)] ${proficiencyWidth[skill.proficiency]}`} /></div>
                    </div>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
      <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-y border-editorial py-5" data-testid="professional-strengths">
        <span className="font-mono text-[9px] uppercase tracking-[.2em] text-[var(--gold)]">Professional strengths</span>
        {["Problem Solving", "Continuous Learning", "Adaptability", "Collaboration", "Curiosity"].map(strength => (
          <span key={strength} data-testid={`strength-${strength.toLowerCase().replace(/ /g, "-")}`} className="font-mono text-[10px] uppercase tracking-[.12em] text-[var(--muted)]">{strength}</span>
        ))}
      </div>
    </section>
  );
}