import { useEffect, useState } from "react";
import { useLang } from "../LanguageContext";
import { telLink } from "../lib/links";
import { Chat, Phone } from "./icons";
import { useOrder } from "../OrderContext";

/** Sticky mobile-first contact buttons — always one tap from ordering. */
export function FloatingContact() {
  const { t } = useLang();
  const { openOrder } = useOrder();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed z-40 bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 sm:bottom-6 flex gap-3 sm:flex-col transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <button
        onClick={() => openOrder()}
        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full bg-honey px-5 py-3.5 font-semibold text-white shadow-xl shadow-honey/30 hover:bg-honey-deep transition-colors"
      >
        <Chat className="w-5 h-5" />
        {t.hero.ctaPrimary}
      </button>
      <a
        href={telLink()}
        className="sm:hidden inline-flex items-center justify-center rounded-full bg-night px-5 py-3.5 font-semibold text-cream shadow-xl"
        aria-label={t.contact.call}
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
}
