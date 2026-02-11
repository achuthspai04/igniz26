"use client";

import { useState, useEffect, useCallback } from "react";

/** All critical image/assets used on the home page – preload for smooth first view */
const PRELOAD_ASSETS = [
  // Hero (LayeredImage)
  "/images/bgstar.svg",
  "/images/logo.svg",
  "/images/carn 1.svg",
  "/images/asset_2 1.svg",
  "/images/asset_3 1.svg",
  "/images/bolts 3.svg",
  "/images/asset_texture 1.svg",
  "/images/48466.png",
  "/images/2026.svg",
  // Countdown
  "/images/bolt%20left.png",
  "/images/bolt%20right.png",
  // Navbar
  "/images/navbarlogo.svg",
  "/images/navbartexture.png",
  // Proshow (paths must match ProshowSection / Next.js public)
  "/proShow/Ellipse%2050.png",
  "/proShow/pic.png",
  "/proShow/PRO%20SHOW.png",
  "/proShow/ProShowLogo.png",
  "/proShow/PRO%20SHOW%20OUTLINE.png",
];

const MIN_DISPLAY_MS = 600;
const MAX_WAIT_MS = 12000;

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });
}

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  const finish = useCallback(() => {
    onComplete();
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
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1A0000] transition-opacity duration-500"
      style={{ fontFamily: '"Might Makes Right BB", system-ui, sans-serif' }}
      aria-hidden="false"
      aria-label="Loading"
    >
      <div className="w-full max-w-xs px-6 flex flex-col items-center gap-8">
        <p className="text-[#FF8A12] text-lg tracking-widest uppercase">
          Loading
        </p>
        <div className="w-full h-1 bg-[#2a0a0a] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#FF8A12] rounded-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-[#6b2a2a] text-sm tabular-nums">{progress}%</p>
      </div>
    </div>
  );
}
