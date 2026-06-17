import { motion } from "framer-motion";
import { config } from "../config";
import { useLang } from "../LanguageContext";
import { Img } from "./Img";
import { telLink } from "../lib/links";
import { ChevronDown } from "./icons";
import { useOrder } from "../OrderContext";

export function Hero() {
  const { t, L } = useLang();
  const { openOrder } = useOrder();

  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* background image */}
      <div className="absolute inset-0">
        <Img
          src={config.images.hero}
          alt={L(config.tagline)}
          tone="#c8881e"
          className="w-full h-full object-cover"
        />
        {/* warm, lighter overlay — keeps the left text readable while letting the honey gold show through */}
        <div className="absolute inset-0 bg-gradient-to-r from-cocoa/80 via-cocoa/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa/55 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 min-h-[88vh] flex items-center">
        <div className="max-w-2xl py-24 text-cream">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-honey/20 border border-honey/40 px-4 py-1.5 text-sm font-medium text-honey"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-honey" />
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 font-display font-semibold leading-[1.05] text-[clamp(2.6rem,6vw,4.6rem)]"
          >
            {L(config.tagline)}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 text-lg sm:text-xl text-cream/85 max-w-xl"
          >
            {L({
              sr: "100% prirodno, bez šećera i aditiva. Sa našeg pčelinjaka do vaše trpeze.",
              en: "100% natural, no sugar or additives. From our apiary to your table.",
            })}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 flex flex-col sm:flex-row gap-3"
          >
            <button
              onClick={() => openOrder()}
              className="inline-flex items-center justify-center rounded-full bg-honey px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-honey/30 hover:bg-honey-deep hover:-translate-y-0.5 transition-all"
            >
              {t.hero.ctaPrimary}
            </button>
            <a
              href={telLink()}
              className="inline-flex items-center justify-center rounded-full border border-cream/40 px-7 py-3.5 text-base font-semibold text-cream hover:bg-cream/10 transition-colors"
            >
              {t.hero.ctaSecondary} · {config.phoneDisplay}
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-6 text-sm text-cream/70"
          >
            ✓ {t.hero.note}
          </motion.p>
        </div>
      </div>

      <a
        href="#products"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/60 hover:text-cream transition-colors"
        aria-label="Scroll"
      >
        <ChevronDown className="w-7 h-7 animate-bounce" />
      </a>
    </section>
  );
}
