"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

/** All critical image/assets used on the home page – preload for smooth first view */
const PRELOAD_ASSETS = [
  // Hero (LayeredImage)
  "/images/bgstar.svg",
  "/images/logo.svg",
  "/images/carn 1.svg.svg",
  "/images/asset_2 1.svg",
  "/images/asset_3 1.svg",
  "/images/bolts 3.svg",
  "/images/asset_texture 1.svg",
  "/images/48466.svg",
  "/images/2026.svg",
  // Countdown
  "/images/bolt%20left.png",
  "/images/bolt%20right.png",
  "/images/COUNTDOWN.svg",
  // Navbar
  "/images/navbarlogo.svg",
  "/images/navbartexture.png",
  // Proshow
  "/proShow/proshow%20cta%20(1).svg",
  "/proShow/pic.png",
  "/proShow/PRO%20SHOW.png",
  "/proShow/ProShowLogo.png",
  "/proShow/PRO%20SHOW%20OUTLINE.png",
  // Culturals / Events section
  "/events/cultural%20events%20heading.webp",
  "/events/LOAD.svg",
  "/culturals/classical_dance.webp",
  "/culturals/d2r.webp",
  "/culturals/fashion_show.webp",
  "/culturals/short_film.webp",
  "/culturals/solo_music.webp",
  "/culturals/band.webp",
  "/culturals/mr_mrs.webp",
  "/culturals/quiz.webp",
  "/culturals/shot_choreo.webp",
  // Workshops
  "/images/event-1-red.svg",
  "/images/event-2.svg",
  "/events/eventpages/register.svg",
  // About section
  "/images/TEXTURE%20UP.png",
];

const MIN_DISPLAY_MS = 1200;
const MAX_WAIT_MS = 15000;
const FADE_DURATION_MS = 600;

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () => resolve();
    img.onerror = () => resolve(); // don't block on broken assets
    img.src = src;
  });
}

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  const finish = useCallback(() => {
    // Start fade-out, then signal parent after animation ends
    setFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, FADE_DURATION_MS);
  }, [onComplete]);

  useEffect(() => {
    const start = Date.now();
    let cancelled = false;
    let doneTimeout: ReturnType<typeof setTimeout> | null = null;

    const total = PRELOAD_ASSETS.length;
    let loaded = 0;

    const report = () => {
      if (cancelled) return;
      setProgress(Math.round((loaded / total) * 100));
    };

    const promises = PRELOAD_ASSETS.map((src) =>
      preloadImage(src).then(() => {
        loaded++;
        report();
      })
    );

    Promise.all(promises).then(() => {
      if (cancelled) return;
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
      doneTimeout = setTimeout(finish, remaining);
    });

    const maxTimeout = setTimeout(() => {
      if (!cancelled) finish();
    }, MAX_WAIT_MS);

    return () => {
      cancelled = true;
      if (doneTimeout) clearTimeout(doneTimeout);
      clearTimeout(maxTimeout);
    };
  }, [finish]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1A0000]"
      style={{
        fontFamily: '"Might Makes Right BB", system-ui, sans-serif',
        opacity: fadingOut ? 0 : 1,
        transition: `opacity ${FADE_DURATION_MS}ms ease-in-out`,
        pointerEvents: fadingOut ? "none" : "auto",
      }}
      aria-hidden="false"
      aria-label="Loading"
    >
      <div className="w-full max-w-xs px-6 flex flex-col items-center gap-6">
        {/* Logo */}
        <Image
          src="/images/navbarlogo.svg"
          alt="IGNIZ"
          width={160}
          height={120}
          className="w-32 md:w-40 h-auto object-contain mb-2"
          priority
        />

        <p className="text-[#FF8A12] text-lg tracking-widest uppercase">
          Loading
        </p>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-[#2a0a0a] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#FF8A12] to-[#FFD120] rounded-full transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-[#6b2a2a] text-sm tabular-nums">{progress}%</p>
      </div>
    </div>
  );
}
