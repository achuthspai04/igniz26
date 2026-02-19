"use client";

import { usePathname } from "next/navigation";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const smootherRef = useRef<ScrollSmoother | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    ScrollTrigger.refresh();
    const hash = window.location.hash;

    if (hash && smootherRef.current) {
      // Cross-page hash navigation (e.g. /Culturals → /#about-us)
      // Small delay lets the target DOM element render before scrolling
      const t = setTimeout(() => {
        smootherRef.current?.scrollTo(hash, true);
      }, 100);
      return () => clearTimeout(t);
    } else if (smootherRef.current) {
      smootherRef.current.scrollTop(0);
    }
  }, [pathname]);

  useEffect(() => {
    // ... existing initialization code ...
    const isMobile = window.innerWidth < 768;
    smootherRef.current = ScrollSmoother.create({
      smooth: isMobile ? 0 : 1.5,
      effects: !isMobile,
      smoothTouch: false,
    });

    return () => {
      smootherRef.current?.kill();
      smootherRef.current = null;
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
