"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Building2, CalendarDays, CheckCircle2, ChevronDown, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import { experience, type Role } from "@/data/profile";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Experience() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 80%", "end 55%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <section id="experience" aria-labelledby="experience-title" className="relative bg-gradient-to-b from-ink via-deep/60 to-ink">
      <div className="section">
        <SectionHeading
          id="experience"
          title="Professional experience"
          lede="Exchange house operations and accounting roles in Dubai, UAE. Select a role to show or hide its responsibilities."
        />

        <div ref={listRef} className="relative mt-16">
          {/* Timeline rail */}
          <span aria-hidden="true" className="absolute bottom-4 left-[21px] top-4 w-px bg-white/10 md:left-[27px]" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY: fill }}
            className="absolute bottom-4 left-[21px] top-4 w-px origin-top bg-gradient-to-b from-cyan via-indigo to-violet md:left-[27px]"
          />
          <ol className="relative space-y-10">
            {experience.map((role, i) => (
              <TimelineItem key={role.company} role={role} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ role, index }: { role: Role; index: number }) {
  const [open, setOpen] = useState(role.current);
  const panelId = `role-${index}-details`;

  return (
    <li className="relative pl-14 md:pl-20">
      {/* Node */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-6 grid place-items-center rounded-full md:left-0 ${
          role.current
            ? "h-11 w-11 bg-gradient-to-br from-cyan via-indigo to-violet shadow-[0_0_30px_rgba(91,91,247,0.6)] md:h-14 md:w-14"
            : "h-11 w-11 border border-white/15 bg-panel md:h-14 md:w-14"
        }`}
      >
        {role.current && <span className="absolute inset-0 animate-pulse-ring rounded-full bg-indigo/50" />}
        <Briefcase className="relative h-5 w-5 text-white md:h-6 md:w-6" />
      </span>

      <Reveal delay={index * 0.1}>
        <article
          className={`rounded-3xl p-6 transition-shadow duration-500 sm:p-8 ${
            role.current
              ? "glass gradient-border shadow-[0_30px_80px_-30px_rgba(91,91,247,0.55)]"
              : "border border-white/[0.08] bg-white/[0.025] hover:border-white/15"
          }`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3 py-1 text-sm text-mist">
              <CalendarDays className="h-4 w-4 text-cyan" aria-hidden="true" />
              {role.period}
            </span>
            {role.current && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal/15 px-3 py-1 text-sm font-semibold text-teal-soft ring-1 ring-teal/30">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
                Current role
              </span>
            )}
          </div>

          <h3
            className={`mt-5 font-display leading-tight text-white ${
              role.current ? "text-3xl sm:text-[2.6rem]" : "text-2xl sm:text-3xl"
            }`}
          >
            {role.title}
          </h3>
          <p className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.98rem] text-haze">
            <span className="inline-flex items-center gap-1.5 font-semibold text-mist">
              <Building2 className="h-4 w-4 text-violet-soft" aria-hidden="true" />
              {role.company}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-teal" aria-hidden="true" />
              {role.location}
            </span>
          </p>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-mist transition hover:border-cyan/60 hover:text-white"
          >
            {open ? "Hide responsibilities" : "Show responsibilities"}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id={panelId}
                key="panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <ul className="grid gap-x-8 gap-y-3 pt-6 sm:grid-cols-2">
                  {role.highlights.map((h, i) => (
                    <motion.li
                      key={h}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i, duration: 0.35 }}
                      className="flex items-start gap-3 text-[0.98rem] leading-relaxed text-mist/90"
                    >
                      <CheckCircle2
                        className={`mt-1 h-[18px] w-[18px] shrink-0 ${role.current ? "text-cyan" : "text-violet-soft"}`}
                        aria-hidden="true"
                      />
                      {h}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </article>
      </Reveal>
    </li>
  );
}
