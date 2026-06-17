import { useReducedMotion } from "framer-motion";
import { Img } from "./Img";

/**
 * Shows a looping muted video when `videoSrc` is set (and the user hasn't
 * requested reduced motion); otherwise falls back to the poster image.
 * The video uses the same className as the image, so `object-cover` makes it
 * crop/zoom gracefully on mobile (portrait) too.
 */
export function Media({
  videoSrc,
  imageSrc,
  alt,
  tone,
  className,
}: {
  videoSrc?: string;
  imageSrc?: string;
  alt: string;
  tone?: string;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (videoSrc && !reduce) {
    return (
      <video
        className={className}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={imageSrc}
        aria-label={alt}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    );
  }

  return <Img src={imageSrc} alt={alt} tone={tone} className={className} />;
}
