"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin, MessageSquare } from "lucide-react";
import { profile, serviceStrip } from "@/data/profile";
import { LinkedInIcon } from "./ui/BrandIcons";
import { useSiteReady } from "./ui/useSiteReady";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

const lineUp: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1, ease } },
};

/* Currency tokens that float around the portrait */
const tokens = [
  { code: "AED", symbol: "د.إ", className: "-left-10 top-6 sm:-left-16", delay: 0 },
  { code: "INR", symbol: "₹", className: "-right-8 top-0 sm:-right-14", delay: 0.6 },
  { code: "USD", symbol: "$", className: "-left-6 bottom-14 sm:-left-14", delay: 1.2 },
  { code: "EUR", symbol: "€", className: "-right-10 bottom-24 sm:-right-16", delay: 1.8 },
];

export function Hero() {
  const ready = useSiteReady();
  const state = ready ? "show" : "hidden";
  const titleParts = profile.title.split(" | ");

  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] flex-col pt-28 sm:pt-32">
      {/* Animated background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="grid-bg absolute inset-0 opacity-70" />
        <div className="absolute -left-[15%] -top-[20%] h-[42rem] w-[42rem] animate-drift rounded-full bg-[radial-gradient(circle,rgba(91,91,247,0.45),transparent_65%)] blur-2xl" />
        <div className="absolute -right-[10%] top-[5%] h-[36rem] w-[36rem] animate-drift-slow rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.38),transparent_65%)] blur-2xl" />
        <div className="absolute bottom-[-20%] left-[30%] h-[34rem] w-[34rem] animate-drift rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.3),transparent_65%)] blur-2xl [animation-delay:-8s]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <div className="mx-auto grid w-full max-w-site flex-1 items-center gap-16 px-5 pb-16 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10">
        {/* Copy */}
        <motion.div variants={container} initial="hidden" animate={state} className="order-2 lg:order-1">
          <motion.p
            variants={rise}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-3 pr-4 text-sm text-haze"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-teal" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal" />
            </span>
            Currently at <span className="font-semibold text-mist">{profile.company}</span>
          </motion.p>

          <h1 id="hero-title" className="mt-7 font-display text-[3.5rem] leading-[0.95] tracking-[-0.01em] text-white sm:text-[5rem] lg:text-[6.1rem]">
            <span className="sr-only">{profile.name}</span>
            <span aria-hidden="true" className="block overflow-hidden pb-1">
              <motion.span variants={lineUp} className="block">
                {profile.firstLine}
              </motion.span>
            </span>
            <span aria-hidden="true" className="block overflow-hidden pb-2">
              <motion.span variants={lineUp} className="block italic text-white/90">
                {profile.secondLine}
              </motion.span>
            </span>
          </h1>

          <motion.p variants={rise} className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-lg font-semibold sm:text-xl">
            {titleParts.map((part, i) => (
              <span key={part} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className="hidden h-5 w-px bg-white/25 sm:block" />}
                <span className={["text-cyan-soft", "text-indigo-soft", "text-violet-soft"][i % 3]}>{part}</span>
              </span>
            ))}
          </motion.p>

          <motion.p variants={rise} className="mt-6 max-w-xl text-[1.06rem] leading-relaxed text-haze">
            {profile.summary}
          </motion.p>

          <motion.div variants={rise} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-2.5">
            <motion.a href="#experience" className="btn-primary group sm:!px-5" whileTap={{ scale: 0.97 }}>
              Explore My Experience
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
            </motion.a>
            <motion.a href={profile.cv} download={profile.cvFileName} className="btn-ghost group sm:!px-5" whileTap={{ scale: 0.97 }}>
              <Download className="h-4 w-4 text-cyan transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
              Download My CV
            </motion.a>
            <motion.a href="#contact" className="btn-ghost group sm:!px-5" whileTap={{ scale: 0.97 }}>
              <MessageSquare className="h-4 w-4 text-violet-soft" aria-hidden="true" />
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div variants={rise} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-mist transition hover:-translate-y-0.5 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
            >
              <LinkedInIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label={`Email ${profile.email}`}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-mist transition hover:-translate-y-0.5 hover:border-cyan hover:bg-cyan hover:text-ink"
            >
              <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
            <span className="ml-1 inline-flex items-center gap-1.5 text-sm text-haze">
              <MapPin className="h-4 w-4 text-teal" aria-hidden="true" />
              {profile.location}
            </span>
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          className="order-1 flex justify-center lg:order-2 lg:justify-end lg:pr-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.1, ease, delay: 0.15 }}
        >
          <div className="relative h-[230px] w-[230px] sm:h-[290px] sm:w-[290px] lg:h-[330px] lg:w-[330px]">
            {/* Outer orbit */}
            <div aria-hidden="true" className="absolute -inset-10 rounded-full border border-dashed border-white/10 animate-spin-slow [animation-duration:60s] sm:-inset-14" />
            {/* Glow */}
            <div aria-hidden="true" className="absolute -inset-6 rounded-full bg-[conic-gradient(from_0deg,#22D3EE,#5B5BF7,#8B5CF6,#14B8A6,#22D3EE)] opacity-40 blur-3xl" />
            {/* Rotating gradient ring */}
            <div aria-hidden="true" className="absolute -inset-[7px] animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,#22D3EE,#5B5BF7,#8B5CF6,#14B8A6,#22D3EE)]" />
            <div aria-hidden="true" className="absolute -inset-[3px] rounded-full bg-ink" />
            {/* Photo */}
            <div className="relative h-full w-full overflow-hidden rounded-full bg-white">
              <Image
                src={profile.photo}
                alt="Portrait of Mohammed Shabeer E"
                fill
                priority
                sizes="(min-width: 1024px) 330px, (min-width: 640px) 290px, 230px"
                className="object-cover object-top"
              />
            </div>

            {/* Floating currency tokens */}
            {tokens.map((t) => (
              <motion.div
                key={t.code}
                aria-hidden="true"
                className={`absolute flex items-center gap-2 rounded-2xl border border-white/15 bg-panel/90 px-3 py-2 backdrop-blur-md shadow-[0_12px_30px_-12px_rgba(0,0,0,0.7)] ${t.className}`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: t.delay }}
              >
                <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-cyan/90 to-violet/90 text-[0.8rem] font-bold text-white">
                  {t.symbol}
                </span>
                <span className="text-xs font-bold tracking-wide text-white">{t.code}</span>
              </motion.div>
            ))}

            {/* Experience badge */}
            <motion.div
              className="absolute -bottom-7 left-1/2 flex items-center gap-3 whitespace-nowrap rounded-2xl border border-white/15 bg-panel/95 px-4 py-2.5 backdrop-blur-md shadow-[0_16px_40px_-14px_rgba(0,0,0,0.75)]"
              style={{ x: "-50%" }}
              initial={{ opacity: 0, y: 12 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ delay: 0.9, duration: 0.7, ease }}
            >
              <span className="font-display text-3xl leading-none text-gradient">4+</span>
              <span className="text-xs leading-tight text-mist/80">
                years in UAE
                <br />
                financial services
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Service strip */}
      <div className="relative border-y border-white/[0.07] bg-white/[0.02] py-4 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
          {[...serviceStrip, ...serviceStrip].map((s, i) => (
            <span
              key={`${s.label}-${i}`}
              aria-hidden={i >= serviceStrip.length ? "true" : undefined}
              className="flex items-center gap-2.5 whitespace-nowrap text-sm font-medium text-haze"
            >
              <s.icon className="h-4 w-4 text-cyan" aria-hidden="true" />
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
