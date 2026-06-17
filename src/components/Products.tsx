import { config } from "../config";
import { useLang } from "../LanguageContext";
import { Img } from "./Img";
import { Reveal } from "./Reveal";
import { viberLink } from "../lib/links";

export function Products() {
  const { t, L } = useLang();

  return (
    <section id="products" className="py-[clamp(64px,9vw,130px)] bg-surface honeycomb-bg">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-sage font-semibold tracking-wide uppercase text-sm">
            {t.nav.products}
          </p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] text-cocoa">
            {t.products.title}
          </h2>
          <p className="mt-4 text-lg text-muted">{t.products.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.products.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <article className="group h-full flex flex-col bg-cream rounded-3xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Img
                    src={p.image}
                    alt={L(p.name)}
                    tone={p.tone}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {L(p.tag) && (
                    <span className="absolute top-3 left-3 rounded-full bg-night/85 text-cream text-xs font-semibold px-3 py-1">
                      {L(p.tag)}
                    </span>
                  )}
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-display text-2xl text-cocoa">{L(p.name)}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
                    {L(p.note)}
                  </p>
                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <div className="font-display text-2xl font-semibold text-honey-deep">
                        {p.priceRsd.toLocaleString("sr-RS")} {config.currency.rsd}
                      </div>
                      {config.showEur && (
                        <div className="text-xs text-muted">
                          ≈ {p.priceEur} {config.currency.eur} {t.products.perJar}
                        </div>
                      )}
                    </div>
                  </div>
                  <a
                    href={viberLink()}
                    className="mt-4 inline-flex items-center justify-center rounded-full bg-honey px-5 py-2.5 text-sm font-semibold text-white hover:bg-honey-deep transition-colors"
                  >
                    {t.products.order}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
