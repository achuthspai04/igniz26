"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import LayeredImage, { type LayerConfig } from "@/components/LayeredImage";
import Countdown from "@/components/Countdown";
import ProshowSection from "@/components/ProshowSection";
import EventSection from "@/components/EventSection";
import LoadingScreen from "@/components/LoadingScreen";
import About from "./about/page";

const HERO_LAYERS: LayerConfig[] = [
  {
    src: "/images/bgstar.png",
    alt: "Star background",
    zIndex: 10,
    objectFit: "none",
    scale: 1.0,
    translateY: "-8%",
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
    src: "/images/carn 1.svg",
    alt: "Carn layer",
    zIndex: 30,
    objectFit: "none",
    scale: 7.0,
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
    alt: "Igniz 1",
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
    alt: "Igniz 1",
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
    alt: "Igniz 1",
    zIndex: 40,
    scale: 0.5,
    objectFit: "none",
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
    src: "/images/2026.svg",
    alt: "2026",
    zIndex: 40,
    priority: true,
    scale: 0.1,
    translateY: "85%",
    objectFit: "contain",
    scrollTrigger: {
      triggerSelector: "[data-scroll-trigger='hello-section']",
      to: { y: -1000 },
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  },
];

export default function Home() {
  const [assetsReady, setAssetsReady] = useState(false);
  const handleLoadComplete = useCallback(() => setAssetsReady(true), []);

  return (
    <div className="relative w-full overflow-x-hidden bg-[#1A0000] min-h-screen">
      {!assetsReady && <LoadingScreen onComplete={handleLoadComplete} />}
      <Navbar />
      {/* Section 1: Hero — 100vh */}
      <section className="relative w-full min-h-screen h-screen flex flex-col">
        <main className="relative w-full flex-1 min-h-0">
          <LayeredImage layers={HERO_LAYERS} aspectRatio="full" />
        </main>
      </section>
      <div data-scroll-trigger="hello-section">
      </div>
      <Countdown />
      <ProshowSection />
      <section className="w-full min-h-screen flex items-center justify-center">
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
          <Link href="/Culturals">
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
    </div>
  );
}
