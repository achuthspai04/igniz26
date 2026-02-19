"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Only preload the 3 assets that are ABOVE THE FOLD on first paint.
 * Everything else loads naturally via <img>, next/image, or lazy intersection.
 *
 * bgstar.svg  — hero background (largest visual element)
 * navbarlogo.svg — navbar logo (visible immediately)
 * logo.svg — hero center logo
 */
const CRITICAL_ASSETS = [
  "/images/bgstar.svg",
  "/images/navbarlogo.svg",
  "/images/logo.svg",
];

const MIN_DISPLAY_MS = 1200;
const MAX_WAIT_MS = 6000;  // tighter cap — 3 assets shouldn't need 15s
const FADE_DURATION_MS = 600;

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  // Stable ref to onComplete — avoids re-running the effect if parent
  // doesn't memoize the callback (common React pitfall).
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const start = Date.now();
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const images: HTMLImageElement[] = [];

    const total = CRITICAL_ASSETS.length;
    let loaded = 0;

    const finish = () => {
      if (cancelled) return;
      cancelled = true; // prevent double-fire from both paths
      setFadingOut(true);
      const t = setTimeout(() => onCompleteRef.current(), FADE_DURATION_MS);
      timers.push(t);
    };

    const onAssetDone = () => {
      loaded++;
      if (cancelled) return;
      // Single batched progress update per asset (only 3 total updates)
      setProgress(Math.round((loaded / total) * 100));

      if (loaded >= total) {
        const elapsed = Date.now() - start;
        const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
        const t = setTimeout(finish, remaining);
        timers.push(t);
      }
    };

    // Fire preloads
    CRITICAL_ASSETS.forEach((src) => {
      const img = new window.Image();
      img.onload = onAssetDone;
      img.onerror = onAssetDone; // don't block on broken assets
      img.src = src;
      images.push(img);
    });

    // Safety cap — always dismiss even on network failure
    const maxTimer = setTimeout(finish, MAX_WAIT_MS);
    timers.push(maxTimer);

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      // Break references to prevent GC leak
      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
        img.src = "";
      });
    };
  }, []); // empty deps — guaranteed single execution

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1A0000]"
      style={{
        fontFamily: 'var(--font-might), system-ui, sans-serif',
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
            className="h-full bg-gradient-to-r from-[#FF8A12] to-[#FFD120] rounded-full"
            style={{
              width: `${progress}%`,
              transition: "width 200ms ease-out",
            }}
          />
        </div>

        <p className="text-[#6b2a2a] text-sm tabular-nums">{progress}%</p>
      </div>
    </div>
  );
}
