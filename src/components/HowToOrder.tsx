import { config } from "../config";
import { useLang } from "../LanguageContext";
import { Reveal } from "./Reveal";
import { Img } from "./Img";

export function HowToOrder() {
  const { t } = useLang();

  return (
    <section className="py-[clamp(64px,9vw,130px)] bg-cream">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <Reveal>
          <Img
            src={config.images.lifestyle}
            alt={t.how.title}
            tone="#d99a2b"
            className="w-full aspect-[5/4] object-cover rounded-3xl shadow-[var(--shadow-card)]"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-[clamp(2rem,4vw,3rem)] text-cocoa">{t.how.title}</h2>
          <ol className="mt-8 space-y-6">
            {t.how.steps.map((step, i) => (
              <li key={step.t} className="flex gap-5">
                <span className="grid place-items-center w-11 h-11 shrink-0 rounded-full bg-honey text-white font-display text-xl font-semibold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-cocoa">{step.t}</h3>
                  <p className="mt-1 text-muted leading-relaxed">{step.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
