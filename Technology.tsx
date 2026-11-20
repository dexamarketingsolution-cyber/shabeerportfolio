"use client";

import { motion } from "framer-motion";
import { Calculator, Globe, Handshake, Laptop, type LucideIcon } from "lucide-react";
import { accountingSoftware, microsoftTools, partners, remittancePlatforms, type Tool } from "@/data/profile";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

type Panel = {
  title: string;
  note: string;
  icon: LucideIcon;
  tools: Tool[];
  tint: string;
  span?: string;
  layout: "tiles" | "rows" | "chips";
};

const panels: Panel[] = [
  {
    title: "Accounting software",
    note: "Ledgers, vouchers and reports",
    icon: Calculator,
    tools: accountingSoftware,
    tint: "from-indigo to-violet",
    layout: "tiles",
  },
  {
    title: "Microsoft tools",
    note: "Reporting and communication",
    icon: Laptop,
    tools: microsoftTools,
    tint: "from-cyan to-teal",
    layout: "rows",
  },
  {
    title: "Partners",
    note: "Exchange and payout partners",
    icon: Handshake,
    tools: partners,
    tint: "from-teal to-cyan",
    span: "md:col-span-2 lg:col-span-1",
    layout: "rows",
  },
  {
    title: "Remittance platforms",
    note: "Money transfer systems used daily at the counter",
    icon: Globe,
    tools: remittancePlatforms,
    tint: "from-violet to-indigo",
    span: "md:col-span-2 lg:col-span-3",
    layout: "chips",
  },
];

function Mark({ tool, tint, size = "md" }: { tool: Tool; tint: string; size?: "md" | "sm" }) {
  const Icon = tool.icon;
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center rounded-xl bg-gradient-to-br ${tint} p-[1.5px] ${
        size === "md" ? "h-12 w-12" : "h-10 w-10"
      }`}
    >
      <span className="grid h-full w-full place-items-center rounded-[10px] bg-ink/85 text-[0.8rem] font-extrabold tracking-wide text-white">
        {Icon ? <Icon className="h-5 w-5" /> : tool.mark}
      </span>
    </span>
  );
}

export function Technology() {
  return (
    <section id="tools" aria-labelledby="tools-title" className="relative bg-gradient-to-b from-ink via-deep/50 to-ink">
      <div className="section">
        <SectionHeading
          id="tools"
          title="Software and platforms"
          lede="The accounting systems, Microsoft tools, remittance platforms and partners I work with."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {panels.map((panel, i) => (
            <Reveal key={panel.title} delay={i * 0.08} className={panel.span ?? ""}>
              <article className="h-full rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-7">
                <header className="flex items-center gap-3">
                  <span className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br ${panel.tint} text-white`}>
                    <panel.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{panel.title}</h3>
                    <p className="text-sm text-haze">{panel.note}</p>
                  </div>
                </header>

                {panel.layout === "tiles" && (
                  <ul className="mt-6 grid grid-cols-2 gap-3">
                    {panel.tools.map((t) => (
                      <motion.li
                        key={t.name}
                        whileHover={{ y: -4 }}
                        className="flex flex-col items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition-colors hover:border-white/20"
                      >
                        <Mark tool={t} tint={panel.tint} />
                        <span className="text-[0.95rem] font-semibold text-mist">{t.name}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}

                {panel.layout === "rows" && (
                  <ul className={`mt-6 grid gap-3 ${panel.span ? "md:grid-cols-3 lg:grid-cols-1" : ""}`}>
                    {panel.tools.map((t) => (
                      <motion.li
                        key={t.name}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3 pr-4 transition-colors hover:border-white/20"
                      >
                        <Mark tool={t} tint={panel.tint} size="sm" />
                        <span className="text-[0.95rem] font-semibold text-mist">{t.name}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}

                {panel.layout === "chips" && (
                  <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
                    {panel.tools.map((t) => (
                      <motion.li
                        key={t.name}
                        whileHover={{ y: -4 }}
                        className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3 transition-colors hover:border-white/20"
                      >
                        <Mark tool={t} tint={panel.tint} size="sm" />
                        <span className="text-[0.85rem] font-semibold leading-tight text-mist sm:text-[0.92rem]">{t.name}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-haze/80">
          Product names belong to their respective owners and are shown as text for reference only.
        </p>
      </div>
    </section>
  );
}
