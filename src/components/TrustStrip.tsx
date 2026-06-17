import { useLang } from "../LanguageContext";
import { Check } from "./icons";

export function TrustStrip() {
  const { t } = useLang();
  return (
    <div className="bg-surface text-cocoa border-y border-honey/20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {t.trust.map((item) => (
          <span key={item} className="inline-flex items-center gap-2 text-sm font-semibold">
            <Check className="w-4 h-4 text-honey-deep" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
