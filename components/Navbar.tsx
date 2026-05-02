"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, personal } from "@/data/portfolio";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
    );

    sections.forEach((section) => observer.observe(section));

    function handleScroll() {
      setIsScrolled(window.scrollY > 16);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-lg border px-4 py-3 transition-all duration-300 ${
          isScrolled
            ? "border-cyan-300/20 bg-slate-950/76 shadow-[0_16px_48px_rgba(2,6,23,0.38)] backdrop-blur-2xl"
            : "border-white/10 bg-slate-950/36 backdrop-blur-xl"
        }`}
        aria-label="Primary navigation"
      >
        <a href="#home" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="aj-logo flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-300/35 bg-cyan-300/10 text-sm font-bold text-white shadow-[0_0_28px_rgba(34,211,238,0.16)] transition duration-200 group-hover:border-violet-300/50">
            AJ
          </span>
          <span className="hidden text-sm font-semibold text-slate-100 sm:block">{personal.name}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative rounded-lg px-3 py-2 text-sm font-medium transition duration-200 hover:text-white ${
                active === link.id ? "text-cyan-200" : "text-slate-300"
              }`}
            >
              {link.label}
              <span
                className={`absolute inset-x-3 -bottom-0.5 h-px rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 transition duration-200 ${
                  active === link.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={personal.resumeUrl}
            download
            className="group inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition duration-200 hover:border-cyan-200/60 hover:bg-cyan-300/16 hover:shadow-[0_0_28px_rgba(34,211,238,0.18)]"
          >
            <Download className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
            Download CV
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-100 transition hover:border-cyan-300/40 hover:text-cyan-200 lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-7xl rounded-lg border border-cyan-300/15 bg-slate-950/90 p-3 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-3 py-3 text-sm font-medium transition ${
                    active === link.id ? "bg-cyan-300/10 text-cyan-100" : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href={personal.resumeUrl}
              download
              onClick={() => setIsOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-300 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-white"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
