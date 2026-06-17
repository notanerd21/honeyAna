import { config } from "../config";

/** WhatsApp click-to-chat with a prefilled message. */
export function waLink(message: string): string {
  return `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(message)}`;
}

/**
 * Viber click-to-chat. Viber requires E.164 raw digits with a LITERAL leading
 * "+" (it silently fails on a URL-encoded %2B), and supports an optional
 * prefilled &text= message. So we keep the "+" literal and only encode the text.
 */
export function viberLink(message?: string): string {
  const number = config.viber.replace(/[^\d+]/g, ""); // keep "+" and digits only
  const base = `viber://chat?number=${number}`;
  return message ? `${base}&text=${encodeURIComponent(message)}` : base;
}

/** Click-to-call. */
export function telLink(): string {
  return `tel:${config.phone}`;
}

/** Email with prefilled subject + body. */
export function mailLink(subject: string, body: string): string {
  return `mailto:${config.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
