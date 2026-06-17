import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { config, type Lang, type LocalString } from "./config";
import { strings, type Strings } from "./i18n";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Strings; // UI strings for current language
  L: (s: LocalString) => string; // helper for config bilingual fields
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "honey-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "en" || saved === "sr" ? saved : "sr"; // Serbian default
  });

  const setLang = (l: Lang) => setLangState(l);
  const toggle = () => setLangState((p) => (p === "sr" ? "en" : "sr"));

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.title =
      lang === "sr"
        ? `${config.brandName} · Prirodni med direktno od pčelara`
        : `${config.brandName} · Natural honey from the beekeeper`;
  }, [lang]);

  const value: Ctx = {
    lang,
    setLang,
    toggle,
    t: strings[lang],
    L: (s) => s[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
