import { useState, type FormEvent } from "react";
import { config } from "../config";
import { useLang } from "../LanguageContext";
import { Reveal } from "./Reveal";
import { waLink, viberLink, telLink, mailLink } from "../lib/links";
import { Chat, Phone, Mail } from "./icons";

type Status = "idle" | "sending" | "ok" | "error";

export function Contact() {
  const { t, lang } = useLang();
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // No Web3Forms key configured → guide the user to Viber/phone instead.
    if (!config.web3formsKey) {
      window.location.href = viberLink();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: config.web3formsKey,
          subject: `${config.brandName} — ${lang === "sr" ? "novi upit" : "new inquiry"}`,
          from_name: data.name,
          ...data,
          botcheck: "",
        }),
      });
      const json = await res.json();
      setStatus(json.success ? "ok" : "error");
      if (json.success) form.reset();
    } catch {
      setStatus("error");
    }
  }

  const channels = [
    { href: viberLink(), label: t.contact.viber, Icon: Chat, accent: true },
    { href: waLink(lang), label: t.contact.whatsapp, Icon: Chat, accent: false },
    { href: telLink(), label: `${t.contact.call} · ${config.phoneDisplay}`, Icon: Phone, accent: false },
    { href: mailLink(), label: config.email, Icon: Mail, accent: false },
  ];

  return (
    <section id="contact" className="py-[clamp(64px,9vw,130px)] bg-surface honeycomb-bg">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16">
        <Reveal>
          <h2 className="text-[clamp(2rem,4vw,3rem)] text-cocoa">{t.contact.title}</h2>
          <p className="mt-4 text-lg text-muted">{t.contact.subtitle}</p>

          <div className="mt-8 space-y-3">
            {channels.map(({ href, label, Icon, accent }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`flex items-center gap-4 rounded-2xl px-5 py-4 font-semibold transition-all hover:-translate-y-0.5 ${
                  accent
                    ? "bg-honey text-white hover:bg-honey-deep shadow-lg shadow-honey/25"
                    : "bg-cream text-cocoa hover:bg-cream/70"
                }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {label}
              </a>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 text-sm">
            <div>
              <div className="font-semibold text-cocoa">{t.contact.addressTitle}</div>
              <a href={config.mapUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-honey-deep">
                {config.address[lang]}
              </a>
            </div>
            <div>
              <div className="font-semibold text-cocoa">{t.contact.hours}</div>
              <div className="text-muted">{config.hours[lang]}</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="bg-cream rounded-3xl p-7 sm:p-8 shadow-[var(--shadow-card)]"
          >
            <div className="space-y-4">
              <Field name="name" placeholder={t.contact.formName} required />
              <Field name="contact" placeholder={t.contact.formContact} required />
              <textarea
                name="message"
                placeholder={t.contact.formMessage}
                rows={4}
                required
                className="w-full rounded-xl border border-muted/20 bg-surface/50 px-4 py-3 text-cocoa placeholder:text-muted/60 focus:border-honey focus:outline-none focus:ring-2 focus:ring-honey/20 resize-none"
              />
              {/* honeypot */}
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-full bg-honey px-6 py-3.5 font-semibold text-white hover:bg-honey-deep transition-colors disabled:opacity-60"
              >
                {status === "sending" ? t.contact.formSending : t.contact.formSubmit}
              </button>

              {status === "ok" && (
                <p className="text-center text-sage font-medium">{t.contact.formOk}</p>
              )}
              {status === "error" && (
                <p className="text-center text-red-700 text-sm">
                  {t.contact.formErr}
                  <a href={telLink()} className="underline font-semibold">{config.phoneDisplay}</a>
                </p>
              )}
              {!config.web3formsKey && (
                <p className="text-center text-xs text-muted">{t.contact.noKeyHint}</p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field(props: { name: string; placeholder: string; required?: boolean }) {
  return (
    <input
      {...props}
      type="text"
      className="w-full rounded-xl border border-muted/20 bg-surface/50 px-4 py-3 text-cocoa placeholder:text-muted/60 focus:border-honey focus:outline-none focus:ring-2 focus:ring-honey/20"
    />
  );
}
