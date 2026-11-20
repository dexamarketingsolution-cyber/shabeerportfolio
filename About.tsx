"use client";

import { motion } from "framer-motion";
import { expertise, profile } from "@/data/profile";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const tints = [
  "from-cyan/25 to-indigo/10 text-cyan-soft",
  "from-indigo/25 to-violet/10 text-indigo-soft",
  "from-violet/25 to-teal/10 text-violet-soft",
  "from-teal/25 to-cyan/10 text-teal-soft",
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative">
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-20 -z-10 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.12),transparent_65%)] blur-2xl" />
      <div className="section">
        <SectionHeading
          id="about"
          title="Accuracy at the counter, clarity in the books"
          lede="An accounting and exchange house professional who keeps a busy Dubai branch balanced — from the first customer of the day to the end-of-day close."
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          {/* Editorial copy */}
          <Reveal className="space-y-6 text-[1.06rem] leading-[1.8] text-mist/85">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-[4.2rem] first-letter:leading-[0.8] first-letter:text-cyan">
              I work as Branch Accountant, Supervisor and Cashier at {profile.company} in Satwa, Dubai. My day covers
              foreign currency exchange, remittance processing and WPS services for retail and corporate customers —
              more than 80 transactions daily — alongside cash float management, till balancing and daily branch
              reporting.
            </p>
            <p>
              Before that, as Accountant cum Data Entry Officer at City Baba Group, I recorded accounting transactions in
              Tally ERP, managed accounts payable and receivable, reconciled bank accounts, prepared payroll and salary
              reports, and produced monthly financial reports in Microsoft Excel.
            </p>
            <p>
              I hold a Master of Commerce from Madurai Kamaraj University, and I bring AML/KYC discipline and a
              customer-first approach to every transaction.
            </p>

            <dl className="grid grid-cols-3 gap-4 border-t border-white/10 pt-7">
              <div>
                <dt className="text-sm text-haze">Experience</dt>
                <dd className="mt-1 font-display text-3xl text-white">{profile.experience}</dd>
              </div>
              <div>
                <dt className="text-sm text-haze">Based in</dt>
                <dd className="mt-1 font-display text-3xl text-white">Dubai</dd>
              </div>
              <div>
                <dt className="text-sm text-haze">Languages</dt>
                <dd className="mt-1 font-display text-3xl text-white">5</dd>
              </div>
            </dl>
          </Reveal>

          {/* Expertise cards */}
          <div>
            <Reveal>
              <h3 className="text-lg font-semibold text-white">Areas of expertise</h3>
            </Reveal>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {expertise.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                  transition={{ duration: 0.55, delay: (i % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className={`group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06] ${
                    i === expertise.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${tints[i % tints.length]} ring-1 ring-white/10 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}
                  >
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-[0.97rem] font-medium leading-snug text-mist">{item.label}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
