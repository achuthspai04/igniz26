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
    return HERO_LAYERS.map(layer => {
      if (layer.src === "/images/carn 1.svg.svg" && isMobile) {
        return {
          ...layer,
          scale: 3.5, // Reduce from 7x to 3.5x on mobile to save GPU memory
          scrollTrigger: {
            ...layer.scrollTrigger!,
            from: { opacity: 0.5 },
          },
        };
      }
      return layer;
    });
  }, [isMobile]);

  return (
    <div className="relative w-full overflow-x-hidden bg-[#1A0000] min-h-screen">
      {!assetsReady && <LoadingScreen onComplete={handleLoadComplete} />}
      <Navbar />
      {/* Section 1: Hero — 100vh */}
      <section className="relative w-full min-h-screen h-screen flex flex-col">
        <main className="relative w-full flex-1 min-h-0">
          <LayeredImage layers={heroLayers} aspectRatio="full" />
        </main>
      </section>
      <div data-scroll-trigger="hello-section">
      </div>
      <Countdown />
      <ProshowSection />
      <section className="w-full min-h-[auto] md:min-h-screen flex items-center justify-center py-8 md:py-0">
        <div className="flex flex-col items-center w-full">
          <Image
            src="/events/cultural events heading.webp"
            alt="Culturals"
            width={400}
            height={80}
            className="w-full max-w-2xl object-contain"
          />
          <div className="w-full">
            <EventSection />
          </div>
          <Link href="/culturals">
            <Image
              src="/events/LOAD.svg"
              alt="Register"
              width={200}
              height={60}
              className="w-full max-w-md object-contain cursor-pointer hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </section>
      <About />
      <WorkshopsSection />
      <EntertainmentSection />
    </div>
  );
}
