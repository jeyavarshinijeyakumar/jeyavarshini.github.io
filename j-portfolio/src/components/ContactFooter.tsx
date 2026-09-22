import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export function ContactFooter() {
  return (
    <footer id="contact" className="mx-auto max-w-7xl px-5 pb-10 pt-24 md:px-8 lg:px-12" data-testid="site-footer">
      <div className="grid gap-10 border-t border-editorial pt-7 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p data-testid="footer-name" className="font-editorial text-3xl">Jeyavarshini J. / 2026</p>
          <p data-testid="footer-tagline" className="mt-3 font-mono text-[10px] uppercase tracking-[.18em] text-[var(--muted)]">Always learning. Always building. Always improving.</p>
          <p data-testid="footer-location" className="mt-2 font-mono text-[10px] uppercase tracking-[.18em] text-[var(--muted)]">Madurai, India</p>
        </div>
        <div className="flex flex-wrap gap-5" aria-label="Contact links">
          <a href="mailto:jeyavarshinijeyakumar@gmail.com?subject=Let's%20connect" className="underline-link flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.14em]" data-testid="footer-email-link"><Mail size={14} /> Email</a>
          <a href="https://www.linkedin.com/in/jeyavarshini-j" target="_blank" rel="noreferrer" className="underline-link flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.14em]" data-testid="footer-linkedin-link"><Linkedin size={14} /> LinkedIn</a>
          <a href="https://github.com/jeyavarshinijeyakumar" target="_blank" rel="noreferrer" className="underline-link flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.14em]" data-testid="footer-github-link"><Github size={14} /> GitHub</a>
        </div>
      </div>
    </footer>
  );
}