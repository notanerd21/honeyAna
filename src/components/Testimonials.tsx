import { config } from "../config";
import { useLang } from "../LanguageContext";
import { Reveal } from "./Reveal";
import { Star } from "./icons";

export function Testimonials() {
  const { t, L } = useLang();

  return (
    <section className="py-[clamp(64px,9vw,130px)] bg-surface">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Reveal className="text-center">
          <h2 className="text-[clamp(2rem,4vw,3rem)] text-cocoa">
            {t.testimonials.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {config.testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08}>
              <figure className="h-full bg-cream rounded-3xl p-7 shadow-[var(--shadow-card)] flex flex-col">
                <div className="flex gap-1 text-honey">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-4 h-4" />
                  ))}
                </div>
                <blockquote className="mt-4 font-display text-xl text-cocoa leading-snug flex-1">
                  “{L(item.text)}”
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-muted">
                  {item.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
