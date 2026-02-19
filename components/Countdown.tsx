"use client";

import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-02-26T00:00:00").getTime();
const TEXT_SHADOW_STYLE = { textShadow: '0 0 20px rgba(255, 209, 32, 0.4)' } as const;
const CONTAINER_STYLE = { fontFamily: 'var(--font-lumad), monospace', letterSpacing: '-0.05em' } as const;

function getTimeLeft() {
  const now = Date.now();
  const diff = Math.max(0, TARGET_DATE - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  return { days, hours, minutes };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center justify-center py-8 md:py-24 bg-[#1A0000] overflow-hidden">

      {/* Countdown Timer */}
      <div className="relative z-20 mx-auto px-4 flex items-center justify-center">
        <div
          className="inline-flex items-start justify-center gap-1 sm:gap-2 md:gap-3"
          style={CONTAINER_STYLE}
        >
          {/* Days */}
          <div className="flex flex-col items-center min-w-[3.5rem] sm:min-w-[5.5rem] md:min-w-[7.5rem] lg:min-w-[9.5rem]">
            <span
              className="text-[#FFD120] text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] leading-[1.2] tracking-tight tabular-nums text-center w-full"
              style={TEXT_SHADOW_STYLE}
            >
              {pad(time.days)}
            </span>
            <span className="text-[#FFD120] text-[0.8rem] sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.7rem] uppercase tracking-[0.1em] mt-3 sm:mt-5 md:mt-7 lg:mt-9">
              Days
            </span>
          </div>

          {/* Separator */}
          <span
            className="text-[#FFD120] text-[2rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[1.2] pt-1"
            style={TEXT_SHADOW_STYLE}
          >
            :
          </span>

          {/* Hours */}
          <div className="flex flex-col items-center min-w-[3.5rem] sm:min-w-[5.5rem] md:min-w-[7.5rem] lg:min-w-[9.5rem]">
            <span
              className="text-[#FFD120] text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] leading-[1.2] tracking-tight tabular-nums text-center w-full"
              style={TEXT_SHADOW_STYLE}
            >
              {pad(time.hours)}
            </span>
            <span className="text-[#FFD120] text-[0.8rem] sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.7rem] uppercase tracking-[0.1em] mt-3 sm:mt-5 md:mt-7 lg:mt-9">
              Hours
            </span>
          </div>

          {/* Separator */}
          <span
            className="text-[#FFD120] text-[2rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[1.2] pt-1"
            style={TEXT_SHADOW_STYLE}
          >
            :
          </span>

          {/* Minutes */}
          <div className="flex flex-col items-center min-w-[3.5rem] sm:min-w-[5.5rem] md:min-w-[7.5rem] lg:min-w-[9.5rem]">
            <span
              className="text-[#FFD120] text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] leading-[1.2] tracking-tight tabular-nums text-center w-full"
              style={TEXT_SHADOW_STYLE}
            >
              {pad(time.minutes)}
            </span>
            <span className="text-[#FFD120] text-[0.8rem] sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.7rem] uppercase tracking-[0.1em] mt-3 sm:mt-5 md:mt-7 lg:mt-9">
              Minutes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
