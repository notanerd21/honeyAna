import { useLang } from "../LanguageContext";
import { Reveal } from "./Reveal";
import { Leaf, Drop, ShieldCheck, Home } from "./icons";

const ICONS = [Home, Drop, ShieldCheck, Leaf];

export function WhyUs() {
  const { t } = useLang();

  return (
    <section id="why" className="py-[clamp(64px,9vw,130px)] bg-cream">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-sage font-semibold tracking-wide uppercase text-sm">
            {t.nav.why}
          </p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] text-cocoa">
            {t.why.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.why.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={item.t} delay={i * 0.08}>
                <div className="h-full bg-surface rounded-3xl p-7 hover:bg-night hover:text-cream transition-colors duration-300 group">
                  <div className="grid place-items-center w-12 h-12 rounded-2xl bg-honey/15 text-honey-deep group-hover:bg-honey/25 group-hover:text-honey transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl">{item.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted group-hover:text-cream/75 transition-colors">
                    {item.d}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
