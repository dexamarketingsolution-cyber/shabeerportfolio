"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Download, Loader2, Mail, MapPin, Phone, PhoneCall, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { profile } from "@/data/profile";
import { LinkedInIcon } from "./ui/BrandIcons";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

type Field = "name" | "email" | "subject" | "message";
type Status = { kind: "idle" | "sending" | "sent" | "mail-app" | "error"; text?: string };

// Optional: set NEXT_PUBLIC_WEB3FORMS_KEY in Vercel to deliver messages straight to the inbox.
// Without it, the form opens the visitor's email app with the message ready to send.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Satwa%2C%20Dubai%2C%20UAE";

type ContactCard = {
  label: string;
  value: string;
  href: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  tint: string;
  external?: boolean;
};

const cards: ContactCard[] = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail, tint: "from-cyan to-indigo" },
  { label: "Phone", value: profile.phone, href: profile.phoneHref, icon: Phone, tint: "from-indigo to-violet" },
  { label: "Alternative phone", value: profile.altPhone, href: profile.altPhoneHref, icon: PhoneCall, tint: "from-violet to-teal" },
  { label: "Location", value: profile.location, href: mapsUrl, icon: MapPin, tint: "from-teal to-cyan", external: true },
  {
    label: "LinkedIn",
    value: "mohammed-shabeer-edakkat-",
    href: profile.linkedin,
    icon: LinkedInIcon,
    tint: "from-[#0A66C2] to-indigo",
    external: true,
  },
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function Contact() {
  const [values, setValues] = useState<Record<Field, string>>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [copied, setCopied] = useState(false);

  const update = (field: Field, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<Field, string>> = {};
    if (!values.name.trim()) next.name = "Enter your name.";
    if (!emailPattern.test(values.email.trim())) next.email = "Enter a valid email address, like name@company.com.";
    if (!values.subject.trim()) next.subject = "Add a subject so I know what it's about.";
    if (values.message.trim().length < 10) next.message = "Write a message of at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const openMailApp = () => {
    const body = `${values.message.trim()}\n\n— ${values.name.trim()}\n${values.email.trim()}`;
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setStatus({
      kind: "mail-app",
      text: "Your email app is opening with the message ready. Press send there to deliver it.",
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    if (!WEB3FORMS_KEY) {
      openMailApp();
      return;
    }

    const form = e.currentTarget;
    const botcheck = (form.elements.namedItem("botcheck") as HTMLInputElement | null)?.checked;
    if (botcheck) return;

    setStatus({ kind: "sending" });
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: "Portfolio website",
          name: values.name.trim(),
          email: values.email.trim(),
          subject: `Portfolio: ${values.subject.trim()}`,
          message: values.message.trim(),
        }),
      });
      const data = (await res.json()) as { success?: boolean };
      if (!res.ok || !data.success) throw new Error("Request failed");
      setStatus({ kind: "sent", text: "Message sent. I'll reply to your email soon." });
      setValues({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus({
        kind: "error",
        text: "The message didn't go through. Check your connection and try again, or email me directly.",
      });
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the email link still works */
    }
  };

  const inputBase =
    "w-full rounded-2xl border bg-white/[0.04] px-4 py-3.5 text-[0.98rem] text-white placeholder:text-haze/60 transition focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-cyan/60";
  const fieldClass = (f: Field) => `${inputBase} ${errors[f] ? "border-rose-400/70" : "border-white/10 focus:border-transparent"}`;

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -left-40 bottom-0 h-[34rem] w-[34rem] animate-drift rounded-full bg-[radial-gradient(circle,rgba(91,91,247,0.28),transparent_65%)] blur-2xl" />
        <div className="absolute -right-40 top-10 h-[30rem] w-[30rem] animate-drift-slow rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.22),transparent_65%)] blur-2xl" />
      </div>

      <div className="section">
        <SectionHeading
          id="contact"
          title="Let's work together"
          lede="Open to branch accounting, cashier and exchange house operations roles in the UAE. Call, email or send a message below."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          {/* Contact cards */}
          <div className="space-y-3">
            {cards.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.06}>
                <div className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex min-w-0 flex-1 items-center gap-4"
                    aria-label={`${c.label}: ${c.value}${c.external ? " (opens in a new tab)" : ""}`}
                  >
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${c.tint} text-white transition-transform duration-300 group-hover:scale-110`}
                    >
                      <c.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-haze">{c.label}</span>
                      <span className="block truncate text-[1.02rem] font-semibold text-white">{c.value}</span>
                    </span>
                  </a>
                  {c.label === "Email" && (
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label={copied ? "Email address copied" : "Copy email address"}
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 text-haze transition hover:border-cyan/60 hover:text-white"
                    >
                      {copied ? <Check className="h-4 w-4 text-teal" /> : <Copy className="h-4 w-4" />}
                    </button>
                  )}
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.35}>
              <div className="gradient-border mt-6 flex flex-col items-start gap-4 rounded-2xl bg-gradient-to-br from-indigo/15 via-violet/10 to-teal/10 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">Download my CV</p>
                  <p className="text-sm text-haze">Experience, education and skills in one PDF.</p>
                </div>
                <a href={profile.cv} download={profile.cvFileName} className="btn-primary shrink-0">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download CV
                </a>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="glass gradient-border rounded-3xl p-6 shadow-[0_30px_80px_-30px_rgba(91,91,247,0.5)] sm:p-8"
              aria-describedby="form-status"
            >
              <h3 className="font-display text-3xl text-white">Send a message</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <FormField id="name" label="Name" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Your full name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={fieldClass("name")}
                  />
                </FormField>
                <FormField id="email" label="Email" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    value={values.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="name@company.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={fieldClass("email")}
                  />
                </FormField>
              </div>
              <div className="mt-4">
                <FormField id="subject" label="Subject" error={errors.subject}>
                  <input
                    id="subject"
                    name="subject"
                    value={values.subject}
                    onChange={(e) => update("subject", e.target.value)}
                    placeholder="Job opportunity, interview request…"
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    className={fieldClass("subject")}
                  />
                </FormField>
              </div>
              <div className="mt-4">
                <FormField id="message" label="Message" error={errors.message}>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Tell me about the role or how I can help."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`${fieldClass("message")} resize-y`}
                  />
                </FormField>
              </div>

              {/* Spam trap for bots — hidden from people */}
              <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

              <motion.button
                type="submit"
                disabled={status.kind === "sending"}
                whileTap={{ scale: 0.97 }}
                className="btn-primary mt-6 w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto"
              >
                {status.kind === "sending" ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : (
                  <Send className="h-4 w-4" aria-hidden="true" />
                )}
                {status.kind === "sending" ? "Sending message…" : "Send message"}
              </motion.button>

              <div id="form-status" role="status" aria-live="polite" className="min-h-[1.5rem]">
                <AnimatePresence mode="wait">
                  {status.text && (
                    <motion.p
                      key={status.kind}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`mt-4 text-sm ${status.kind === "error" ? "text-rose-300" : "text-teal-soft"}`}
                    >
                      {status.text}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FormField({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-mist">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-rose-300">
          {error}
        </p>
      )}
    </div>
  );
}
