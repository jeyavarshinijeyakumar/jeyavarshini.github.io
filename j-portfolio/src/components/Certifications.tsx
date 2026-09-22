import { useEffect, useState, type KeyboardEvent } from "react";
import { ArrowUpRight, Award, CalendarDays, ExternalLink, X } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

type Certification = {
  title: string;
  issuer: string;
  date?: string;
  code?: string;
  registration?: string;
  image: string;
  verificationUrl?: string;
  note?: string;
};

const certifications: Certification[] = [
  {
    title: "ChatGPT for Everyone",
    issuer: "HCL-GUVI",
    date: "June 8, 2026",
    code: "2131A708iLuP7N66g9",
    image: "/certificates/chatgpt-for-everyone.png",
    verificationUrl: "https://www.guvi.in/certificate?id=2131A708iLuP7N66g9",
  },
  {
    title: "Generative AI Mastermind",
    issuer: "Outskill",
    image: "/certificates/generative-ai-mastermind.jpg",
  },
  {
    title: "Introduction to Prompt Engineering with GitHub Copilot",
    issuer: "Simplilearn / Microsoft",
    date: "August 31, 2026",
    code: "10672967",
    image: "/certificates/prompt-engineering-github-copilot.jpg",
    note: "The certificate states that it acknowledges completion of a Microsoft course on the Simplilearn portal and is not an official Microsoft certification.",
  },
  {
    title: "AI Tools & Claude Workshop",
    issuer: "be10X",
    date: "August 20, 2026",
    image: "/certificates/ai-tools-claude.jpg",
    note: "A QR code is visible on the certificate; no verification URL has been added without a confirmed destination.",
  },
  {
    title: "Git Training",
    issuer: "Simplilearn",
    date: "September 3, 2026",
    code: "10687724",
    image: "/certificates/git-training.jpg",
  },
  {
    title: "Learn Ethical Hacking Fundamentals in 90 Minutes",
    issuer: "WsCube Tech",
    date: "September 9, 2026",
    registration: "WS/2026/M/62995",
    image: "/certificates/ethical-hacking-fundamentals.jpg",
  },
  {
    title: "SkillQuest – Generative AI Literacy",
    issuer: "Simplilearn",
    date: "September 12, 2026",
    code: "84909156",
    image: "/certificates/generative-ai-literacy.jpg",
  },
];

export function Certifications() {
  const [selected, setSelected] = useState<Certification | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected]);

  const openCertificate = (cert: Certification) => setSelected(cert);

  const handleRowKeyDown = (event: KeyboardEvent<HTMLButtonElement>, cert: Certification) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openCertificate(cert);
    }
  };

  return (
    <>
      <section id="certifications" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32 lg:px-12" aria-labelledby="certifications-title">
        <SectionLabel id="certifications-title" number="05" eyebrow="Credentials / Learning" title="Certifications that mark the learning path." />

        <div className="mt-12 border-t border-editorial" data-testid="certifications-list">
          {certifications.map((cert, index) => (
            <button
              type="button"
              key={cert.title}
              onClick={() => openCertificate(cert)}
              onKeyDown={(event) => handleRowKeyDown(event, cert)}
              className="group grid w-full gap-5 border-b border-editorial py-6 text-left transition-colors hover:bg-[var(--surface-2)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--gold)] md:grid-cols-[70px_1fr_auto] md:items-center md:px-4"
              data-testid={`certification-${index + 1}-row`}
              aria-label={`View certificate: ${cert.title}`}
            >
              <span className="font-mono text-xs text-[var(--gold)]">{String(index + 1).padStart(2, "0")}</span>
              <span className="flex min-w-0 items-start gap-4">
                <Award size={17} className="mt-1 shrink-0 text-[var(--muted)] transition-colors group-hover:text-[var(--gold)]" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-sm font-medium md:text-base">{cert.title}</span>
                  <span className="mt-1 block font-mono text-[9px] uppercase tracking-[.14em] text-[var(--muted)]">
                    {cert.issuer}{cert.date ? ` · ${cert.date}` : ""}
                  </span>
                </span>
              </span>
              <span className="flex items-center gap-2 pl-8 font-mono text-[9px] uppercase tracking-[.14em] text-[var(--muted)] transition-colors group-hover:text-[var(--gold)] md:pl-0">
                View certificate <ArrowUpRight size={15} aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[9px] uppercase tracking-[.14em] text-[var(--muted)]" data-testid="certification-summary">
          <span data-testid="certification-count">07 certificates uploaded</span>
          <span>Actual certificate images shown</span>
          <span>Verification links only where confirmed</span>
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
          data-testid="certificate-modal"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setSelected(null);
          }}
        >
          <div className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden border border-[var(--line)] bg-[var(--surface)] shadow-2xl">
            <div className="flex items-start justify-between gap-5 border-b border-editorial p-4 md:p-5">
              <div className="min-w-0">
                <p className="font-mono text-[9px] uppercase tracking-[.18em] text-[var(--gold)]">Certificate / {selected.issuer}</p>
                <h2 id="certificate-modal-title" data-testid="certificate-modal-title" className="mt-2 font-editorial text-2xl leading-tight md:text-3xl">{selected.title}</h2>
              </div>
              <button type="button" onClick={() => setSelected(null)} className="shrink-0 border border-editorial p-2 text-[var(--muted)] transition-colors hover:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--gold)]" aria-label="Close certificate viewer" data-testid="certificate-modal-close">
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="min-h-0 overflow-auto p-4 md:p-6">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
                <div className="overflow-hidden border border-editorial bg-black/20" data-testid="certificate-image-frame">
                  <img src={selected.image} alt={`${selected.title} certificate for Jeyavarshini J.`} className="block h-auto w-full" data-testid="certificate-image" />
                </div>

                <aside className="border border-editorial bg-[var(--surface-2)] p-5" data-testid="certificate-metadata">
                  <p className="font-mono text-[9px] uppercase tracking-[.18em] text-[var(--gold)]">Certificate details</p>
                  <dl className="mt-5 space-y-5">
                    <div>
                      <dt className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.14em] text-[var(--muted)]"><Award size={13} aria-hidden="true" /> Issuer</dt>
                      <dd className="mt-1 text-sm">{selected.issuer}</dd>
                    </div>
                    {selected.date && (
                      <div>
                        <dt className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.14em] text-[var(--muted)]"><CalendarDays size={13} aria-hidden="true" /> Issued</dt>
                        <dd className="mt-1 text-sm">{selected.date}</dd>
                      </div>
                    )}
                    {selected.code && (
                      <div>
                        <dt className="font-mono text-[9px] uppercase tracking-[.14em] text-[var(--muted)]">Certificate code</dt>
                        <dd className="mt-1 break-all font-mono text-xs">{selected.code}</dd>
                      </div>
                    )}
                    {selected.registration && (
                      <div>
                        <dt className="font-mono text-[9px] uppercase tracking-[.14em] text-[var(--muted)]">Registration no.</dt>
                        <dd className="mt-1 break-all font-mono text-xs">{selected.registration}</dd>
                      </div>
                    )}
                  </dl>

                  {selected.verificationUrl ? (
                    <a href={selected.verificationUrl} target="_blank" rel="noreferrer" className="mt-7 flex items-center justify-between gap-3 border border-[var(--gold)]/50 px-4 py-3 font-mono text-[9px] uppercase tracking-[.12em] text-[var(--gold)] transition-colors hover:bg-[var(--gold)] hover:text-[#0B0F17]" data-testid="certificate-verification-link">
                      Verify certificate <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  ) : (
                    <p className="mt-7 border border-editorial p-4 font-mono text-[9px] uppercase leading-5 tracking-[.12em] text-[var(--muted)]" data-testid="certificate-verification-note">
                      No external verification link added from the supplied certificate.
                    </p>
                  )}

                  {selected.note && <p className="mt-4 text-xs leading-5 text-[var(--muted)]" data-testid="certificate-note">{selected.note}</p>}
                </aside>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
