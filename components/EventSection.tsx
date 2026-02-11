"use client";

import { useRef, useEffect, useMemo, useCallback, useState } from "react";
import Image from "next/image";

const EVENTS = [
  { id: 1, src: "/culturals/classical_dance.webp", alt: "Classical Dance\nCompetition" },
  { id: 2, src: "/culturals/d2r.webp", alt: "Hip-Hop Dance\nCompetition" },
  { id: 3, src: "/culturals/fashion_show.webp", alt: "Fashion\nShow" },
  { id: 4, src: "/culturals/short_film.webp", alt: "Short Film\nCompetition" },
  { id: 5, src: "/culturals/solo_music.webp", alt: "Solo Music\nCompetition" },
  { id: 6, src: "/culturals/band.webp", alt: "Battle of\nBands" },
  { id: 7, src: "/culturals/mr_mrs.webp", alt: "Mr & Ms\nIgniz" },
  { id: 8, src: "/culturals/quiz.webp", alt: "General\nQuiz" },
  { id: 9, src: "/culturals/shot_choreo.webp", alt: "Shot\nChoreography" },
];

const TEXTURE_SRC = "/images/asset_texture 1.svg";
const SET_COUNT = 3; // reduced from 5 — still enough for infinite loop illusion

export default function EventSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isVisibleRef = useRef(false);
  const rafIdRef = useRef<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile once
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Memoize the repeated events array — 3 copies instead of 5
  const displayEvents = useMemo(
    () => Array.from({ length: SET_COUNT }, () => EVENTS).flat(),
    []
  );

  // Initialize scroll position to the middle set
  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const initialScroll = scrollWidth / SET_COUNT; // start at set 2 of 3
      scrollContainerRef.current.scrollLeft = initialScroll;
    }
  }, []);

  // Handle seamless infinite scroll looping
  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth } = container;
    const singleSetWidth = scrollWidth / SET_COUNT;

    if (scrollLeft < singleSetWidth * 0.3) {
      container.scrollLeft += singleSetWidth;
    } else if (scrollLeft > singleSetWidth * (SET_COUNT - 1.3)) {
      container.scrollLeft -= singleSetWidth;
    }
  }, []);

  // Auto-scroll ONLY when section is visible (IntersectionObserver)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry?.isIntersecting ?? false;
        if (isVisibleRef.current && !rafIdRef.current) {
          startAutoScroll();
        }
      },
      { rootMargin: "100px 0px", threshold: 0 }
    );
    io.observe(section);

    function startAutoScroll() {
      const scroll = () => {
        if (!isVisibleRef.current) {
          rafIdRef.current = 0;
          return; // stop loop when off-screen
        }
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft += 1;
        }
        rafIdRef.current = requestAnimationFrame(scroll);
      };
      rafIdRef.current = requestAnimationFrame(scroll);
    }

    startAutoScroll();

    return () => {
      io.disconnect();
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex flex-col items-center justify-center overflow-hidden py-10"
      style={{ contain: "layout style paint" }}
    >
      {/* Background Texture — CSS-only on mobile for perf, Image on desktop */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none bg-[#1A0000]">
        {isMobile ? (
          /* Mobile: skip heavy mix-blend-multiply Image, use CSS background instead */
          <div
            className="absolute inset-0 opacity-80"
            style={{
              backgroundImage: `url(${TEXTURE_SRC})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              mixBlendMode: "multiply",
            }}
          />
        ) : (
          <div className="absolute inset-0 mix-blend-multiply opacity-80">
            <Image
              src={TEXTURE_SRC}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0000]/20 via-transparent to-[#1A0000]/80" />
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="relative z-10 w-full flex items-end overflow-x-auto overflow-y-hidden touch-pan-y scrollbar-hide px-4 md:px-0 pointer-events-auto"
        style={{ willChange: "scroll-position" }}
      >
        <div className="flex -space-x-8 md:-space-x-20 pl-[5vw] pr-[5vw] items-end">
          {displayEvents.map((event, index) => (
            <div
              key={`${event.id}-${index}`}
              className="relative flex-shrink-0 flex flex-col items-center w-[80vw] sm:w-[60vw] md:w-[33vw] group"
              style={{ contentVisibility: "auto", containIntrinsicSize: "80vw 80vw" }}
            >
              {/* Image — the WebP already includes the yellow circle background */}
              <div className="relative w-full aspect-square flex items-center justify-center transition-transform duration-500 group-hover:scale-105 bg-transparent">
                <Image
                  src={event.src}
                  alt={event.alt.replace("\n", " ")}
                  fill
                  sizes="(max-width: 768px) 80vw, 33vw"
                  className="object-contain z-10"
                  loading={index >= EVENTS.length && index < EVENTS.length * 2 ? "eager" : "lazy"}
                />
              </div>


            </div>
          ))}
        </div>
      </div>


    </section>
  );
}
