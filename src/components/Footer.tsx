import { config } from "../config";
import { useLang } from "../LanguageContext";
import { Instagram, Facebook } from "./icons";

export function Footer() {
  const { t, lang } = useLang();

  const navLinks = [
    { href: "#products", label: t.nav.products },
    { href: "#about", label: t.nav.about },
    { href: "#why", label: t.nav.why },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-night text-cream/80">
      <div className="h-px bg-gradient-to-r from-transparent via-honey/50 to-transparent" />
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 py-14 grid sm:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-2xl font-semibold text-cream">
            {config.brandName}
          </div>
          <p className="mt-3 text-sm text-cream/60 max-w-xs">{t.footer.tagline}</p>
          <div className="mt-5 flex gap-3">
            {config.social.instagram && (
              <Social href={config.social.instagram}><Instagram className="w-5 h-5" /></Social>
            )}
            {config.social.facebook && (
              <Social href={config.social.facebook}><Facebook className="w-5 h-5" /></Social>
            )}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-honey">
            {t.footer.nav}
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-honey transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-honey">
            {t.footer.contact}
          </div>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li><a href={`tel:${config.phone}`} className="hover:text-honey">{config.phoneDisplay}</a></li>
            <li><a href={`mailto:${config.email}`} className="hover:text-honey">{config.email}</a></li>
            <li>{config.address[lang]}</li>
            <li>{config.hours[lang]}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 py-5 text-xs text-cream/50 text-center">
          © {new Date().getFullYear()} {config.brandName}. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}

function Social({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="grid place-items-center w-10 h-10 rounded-full bg-cream/10 text-cream hover:bg-honey hover:text-night transition-colors"
    >
      {children}
    </a>
  );
}
