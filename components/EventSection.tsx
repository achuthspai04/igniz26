"use client";

import { useRef, useEffect } from "react";
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

export default function EventSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Create 5 sets of events for a very long scrollable area
  const displayEvents = [...EVENTS, ...EVENTS, ...EVENTS, ...EVENTS, ...EVENTS];

  // Initialize scroll position to the middle set (set 3 of 5)
  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const initialScroll = (scrollWidth / 5) * 2;
      scrollContainerRef.current.scrollLeft = initialScroll;
    }
  }, []);

  // Handle seamless infinite scroll looping
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth } = scrollContainerRef.current;
      const singleSetWidth = scrollWidth / 5;

      if (scrollLeft < singleSetWidth * 0.5) {
        scrollContainerRef.current.scrollLeft += singleSetWidth * 2;
      } else if (scrollLeft > singleSetWidth * 3.5) {
        scrollContainerRef.current.scrollLeft -= singleSetWidth * 2;
      }
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    let animationId: number;
    const scroll = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += 1;
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center overflow-hidden py-10"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none bg-[#1A0000]">
        <div className="absolute inset-0 mix-blend-multiply opacity-80">
          <Image
            src={TEXTURE_SRC}
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0000]/20 via-transparent to-[#1A0000]/80" />
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="relative z-10 w-full flex items-end overflow-x-auto overflow-y-hidden touch-pan-y scrollbar-hide px-4 md:px-0 pointer-events-auto"
      >
        <div className="flex -space-x-8 md:-space-x-20 pl-[5vw] pr-[5vw] items-end">
          {displayEvents.map((event, index) => (
            <div
              key={`${event.id}-${index}`}
              className="relative flex-shrink-0 flex flex-col items-center w-[80vw] sm:w-[60vw] md:w-[33vw] group"
            >
              {/* Image — the WebP already includes the yellow circle background */}
              <div className="relative w-full aspect-square flex items-center justify-center transition-transform duration-500 group-hover:scale-105 bg-transparent">
                <Image
                  src={event.src}
                  alt={event.alt.replace("\n", " ")}
                  fill
                  sizes="(max-width: 768px) 80vw, 33vw"
                  className="object-contain z-10"
                  priority={index >= 10 && index <= 14}
                />
              </div>


            </div>
          ))}
        </div>
      </div>


    </section>
  );
}
