import { ArrowUp, Mail, Phone } from "lucide-react";
import { navLinks, profile } from "@/data/profile";
import { LinkedInIcon } from "./ui/BrandIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.08] bg-ink">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo/70 to-transparent" />
      <div className="mx-auto flex max-w-site flex-col gap-10 px-5 py-14 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-3xl text-white">{profile.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-haze">{profile.title}</p>
          <div className="mt-5 flex gap-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-haze transition hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label={`Email ${profile.email}`}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-haze transition hover:border-cyan hover:bg-cyan hover:text-ink"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={profile.phoneHref}
              aria-label={`Call ${profile.phone}`}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-haze transition hover:border-violet hover:bg-violet hover:text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm sm:grid-cols-3">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="text-haze transition hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-site flex-col items-center justify-between gap-4 px-5 py-6 text-sm text-haze sm:flex-row sm:px-8">
          <p>
            © {year} {profile.name}. {profile.location}.
          </p>
          <a href="#top" className="group inline-flex items-center gap-2 rounded-full px-3 py-1.5 transition hover:text-white">
            Back to top
            <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
