"use client";

import { useRef, useEffect, useState } from "react";

interface GrainyTextProps {
    text: string;
    fontSize: number;
    fontFamily: string;
    fontWeight: number;
    color: string;
    letterSpacing: string;
    lineHeight: string;
    uppercase?: boolean;
    textShadow?: string;
    seed?: number;
    scale?: number;
    baseFrequency?: number;
    className?: string;
}

export default function GrainyText({
    text,
    fontSize,
    fontFamily,
    fontWeight,
    color,
    letterSpacing,
    lineHeight,
    uppercase = false,
    textShadow,
    seed = 1,
    scale = 2,
    baseFrequency = 2,
    className = "",
}: GrainyTextProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const renderGrainyText = () => {
            // Measure the text first using a hidden element
            const measureEl = document.createElement("div");
            measureEl.style.position = "absolute";
            measureEl.style.visibility = "hidden";
            measureEl.style.whiteSpace = "pre-wrap";
            measureEl.style.fontFamily = fontFamily;
            measureEl.style.fontWeight = String(fontWeight);
            measureEl.style.fontSize = `${fontSize}px`;
            measureEl.style.letterSpacing = letterSpacing;
            measureEl.style.lineHeight = lineHeight;
            measureEl.style.maxWidth = containerRef.current
                ? `${containerRef.current.offsetWidth}px`
                : "500px";
            if (uppercase) measureEl.style.textTransform = "uppercase";
            measureEl.textContent = text;
            document.body.appendChild(measureEl);

            const textWidth = measureEl.offsetWidth + 20; // padding
            const textHeight = measureEl.offsetHeight + 20;
            document.body.removeChild(measureEl);

            const dpr = window.devicePixelRatio || 1;
            const svgWidth = textWidth;
            const svgHeight = textHeight;

            // Build SVG with the filter baked in
            const svgNS = "http://www.w3.org/2000/svg";
            const svg = `
                <svg xmlns="${svgNS}" width="${svgWidth * dpr}" height="${svgHeight * dpr}" viewBox="0 0 ${svgWidth} ${svgHeight}">
                    <defs>
                        <filter id="grain" x="-10%" y="-10%" width="120%" height="120%">
                            <feTurbulence type="fractalNoise" baseFrequency="${baseFrequency}" numOctaves="3" seed="${seed}" result="noise" />
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="${scale}" xChannelSelector="R" yChannelSelector="G" />
                            <feMorphology operator="erode" radius="0.2" />
                        </filter>
                    </defs>
                    <text
                        x="10"
                        y="${fontSize * 0.85}"
                        font-family="${fontFamily}"
                        font-weight="${fontWeight}"
                        font-size="${fontSize}px"
                        letter-spacing="${letterSpacing}"
                        fill="${color}"
                        filter="url(#grain)"
                        ${uppercase ? 'text-transform="uppercase"' : ""}
                    >${uppercase ? text.toUpperCase() : text}</text>
                </svg>
            `;

            const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
            const url = URL.createObjectURL(blob);
            const img = new window.Image();
            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = svgWidth * dpr;
                canvas.height = svgHeight * dpr;
                const ctx = canvas.getContext("2d");
                if (ctx) {
                    ctx.drawImage(img, 0, 0);
                    const dataUrl = canvas.toDataURL("image/png");
                    setImageSrc(dataUrl);
                    setDimensions({ width: svgWidth, height: svgHeight });
                }
                URL.revokeObjectURL(url);
            };
            img.src = url;
        };

        // Wait for fonts to load
        if (document.fonts) {
            document.fonts.ready.then(renderGrainyText);
        } else {
            setTimeout(renderGrainyText, 100);
        }
    }, [text, fontSize, fontFamily, fontWeight, color, letterSpacing, lineHeight, uppercase, seed, scale, baseFrequency]);

    return (
        <div ref={containerRef} className={className}>
            {imageSrc ? (
                <img
                    src={imageSrc}
                    alt={text}
                    width={dimensions.width}
                    height={dimensions.height}
                    style={{
                        width: dimensions.width,
                        height: dimensions.height,
                        maxWidth: "100%",
                        imageRendering: "auto",
                    }}
                />
            ) : (
                // Fallback while rendering
                <span
                    style={{
                        fontFamily,
                        fontWeight,
                        fontSize: `${fontSize}px`,
                        letterSpacing,
                        lineHeight,
                        color,
                        textTransform: uppercase ? "uppercase" : undefined,
                    }}
                >
                    {text}
                </span>
            )}
            <canvas ref={canvasRef} className="hidden" />
        </div>
    );
}
