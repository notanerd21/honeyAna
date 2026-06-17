import { useEffect, useRef } from "react";
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
  const ref = useRef<HTMLVideoElement>(null);

  // iOS/iPadOS only autoplays a video that is genuinely muted at the DOM
  // property level. React's `muted` JSX prop is not reliably reflected onto
  // the element, so we set it imperatively and (re)trigger playback. The
  // rejected play() promise is swallowed — Safari blocks autoplay in Low
  // Power Mode regardless, and the poster image stays visible as a fallback.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    el.defaultMuted = true;
    const tryPlay = () => el.play().catch(() => {});
    if (el.readyState >= 2) tryPlay();
    el.addEventListener("loadeddata", tryPlay);
    return () => el.removeEventListener("loadeddata", tryPlay);
  }, [videoSrc]);

  if (videoSrc && !reduce) {
    return (
      <video
        ref={ref}
        className={className}
        autoPlay
        muted
        loop
        playsInline
        // iOS needs enough buffered to start; "metadata" can stall autoplay.
        preload="auto"
        poster={imageSrc}
        aria-label={alt}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    );
  }

  return <Img src={imageSrc} alt={alt} tone={tone} className={className} />;
}
