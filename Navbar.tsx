"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/profile";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  // Glass background once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape and lock page scroll while it is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-cyan via-indigo to-violet"
      />
      <nav
        aria-label="Main"
        className={`mx-auto mt-3 flex w-[calc(100%-1.5rem)] max-w-site items-center justify-between rounded-full px-3 py-2 transition-all duration-500 sm:mt-4 sm:px-4 ${
          scrolled ? "glass shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]" : "border border-transparent"
        }`}
      >
        <a href="#top" className="group flex items-center gap-3 rounded-full pr-2" aria-label="Mohammed Shabeer E — back to top">
          <span className="grid h-10 w-10 rounded-full bg-gradient-to-br from-cyan via-indigo to-violet p-[1.5px] transition-transform duration-500 group-hover:scale-110">
            <span className="grid h-full w-full place-items-center rounded-full bg-ink font-display text-lg leading-none text-white">
              MS
            </span>
          </span>
          <span className="hidden text-[0.95rem] font-semibold tracking-tight text-white sm:block">Mohammed Shabeer E</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative isolate rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-haze hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a href={profile.cv} download={profile.cvFileName} className="btn-primary hidden !px-5 !py-2.5 text-sm sm:inline-flex">
            <Download className="h-4 w-4" aria-hidden="true" />
            Download CV
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-cyan/60 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="scrim"
              className="fixed inset-0 -z-10 bg-ink/70 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="panel"
              id="mobile-menu"
              className="glass mx-3 mt-3 overflow-hidden rounded-3xl p-3 lg:hidden"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium transition ${
                        active === link.id ? "bg-white/10 text-white" : "text-mist hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href={profile.cv}
                download={profile.cvFileName}
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 w-full"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
