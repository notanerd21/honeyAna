import { config, type Lang } from "../config";

/** WhatsApp click-to-chat with prefilled message. */
export function waLink(lang: Lang): string {
  const msg = encodeURIComponent(config.contactPrefill[lang]);
  return `https://wa.me/${config.whatsapp}?text=${msg}`;
}

/** Viber deep link. */
export function viberLink(): string {
  return `viber://chat?number=${encodeURIComponent(config.viber)}`;
}

/** Click-to-call. */
export function telLink(): string {
  return `tel:${config.phone}`;
}

/** Email. */
export function mailLink(): string {
  return `mailto:${config.email}`;
}
