import { config } from "../config";
import { useLang } from "../LanguageContext";
import { Img } from "./Img";
import { Reveal } from "./Reveal";
import { Check } from "./icons";

/** The trust-anchor section: directly answers the #1 buyer fear (fake honey). */
export function Proof() {
  const { t } = useLang();

  return (
    <section className="py-[clamp(64px,9vw,130px)] bg-night text-cream">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <Reveal>
          <p className="text-honey font-semibold tracking-wide uppercase text-sm">
            {t.trust[0]}
          </p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] text-cream">
            {t.proof.title}
          </h2>
          <p className="mt-4 text-lg text-cream/70">{t.proof.subtitle}</p>

          <ul className="mt-8 space-y-4">
            {t.proof.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 grid place-items-center w-6 h-6 shrink-0 rounded-full bg-honey/20 text-honey">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span className="text-cream/90">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <Img
            src={config.images.honeycomb}
            alt={t.proof.title}
            tone="#c8881e"
            className="w-full aspect-square object-cover rounded-3xl shadow-2xl"
          />
        </Reveal>
      </div>
    </section>
  );
}
