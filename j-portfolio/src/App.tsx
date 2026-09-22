import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Constellation } from "./components/Constellation";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Certifications } from "./components/Certifications";
import { Goals } from "./components/Goals";
import { ContactFooter } from "./components/ContactFooter";

type Theme = "dark" | "light";

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("jeyavarshini-theme");
    return stored === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("jeyavarshini-theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <a href="#main-content" className="skip-link" data-testid="skip-to-content">Skip to content</a>
      <Header theme={theme} onToggle={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <main id="main-content">
        <Hero />
        <About />
        <Constellation />
        <Skills />
        <Education />
        <Certifications />
        <Goals />
      </main>
      <ContactFooter />
    </div>
  );
}