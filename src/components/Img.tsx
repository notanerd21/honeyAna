import { useState } from "react";

/**
 * Image with a graceful honey-gradient fallback.
 * If `src` is missing or fails to load (e.g. before real photos are added),
 * an elegant amber gradient is shown instead — so the layout never breaks.
 */
export function Img({
  src,
  alt,
  tone = "#d99a2b",
  className,
}: {
  src?: string;
  alt: string;
  tone?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={className}
        role="img"
        aria-label={alt}
        style={{
          background: `radial-gradient(circle at 30% 25%, ${tone}, transparent 60%), linear-gradient(135deg, ${tone} 0%, #9a5b12 100%)`,
        }}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
