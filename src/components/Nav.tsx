import { useEffect, useState } from "react";
import { config } from "../config";
import { useLang } from "../LanguageContext";

export function Nav() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#products", label: t.nav.products },
    { href: "#about", label: t.nav.about },
    { href: "#why", label: t.nav.why },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_2px_20px_rgba(60,40,15,0.07)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1200px] px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-xl sm:text-2xl font-semibold text-cocoa">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-night">
            <span className="block w-3.5 h-4 rounded-b-full rounded-t-[40%] bg-honey" />
          </span>
          {config.brandName}
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted hover:text-honey-deep transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="text-sm font-semibold text-cocoa border border-muted/30 rounded-full px-3 py-1.5 hover:border-honey hover:text-honey-deep transition-colors"
            aria-label="Switch language"
          >
            {lang === "sr" ? "EN" : "SR"}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-full bg-honey px-4 py-2 text-sm font-semibold text-white hover:bg-honey-deep transition-colors"
          >
            {t.nav.contact}
          </a>
          <button
            className="md:hidden grid place-items-center w-9 h-9 text-cocoa"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <span className="space-y-1.5">
              <span className="block w-5 h-0.5 bg-cocoa" />
              <span className="block w-5 h-0.5 bg-cocoa" />
              <span className="block w-5 h-0.5 bg-cocoa" />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-cream border-t border-muted/10 px-5 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-base font-medium text-cocoa"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
