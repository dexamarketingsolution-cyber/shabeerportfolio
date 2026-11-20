"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/profile";
import { Counter } from "./ui/Counter";
import { SectionHeading } from "./ui/SectionHeading";

const accents = [
  "from-cyan to-indigo",
  "from-indigo to-violet",
  "from-violet to-teal",
  "from-teal to-cyan",
];

export function Achievements() {
  return (
    <section id="achievements" aria-labelledby="achievements-title" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(91,91,247,0.22),transparent_55%),radial-gradient(ellipse_at_85%_100%,rgba(20,184,166,0.18),transparent_55%)]" />
        <div className="grid-bg absolute inset-0 opacity-40" />
      </div>
      <div className="section">
        <SectionHeading
          id="achievements"
          align="center"
          title="Achievements in numbers"
          lede="Verified figures from day-to-day branch operations."
        />

        <ul className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.li
              key={s.label}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-3xl p-5 sm:p-7"
            >
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accents[i]} opacity-80`}
              />
              <span
                aria-hidden="true"
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${accents[i]} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40`}
              />
              <span
                className={`grid h-10 w-10 place-items-center rounded-2xl sm:h-12 sm:w-12 bg-gradient-to-br ${accents[i]} text-white shadow-lg`}
              >
                <s.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-6 font-display text-[3.2rem] leading-none text-white sm:mt-8 sm:text-[4.2rem]">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm leading-snug text-haze sm:text-[0.97rem]">{s.label}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
