"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import LayeredImage, { type LayerConfig } from "@/components/LayeredImage";
import Countdown from "@/components/Countdown";
import ProshowSection from "@/components/ProshowSection";
import EventSection from "@/components/EventSection";
import LoadingScreen from "@/components/LoadingScreen";
import WorkshopsSection from "@/components/WorkshopsSection";
import EntertainmentSection from "@/components/EntertainmentSection";
import About from "./about/page";

const HERO_LAYERS: LayerConfig[] = [
  {
    src: "/images/bgstar.svg",
    alt: "Star background",
    zIndex: 10,
    objectFit: "none",
    scale: 1.0,
    translateY: "-8%",
    scrollTrigger: {
      triggerSelector: "[data-scroll-trigger='hello-section']",
      to: { opacity: 0 },
      start: "top bottom",
      end: "bottom 70%",
      scrub: true,
    },
  },
  {
    src: "/images/logo.svg",
    alt: "Dim background",
    zIndex: 20,
    objectFit: "contain",
    scale: 0.85,
    translateY: "-8%",
    opacity: 0.15,
  },
  {
    src: "/images/carn 1.svg.svg",
    alt: "Carn layer",
    zIndex: 30,
    objectFit: "none",
    scale: 7.0,
    opacity: 0.4,
    scrollTrigger: {
      triggerSelector: "[data-scroll-trigger='hello-section']",
      to: { opacity: 0 },
      start: "top bottom",
      end: "bottom 70%",
      scrub: true,
    },

  },
  {
    src: "/images/asset_2 1.svg",
    alt: "Igniz 26",
    zIndex: 35,
    objectFit: "cover",
    priority: true,
    scrollTrigger: {
      triggerSelector: "[data-scroll-trigger='hello-section']",
      to: { y: -1000 },
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  },
  {
    src: "/images/asset_3 1.svg",
    alt: "Igniz 26",
    zIndex: 35,
    objectFit: "cover",
    priority: true,
    scrollTrigger: {
      triggerSelector: "[data-scroll-trigger='hello-section']",
      to: { y: -1000 },
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  },
  // {
  //   zIndex: 36,
  //   content: <BoltsLayer />,
  // },
  {
    src: "/images/bolts 3.svg",
    alt: "Bolts",
    zIndex: 38,
    objectFit: "cover",
    objectPosition: "center",
    priority: true,
    className: "w-full min-w-full",
    scrollTrigger: {
      triggerSelector: "[data-scroll-trigger='hello-section']",
      to: { y: -1000 },
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  },
  {
    src: "/images/asset_texture 1.svg",
    alt: "Texture overlay",
    zIndex: 39,
    objectFit: "cover",
    priority: true,
    mixBlendMode: "multiply",
  },
  {
    src: "/images/48466.svg",
    alt: "Igniz 26",
    zIndex: 40,
    scale: 0.5,
    objectFit: "contain",
    priority: true,
    scrollTrigger: {
      triggerSelector: "[data-scroll-trigger='hello-section']",
      to: { x: 1000 },
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  },
  {
    src: "/images/2026.svg",
    alt: "2026",
    zIndex: 40,
    priority: true,
    scale: 0.1,
    translateY: "85%",
    objectFit: "contain",
    scrollTrigger: {
      triggerSelector: "[data-scroll-trigger='hello-section']",
      to: { x: 1000 },
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  },
];

export default function Home() {
  const [assetsReady, setAssetsReady] = useState(false);
  const handleLoadComplete = useCallback(() => setAssetsReady(true), []);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const heroLayers = useMemo(() => {
    if (!isMobile) return HERO_LAYERS;
    return HERO_LAYERS.map(layer => {
      // For all layers with scrollTrigger on mobile: slow down with scrub smoothing
      const mobileScrollTrigger = layer.scrollTrigger ? {
        ...layer.scrollTrigger,
        scrub: 1.5,
      } : undefined;

      // Carn layer: reduce scale for GPU perf
      if (layer.src === "/images/carn 1.svg.svg") {
        return {
          ...layer,
          scale: 2.0,
          scrollTrigger: {
            ...mobileScrollTrigger!,
            from: { opacity: 0.5 },
          },
        };
      }
      // Star bg: smaller scale so it fits mobile viewport
      if (layer.src === "/images/bgstar.svg") {
        return { ...layer, scale: 0.6, scrollTrigger: mobileScrollTrigger };
      }
      // Asset layers: use contain + shift up + radial fade, reduce scroll distance
      if (layer.src === "/images/asset_2 1.svg" || layer.src === "/images/asset_3 1.svg") {
        return {
          ...layer,
          objectFit: "contain" as const,
          scale: 0.9,
          translateY: "-5%",
          maskImage: "radial-gradient(ellipse 55% 50% at center, black 55%, transparent 85%)",
          scrollTrigger: mobileScrollTrigger ? { ...mobileScrollTrigger, to: { y: -400 } } : undefined,
        };
      }
      // Bolts: contain + shift up + radial fade, reduce scroll distance
      if (layer.src === "/images/bolts 3.svg") {
        return {
          ...layer,
          objectFit: "contain" as const,
          scale: 0.9,
          translateY: "-5%",
          maskImage: "radial-gradient(ellipse 55% 50% at center, black 55%, transparent 85%)",
          scrollTrigger: mobileScrollTrigger ? { ...mobileScrollTrigger, to: { y: -400 } } : undefined,
        };
      }
      // 48466 (Igniz title): bigger on mobile, reduce scroll distance
      if (layer.src === "/images/48466.svg") {
        return {
          ...layer,
          scale: 0.7,
          scrollTrigger: mobileScrollTrigger ? { ...mobileScrollTrigger, to: { x: 400 } } : undefined,
        };
      }
      // 2026: adjust scale, reduce scroll distance
      if (layer.src === "/images/2026.svg") {
        return {
          ...layer,
          scale: 0.08,
          translateY: "85%",
          scrollTrigger: mobileScrollTrigger ? { ...mobileScrollTrigger, to: { x: 400 } } : undefined,
        };
      }
      return layer;
    });
  }, [isMobile]);

  return (
    <div className="relative w-full overflow-x-hidden bg-[#1A0000] min-h-screen">
      {!assetsReady && <LoadingScreen onComplete={handleLoadComplete} />}
      <Navbar />
      {/* Section 1: Hero + Countdown */}
      <section className="relative w-full flex flex-col">
        <div className="relative w-full h-screen">
          <LayeredImage layers={heroLayers} aspectRatio="full" />
          <div data-scroll-trigger="hello-section" className="absolute bottom-0 left-0 w-full h-0" />
        </div>
        <Countdown />
      </section>
      <ProshowSection />
      <section className="w-full flex items-center justify-center py-16 md:py-24">
        <div className="flex flex-col items-center w-full">
          <div className="w-full">
            <EventSection />
          </div>
          <Link href="/culturals">
            <div className="relative w-64 h-20 md:w-80 md:h-24 cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/events/LOAD.svg"
                alt="Register"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>
      </section>
      <About />
      <WorkshopsSection />
      <EntertainmentSection />
    </div>
  );
}
