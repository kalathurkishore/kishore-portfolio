import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

function MainContent() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resumeUrl = import.meta.env.BASE_URL + "Kalathur_Chenchu_Kishore_Kumar.pdf";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Publications />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8 text-xs text-slate-500 dark:text-slate-400 transition-colors duration-200">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            <span className="text-slate-800 dark:text-slate-300 font-semibold">Kalathur Chenchu Kishore Kumar</span>
            <span>•</span>
            <span>AI Engineer Portfolio</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href={resumeUrl}
              download="Kalathur_Chenchu_Kishore_Kumar.pdf"
              className="hover:text-sky-600 dark:hover:text-cyan-400 font-medium transition-colors"
            >
              Resume
            </a>
            <a
              href="https://scholar.google.com/citations?user=vsBFI_YAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-600 dark:hover:text-cyan-400 font-medium transition-colors"
            >
              Google Scholar
            </a>
            <a
              href="https://www.alphaxiv.org/@kalathur-chenchu-kishore-kumar"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-600 dark:hover:text-cyan-400 font-medium transition-colors"
            >
              alphaXiv
            </a>
            <a
              href="https://github.com/kalathurkishore"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-600 dark:hover:text-cyan-400 font-medium transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kalathurchenchukishorekumar/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-600 dark:hover:text-cyan-400 font-medium transition-colors"
            >
              LinkedIn
            </a>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white transition-all"
              aria-label="Scroll to top"
            >
              ↑ Top
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}