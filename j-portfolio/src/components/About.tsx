import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32 lg:px-12" aria-labelledby="about-title">
      <SectionLabel id="about-title" number="01" eyebrow="Profile / About" title="A practical learner with an eye on what’s next." />
      <div className="mt-14 grid gap-10 md:grid-cols-[.3fr_1fr]">
        <p data-testid="about-intro-label" className="font-mono text-[10px] uppercase tracking-[.2em] text-[var(--gold)]">The short version</p>
        <div className="max-w-4xl space-y-6 text-lg leading-8 text-[var(--muted)] md:text-xl">
          <p data-testid="about-paragraph-1">Hello! I'm Jeyavarshini J, a Computer Science Engineering student at Sethu Institute of Technology, Kariapatti, and an aspiring Software Developer passionate about building practical, real-world solutions.</p>
          <p data-testid="about-paragraph-2">My technical journey is built on strong foundations in Python, Java, HTML, SQL, and computer networking. I am currently expanding my knowledge in Full-Stack Development and Generative AI through hands-on learning, projects, and industry-oriented certifications.</p>
          <p data-testid="about-paragraph-3">I enjoy exploring modern technologies and experimenting with AI-powered tools to understand how they can be integrated into websites and applications. I also have experience with Git and value collaborative and organized development practices.</p>
          <p data-testid="about-paragraph-4">I consider myself curious, adaptable, and committed to continuous learning. I enjoy turning ideas into working solutions and continuously improving my technical skills through practice.</p>
          <p data-testid="about-paragraph-5">My immediate career goal is to begin my journey as a Software Developer, contribute to meaningful projects, collaborate with experienced professionals, and grow into a well-rounded technology professional.</p>
          <p data-testid="about-closing" className="border-l border-[var(--gold)] pl-5 font-editorial text-2xl italic leading-tight text-[var(--ink)]">Always learning. Always building. Always improving.</p>
        </div>
      </div>
    </section>
  );
}