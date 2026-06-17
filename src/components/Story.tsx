import { config } from "../config";
import { useLang } from "../LanguageContext";
import { Img } from "./Img";
import { Reveal } from "./Reveal";

export function Story() {
  const { t, lang } = useLang();

  return (
    <section id="about" className="py-[clamp(64px,9vw,130px)] bg-cream">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <Reveal className="order-2 md:order-1">
          <div className="relative">
            <Img
              src={config.images.story}
              alt={t.story.title}
              tone="#a86a1f"
              className="w-full aspect-[4/5] object-cover rounded-3xl shadow-[var(--shadow-card)]"
            />
            <div className="absolute -bottom-5 -right-3 sm:right-6 bg-night text-cream rounded-2xl px-5 py-4 shadow-xl">
              <div className="font-display text-3xl font-semibold text-honey leading-none">
                {config.yearsTradition}+
              </div>
              <div className="text-xs text-cream/70 mt-1">
                {lang === "sr" ? "godina tradicije" : "years of tradition"}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 md:order-2">
          <p className="text-sage font-semibold tracking-wide uppercase text-sm">
            {t.nav.about}
          </p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] text-cocoa">
            {t.story.title}
          </h2>
          <div className="mt-6 space-y-4 text-lg text-muted leading-relaxed">
            {t.story.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-6 font-display text-2xl text-honey-deep italic">
            {t.story.signature}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
