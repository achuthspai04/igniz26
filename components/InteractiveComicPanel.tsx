"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export interface ComicPanelConfig {
    /** The ID of the <g> element in the SVG to make interactive */
    id: string;
    /** Label for accessibility */
    label: string;
    /** URL to navigate to on click, or a callback */
    href?: string;
    /** Callback on click (if href is not provided) */
    onClick?: () => void;
}

interface InteractiveComicPanelProps {
    /** Path to the SVG file in public/ */
    svgPath: string;
    /** Configuration for each interactive panel */
    panels: ComicPanelConfig[];
    /** Optional className for the wrapper */
    className?: string;
}

export default function InteractiveComicPanel({
    svgPath,
    panels,
    className = "",
}: InteractiveComicPanelProps) {
    const [svgContent, setSvgContent] = useState<string>("");
    const [hoveredPanel, setHoveredPanel] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Fetch and inline the SVG
    useEffect(() => {
        fetch(svgPath)
            .then((res) => res.text())
            .then((text) => {
                setSvgContent(text);
            })
            .catch((err) => console.error("Failed to load SVG:", err));
    }, [svgPath]);

    // Attach event listeners to the interactive groups after SVG is injected
    useEffect(() => {
        const container = containerRef.current;
        if (!container || !svgContent) return;

        const svgEl = container.querySelector("svg");
        if (!svgEl) return;

        // Make SVG responsive
        svgEl.setAttribute("width", "100%");
        svgEl.setAttribute("height", "100%");
        svgEl.style.display = "block";

        panels.forEach((panel) => {
            const groupEl = svgEl.querySelector(`#${CSS.escape(panel.id)}`);
            if (!groupEl) return;

            // Style the group for interactivity
            (groupEl as SVGGElement).style.cursor = "pointer";
            (groupEl as SVGGElement).style.transition =
                "opacity 0.3s ease, filter 0.3s ease";

            // Mouse enter
            const handleMouseEnter = () => {
                setHoveredPanel(panel.id);
            };

            // Mouse leave
            const handleMouseLeave = () => {
                setHoveredPanel(null);
            };

            // Click
            const handleClick = () => {
                if (panel.href) {
                    window.open(panel.href, "_blank");
                } else if (panel.onClick) {
                    panel.onClick();
                }
            };

            groupEl.addEventListener("mouseenter", handleMouseEnter);
            groupEl.addEventListener("mouseleave", handleMouseLeave);
            groupEl.addEventListener("click", handleClick);

            // Cleanup
            return () => {
                groupEl.removeEventListener("mouseenter", handleMouseEnter);
                groupEl.removeEventListener("mouseleave", handleMouseLeave);
                groupEl.removeEventListener("click", handleClick);
            };
        });
    }, [svgContent, panels]);

    // Apply hover dim effect via styles
    const applyHoverStyles = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;

        const svgEl = container.querySelector("svg");
        if (!svgEl) return;

        panels.forEach((panel) => {
            const groupEl = svgEl.querySelector(
                `#${CSS.escape(panel.id)}`
            ) as SVGGElement | null;
            if (!groupEl) return;

            if (hoveredPanel === null) {
                // No panel hovered — all panels at full opacity
                groupEl.style.opacity = "1";
                groupEl.style.filter = "none";
                groupEl.style.transform = "";
            } else if (hoveredPanel === panel.id) {
                // This panel is hovered — brighten slightly and scale
                groupEl.style.opacity = "1";
                groupEl.style.filter = "brightness(1.1)";
            } else {
                // Another panel is hovered — dim this one
                groupEl.style.opacity = "0.35";
                groupEl.style.filter = "brightness(0.6)";
            }
        });
    }, [hoveredPanel, panels]);

    useEffect(() => {
        applyHoverStyles();
    }, [applyHoverStyles]);

    if (!svgContent) {
        return (
            <div
                className={`w-full aspect-square animate-pulse bg-[#2B0000]/30 rounded-lg ${className}`}
            />
        );
    }

    return (
        <div
            ref={containerRef}
            className={`interactive-comic-panel w-full ${className}`}
            dangerouslySetInnerHTML={{ __html: svgContent }}
        />
    );
}
