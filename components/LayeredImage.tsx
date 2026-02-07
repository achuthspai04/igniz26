"use client";

import type { ReactNode, CSSProperties } from "react";
import Image from "next/image";

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
};

type LayeredImageProps = {
  layers: LayerConfig[];
  /** Aspect ratio of the stack (e.g. "16/9") or "full" for 100% height. Responsive. */
  aspectRatio?: string | "full";
  className?: string;
};

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
          return (
          <div
            key={`${layer.src}-${i}`}
            className={`absolute pointer-events-none select-none ${layer.className ?? ""} ${!useSizeForScale ? "inset-0" : ""}`}
            style={{
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
            }}
          >
            {layer.content != null ? (
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
            ) : null}
          </div>
          );
        })}
    </div>
  );
}
