"use client";

import { useRef, useEffect, type ReactNode, type CSSProperties } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type LayerConfig = {
  src?: string;
  alt?: string;
  zIndex: number;
  /** Custom content instead of an image (e.g. a div with multiple positioned elements). When set, src/alt are ignored. */
  content?: ReactNode;
  /** CSS object-fit: cover | contain | fill | none */
  objectFit?: "cover" | "contain" | "fill" | "none";
  /** Scale factor, e.g. 1 = 100%, 0.85 = 85%. Applied via transform. */
  scale?: number;
  /** Where the image sits in its box: "center" | "top" | "bottom" | "left" | "right" | "50% 30%" */
  objectPosition?: string;
  /** Shift layer horizontally: CSS value, e.g. "10px", "-5%", "1rem" */
  translateX?: string | number;
  /** Shift layer vertically: CSS value, e.g. "10px", "-5%", "1rem" */
  translateY?: string | number;
  /** Opacity 0–1, e.g. 0.35 for 35% */
  opacity?: number;
  /** CSS mix-blend-mode, e.g. "multiply" | "screen" | "overlay" */
  mixBlendMode?: CSSProperties["mixBlendMode"];
  /** Extra Tailwind/custom classes for the layer wrapper */
  className?: string;
  priority?: boolean;
  /** GSAP from animation: animates from the given values (e.g. y: -100) with optional delay/duration */
  gsapFrom?: { y?: number; x?: number; delay?: number; duration?: number };
  /** GSAP ScrollTrigger: animates layer with gsap.to when trigger element enters viewport */
  scrollTrigger?: {
    /** CSS selector for the element that triggers the animation when in view */
    triggerSelector: string;
    /** gsap.to() vars, e.g. { x: -1000 } */
    to: gsap.TweenVars;
    /** ScrollTrigger start, e.g. "top center" (default: "top center") */
    start?: string;
    /** ScrollTrigger end, e.g. "bottom top" – defines scroll range for scrub */
    end?: string;
    /** Tie animation progress to scroll (true = smooth, or number for delay in sec) */
    scrub?: boolean | number;
  };
};

type LayeredImageProps = {
  layers: LayerConfig[];
  /** Aspect ratio of the stack (e.g. "16/9") or "full" for 100% height. Responsive. */
  aspectRatio?: string | "full";
  className?: string;
};

function AnimatedLayer({
  gsapFrom,
  className = "",
  style,
  children,
}: {
  gsapFrom: NonNullable<LayerConfig["gsapFrom"]>;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    gsap.from(ref.current, {
      ...(gsapFrom.y !== undefined && { y: gsapFrom.y }),
      ...(gsapFrom.x !== undefined && { x: gsapFrom.x }),
      delay: gsapFrom.delay ?? 0,
      duration: gsapFrom.duration ?? 1,
    });
  }, [gsapFrom]);
  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

function ScrollTriggerLayer({
  scrollTrigger: st,
  className = "",
  style,
  children,
}: {
  scrollTrigger: NonNullable<LayerConfig["scrollTrigger"]>;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    const triggerEl = document.querySelector(st.triggerSelector);
    if (!el || !triggerEl) return;
    const tween = gsap.to(el, {
      ...st.to,
      scrollTrigger: {
        trigger: triggerEl,
        start: st.start ?? "top center",
        end: st.end,
        scrub: st.scrub,
      },
    });
    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((s) => {
        if (s.trigger === triggerEl) s.kill();
      });
    };
  }, [st]);
  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

export default function LayeredImage({
  layers,
  aspectRatio = "full",
  className = "",
}: LayeredImageProps) {
  const isFull = aspectRatio === "full";
  const aspectStyle =
    !isFull && aspectRatio.includes("/")
      ? { aspectRatio: aspectRatio.replace("_", "/") }
      : undefined;

  return (
    <div
      className={`relative overflow-hidden w-full ${isFull ? "h-full min-h-0" : ""} ${className}`}
      style={aspectStyle}
    >
      {layers
        .slice()
        .sort((a, b) => a.zIndex - b.zIndex)
        .map((layer, i) => {
          const scale = layer.scale ?? 1;
          const useSizeForScale = scale > 1;
          const layerClassName = `absolute pointer-events-none select-none ${layer.className ?? ""} ${!useSizeForScale ? "inset-0" : ""}`;
          const layerStyle = {
            zIndex: layer.zIndex,
            opacity: layer.opacity,
            mixBlendMode: layer.mixBlendMode,
            ...(useSizeForScale
              ? {
                  width: `${scale * 100}%`,
                  height: `${scale * 100}%`,
                  left: "50%",
                  top: "50%",
                  transform: [
                    "translate(-50%, -50%)",
                    layer.translateX != null && `translateX(${typeof layer.translateX === "number" ? `${layer.translateX}px` : layer.translateX})`,
                    layer.translateY != null && `translateY(${typeof layer.translateY === "number" ? `${layer.translateY}px` : layer.translateY})`,
                  ]
                    .filter(Boolean)
                    .join(" "),
                }
              : {
                  inset: 0,
                  transform: [
                    layer.scale != null && `scale(${layer.scale})`,
                    layer.translateX != null && `translateX(${typeof layer.translateX === "number" ? `${layer.translateX}px` : layer.translateX})`,
                    layer.translateY != null && `translateY(${typeof layer.translateY === "number" ? `${layer.translateY}px` : layer.translateY})`,
                  ]
                    .filter(Boolean)
                    .join(" ") || undefined,
                }),
          };
          const layerContent =
            layer.content != null ? (
              layer.content
            ) : layer.src != null ? (
              <Image
                src={layer.src}
                alt={layer.alt ?? ""}
                fill
                sizes="100vw"
                className="object-cover"
                style={{
                  objectFit: layer.objectFit ?? "cover",
                  objectPosition: layer.objectPosition ?? "center",
                }}
                priority={layer.priority}
              />
            ) : null;
          if (layer.gsapFrom) {
            return (
              <AnimatedLayer
                key={`${layer.src}-${i}`}
                gsapFrom={layer.gsapFrom}
                className={layerClassName}
                style={layerStyle}
              >
                {layerContent}
              </AnimatedLayer>
            );
          }
          if (layer.scrollTrigger) {
            return (
              <ScrollTriggerLayer
                key={`${layer.src}-${i}`}
                scrollTrigger={layer.scrollTrigger}
                className={layerClassName}
                style={layerStyle}
              >
                {layerContent}
              </ScrollTriggerLayer>
            );
          }
          return (
            <div key={`${layer.src}-${i}`} className={layerClassName} style={layerStyle}>
              {layerContent}
            </div>
          );
        })}
    </div>
  );
}
