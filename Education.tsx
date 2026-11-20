"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Languages } from "lucide-react";
import { certifications, education, languages } from "@/data/profile";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const certTints = ["from-cyan to-indigo", "from-violet to-indigo", "from-teal to-cyan"];
const langTints = [
  "border-cyan/40 text-cyan-soft",
  "border-indigo/50 text-indigo-soft",
  "border-violet/50 text-violet-soft",
  "border-teal/40 text-teal-soft",
  "border-cyan/40 text-cyan-soft",
];

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="relative">
      <div aria-hidden="true" className="pointer-events-none absolute left-0 top-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.14),transparent_65%)] blur-2xl" />
      <div className="section">
        <SectionHeading
          id="education"
          title="Education and credentials"
          lede="Commerce degrees, accounting training and compliance certification."
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Education timeline */}
          <div>
            <Reveal>
              <h3 className="flex items-center gap-2.5 text-lg font-semibold text-white">
                <GraduationCap className="h-5 w-5 text-cyan" aria-hidden="true" />
                Education
              </h3>
            </Reveal>
            <ol className="relative mt-8 border-l border-white/10 pl-8">
              {education.map((e, i) => (
                <motion.li
                  key={e.degree}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pb-10 last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-ink ${
                      i === 0 ? "bg-gradient-to-br from-cyan to-violet shadow-[0_0_18px_rgba(34,211,238,0.7)]" : "bg-white/30"
                    }`}
                  />
                  {e.period && <p className="text-sm font-semibold text-cyan-soft">{e.period}</p>}
                  <h4 className="mt-1 font-display text-2xl leading-snug text-white sm:text-[1.7rem]">{e.degree}</h4>
                  {e.school && <p className="mt-1 text-haze">{e.school}</p>}
                </motion.li>
              ))}
            </ol>
          </div>

          <div className="space-y-12">
            {/* Certifications */}
            <div>
              <Reveal>
                <h3 className="flex items-center gap-2.5 text-lg font-semibold text-white">
                  <Award className="h-5 w-5 text-violet-soft" aria-hidden="true" />
                  Certifications and training
                </h3>
              </Reveal>
              <ul className="mt-6 space-y-3">
                {certifications.map((c, i) => (
                  <motion.li
                    key={c.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.08 }}
                    whileHover={{ x: 6 }}
                    className="glass flex items-center gap-4 rounded-2xl p-4 pr-5"
                  >
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${certTints[i % certTints.length]} text-white`}
                    >
                      <c.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="text-[1.02rem] font-semibold text-white">{c.label}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div>
              <Reveal>
                <h3 className="flex items-center gap-2.5 text-lg font-semibold text-white">
                  <Languages className="h-5 w-5 text-teal" aria-hidden="true" />
                  Languages
                </h3>
              </Reveal>
              <ul className="mt-6 flex flex-wrap gap-3">
                {languages.map((lang, i) => (
                  <motion.li
                    key={lang}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    whileHover={{ y: -3 }}
                    className={`rounded-full border bg-white/[0.04] px-5 py-2.5 text-[0.98rem] font-semibold ${langTints[i % langTints.length]}`}
                  >
                    {lang}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
