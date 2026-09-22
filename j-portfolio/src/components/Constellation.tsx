import { useMemo, useState, type KeyboardEvent } from "react";
import { SectionLabel } from "./SectionLabel";
import { categories, proficiencyWidth, skills, type Skill, type SkillCategory } from "../data";
import { cn } from "../lib/utils";

const positions: Record<string, [number, number]> = {
  Python: [18, 23], Java: [33, 12], HTML: [48, 20], "Full-Stack Development": [62, 12],
  MySQL: [80, 26], "Generative AI": [76, 49], "Prompt Engineering": [88, 67], "AI Tools": [64, 78],
  Claude: [46, 88], "GitHub Copilot": [29, 78], "Computer Networking": [12, 62], Git: [25, 48],
};

const categoryColors: Record<SkillCategory, string> = {
  Programming: "var(--gold)",
  Databases: "var(--emerald)",
  "AI & Tools": "var(--cyan)",
  Networking: "var(--amber)",
  "Version Control": "var(--gold)",
};

export function Constellation() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [selected, setSelected] = useState<Skill>(skills[0]);
  const visible = useMemo(() => filter === "All" ? skills : skills.filter(s => s.category === filter), [filter]);

  const selectSkill = (skill: Skill) => setSelected(skill);
  const onNodeKey = (event: KeyboardEvent, skill: Skill) => {
    if (event.key === "Enter" || event.key === " ") { event.preventDefault(); selectSkill(skill); }
  };

  return (
    <section id="constellation" className="border-y border-editorial bg-[var(--surface-2)]" aria-labelledby="constellation-title">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32 lg:px-12">
        <SectionLabel id="constellation-title" number="02" eyebrow="Interactive / Skill Map" title="A living constellation of foundations and active learning." />
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Skill category filters" data-testid="skill-category-filters">
          {categories.map(category => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              data-testid={`filter-${category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
              className={cn(
                "shrink-0 border px-4 py-2 font-mono text-[10px] uppercase tracking-[.14em] transition-colors",
                filter === category ? "border-[var(--gold)] bg-[var(--gold)] text-[#0B0F17]" : "border-editorial text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
              )}
            >{category}</button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 xl:grid-cols-[1.45fr_.55fr]">
          <div className="min-h-[520px] overflow-x-auto border border-editorial bg-[var(--bg)]" data-testid="skill-constellation">
            <svg viewBox="0 0 100 100" className="h-[560px] min-w-[720px] w-full" role="img" aria-label="Interactive skill constellation">
              <g opacity=".45">
                {visible.map(skill => {
                  const [x, y] = positions[skill.name];
                  return <line key={`line-${skill.name}`} x1="50" y1="50" x2={x} y2={y} stroke={categoryColors[skill.category]} strokeWidth=".18" strokeDasharray="1 1" />;
                })}
              </g>
              <g className="glow-pulse">
                <circle cx="50" cy="50" r="8" fill="var(--surface)" stroke="var(--gold)" strokeWidth=".35" />
                <text x="50" y="49.2" textAnchor="middle" fill="var(--ink)" fontFamily="Playfair Display" fontSize="5">J / J</text>
                <text x="50" y="54" textAnchor="middle" fill="var(--muted)" fontFamily="JetBrains Mono" fontSize="1.7" letterSpacing=".25">SKILL MAP</text>
              </g>
              {visible.map(skill => {
                const [x, y] = positions[skill.name];
                const active = selected.name === skill.name;
                return (
                  <g
                    key={skill.name}
                    transform={`translate(${x} ${y})`}
                    role="button"
                    tabIndex={0}
                    aria-label={`Select ${skill.name}, ${skill.proficiency}`}
                    aria-pressed={active}
                    onClick={() => selectSkill(skill)}
                    onKeyDown={(e) => onNodeKey(e, skill)}
                    data-testid={`skill-node-${skill.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "")}`}
                    className="cursor-pointer outline-none"
                  >
                    <circle r={active ? 4.2 : 3.2} fill="var(--surface)" stroke={categoryColors[skill.category]} strokeWidth={active ? ".65" : ".4"} className="node-ring transition-all" />
                    <circle r="1" fill={categoryColors[skill.category]} />
                    <text y="6.4" textAnchor="middle" fill="var(--ink)" fontFamily="JetBrains Mono" fontSize="1.9">{skill.name}</text>
                  </g>
                );
              })}
            </svg>
          </div>

          <aside className="border border-editorial bg-[var(--surface)] p-6 md:p-8" aria-live="polite" data-testid="selected-skill-panel">
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[var(--gold)]">Selected skill</p>
            <h3 data-testid="selected-skill-name" className="mt-5 font-editorial text-4xl leading-none">{selected.name}</h3>
            <div className="mt-8 grid grid-cols-2 gap-4 border-y border-editorial py-4">
              <div><p className="font-mono text-[9px] uppercase tracking-[.16em] text-[var(--muted)]">Category</p><p data-testid="selected-skill-category" className="mt-2 text-sm">{selected.category}</p></div>
              <div><p className="font-mono text-[9px] uppercase tracking-[.16em] text-[var(--muted)]">Proficiency</p><p data-testid="selected-skill-proficiency" className="mt-2 text-sm">{selected.proficiency}</p></div>
            </div>
            <p data-testid="selected-skill-description" className="mt-7 text-sm leading-7 text-[var(--muted)]">{selected.description}</p>
            <div className="mt-8">
              <div className="mb-2 flex justify-between font-mono text-[9px] uppercase tracking-[.15em] text-[var(--muted)]"><span>Visual guide</span><span>{selected.proficiency}</span></div>
              <div className="h-1.5 w-full bg-[var(--bg)]"><div className={cn("h-full bg-[var(--gold)] transition-all duration-500", proficiencyWidth[selected.proficiency])} /></div>
            </div>
            <p data-testid="skill-map-note" className="mt-10 border-t border-editorial pt-5 font-mono text-[9px] leading-5 tracking-[.06em] text-[var(--muted)]">Current map: skills, foundations, and active learning areas — no project nodes added yet.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}