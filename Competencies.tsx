"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { competencies, skillGroups, type SkillGroup } from "@/data/profile";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

type Filter = "All" | SkillGroup;

const tintFor = (group: SkillGroup) => skillGroups.find((g) => g.name === group)?.tint ?? "from-cyan to-indigo";

export function Competencies() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = useMemo(
    () => (filter === "All" ? competencies : competencies.filter((c) => c.group === filter)),
    [filter]
  );

  const filters: { name: Filter; count: number }[] = [
    { name: "All", count: competencies.length },
    ...skillGroups.map((g) => ({ name: g.name, count: competencies.filter((c) => c.group === g.name).length })),
  ];

  return (
    <section id="skills" aria-labelledby="skills-title" className="relative">
      <div className="section">
        <div>
          <SectionHeading
            id="skills"
            title="Core competencies"
            lede="Twenty skills across exchange, cash handling, accounting and customer compliance. Filter by area to focus the list."
          />
          <Reveal delay={0.1}>
            <div role="group" aria-label="Filter skills by area" className="mt-10 flex flex-wrap gap-2">
              {filters.map((f) => {
                const active = filter === f.name;
                return (
                  <button
                    key={f.name}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(f.name)}
                    className={`relative isolate rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      active ? "text-white" : "text-haze hover:text-white"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="skill-filter"
                        className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo to-violet"
                        transition={{ type: "spring", stiffness: 400, damping: 34 }}
                      />
                    )}
                    {!active && <span aria-hidden="true" className="absolute inset-0 -z-10 rounded-full border border-white/15" />}
                    {f.name === "All" ? "All skills" : f.name}
                    <span className={`ml-1.5 tabular-nums ${active ? "text-white/80" : "text-haze/70"}`}>{f.count}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <motion.ul layout className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((skill, i) => (
              <motion.li
                key={skill.label}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, delay: Math.min(i, 12) * 0.02 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-4 sm:p-5 transition-colors duration-300 hover:border-white/20"
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-gradient-to-br ${tintFor(
                    skill.group
                  )} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-35`}
                />
                <span
                  className={`grid h-10 w-10 place-items-center rounded-xl sm:h-12 sm:w-12 bg-gradient-to-br ${tintFor(
                    skill.group
                  )} text-white shadow-[0_10px_24px_-10px_rgba(91,91,247,0.8)] transition-transform duration-300 group-hover:scale-110`}
                >
                  <skill.icon className="h-[22px] w-[22px]" aria-hidden="true" />
                </span>
                <p className="mt-4 text-[0.92rem] font-semibold leading-snug text-white sm:text-[1rem]">{skill.label}</p>
                <p className="mt-1 text-xs text-haze sm:text-sm">{skill.group}</p>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
