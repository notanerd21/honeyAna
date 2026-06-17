import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { config, type Lang, type Product } from "./config";
import { useLang } from "./LanguageContext";
import { waLink, viberLink, telLink, mailLink } from "./lib/links";
import { Chat, Phone, Mail, Check } from "./components/icons";

type OrderCtx = { openOrder: (product?: Product) => void };

const Ctx = createContext<OrderCtx | null>(null);

/** Builds the ready-to-send enquiry text, including product + price when given. */
function buildMessage(lang: Lang, product: Product | null): string {
  if (product) {
    const price = `${product.priceRsd.toLocaleString(lang === "sr" ? "sr-RS" : "en-US")} ${config.currency.rsd}`;
    return lang === "sr"
      ? `Zdravo! Želim da poručim: ${product.name.sr} — ${price} / tegla.\nMolim vas informacije o dostupnosti i dostavi.`
      : `Hello! I'd like to order: ${product.name.en} — ${price} / jar.\nPlease let me know availability and delivery details.`;
  }
  return config.contactPrefill[lang];
}

export function OrderProvider({ children }: { children: ReactNode }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [open, setOpen] = useState(false);

  const openOrder = useCallback((p?: Product) => {
    setProduct(p ?? null);
    setOpen(true);
  }, []);

  return (
    <Ctx.Provider value={{ openOrder }}>
      {children}
      <OrderModal open={open} product={product} onClose={() => setOpen(false)} />
    </Ctx.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useOrder() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useOrder must be used within OrderProvider");
  return c;
}

function OrderModal({
  open,
  product,
  onClose,
}: {
  open: boolean;
  product: Product | null;
  onClose: () => void;
}) {
  const { t, lang } = useLang();
  const [msg, setMsg] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (open) {
      setMsg(buildMessage(lang, product));
      setCopied(false);
    }
  }, [open, product, lang]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const subject =
    lang === "sr" ? `Upit za med — ${config.brandName}` : `Honey inquiry — ${config.brandName}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(msg);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked — ignore */
    }
  }

  const channels = [
    { key: "viber", label: t.contact.viber, Icon: Chat, href: viberLink(msg), accent: true, external: false },
    { key: "whatsapp", label: t.contact.whatsapp, Icon: Chat, href: waLink(msg), accent: false, external: true },
    { key: "call", label: `${t.contact.call} · ${config.phoneDisplay}`, Icon: Phone, href: telLink(), accent: false, external: false },
    { key: "email", label: t.contact.email, Icon: Mail, href: mailLink(subject, msg), accent: false, external: false },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] grid place-items-center p-4 bg-night/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-md bg-cream rounded-3xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl text-cocoa">{t.order.title}</h3>
                  <p className="mt-1 text-sm text-muted">{t.order.subtitle}</p>
                </div>
                <button
                  onClick={onClose}
                  className="shrink-0 grid place-items-center w-9 h-9 rounded-full hover:bg-surface text-muted hover:text-cocoa transition-colors text-xl leading-none"
                  aria-label={t.order.close}
                >
                  ×
                </button>
              </div>

              {/* editable message preview */}
              <div className="mt-5">
                <label className="text-xs font-semibold uppercase tracking-wide text-muted">
                  {t.order.messageLabel}
                </label>
                <textarea
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  rows={3}
                  className="mt-2 w-full rounded-xl border border-muted/20 bg-surface/60 px-4 py-3 text-sm text-cocoa focus:border-honey focus:outline-none focus:ring-2 focus:ring-honey/20 resize-none"
                />
                <button
                  onClick={copy}
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-honey-deep hover:text-honey transition-colors"
                >
                  {copied ? <Check className="w-4 h-4" /> : null}
                  {copied ? t.order.copied : t.order.copy}
                </button>
              </div>

              {/* channels */}
              <div className="mt-5 grid grid-cols-1 gap-2.5">
                {channels.map((c) => (
                  <a
                    key={c.key}
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (c.accent) copy(); // best-effort backup for older Viber clients
                      setTimeout(onClose, 150);
                    }}
                    className={`flex items-center gap-3 rounded-2xl px-5 py-3.5 font-semibold transition-colors ${
                      c.accent
                        ? "bg-honey text-white hover:bg-honey-deep shadow-lg shadow-honey/25"
                        : "bg-surface text-cocoa hover:bg-surface/70"
                    }`}
                  >
                    <c.Icon className={`w-5 h-5 shrink-0 ${c.accent ? "" : "text-honey-deep"}`} />
                    {c.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
