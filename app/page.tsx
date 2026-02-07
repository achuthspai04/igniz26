"use client";

import Navbar from "@/components/Navbar";
import LayeredImage, { type LayerConfig } from "@/components/LayeredImage";
import Countdown from "@/components/Countdown";
import ProshowSection from "@/components/ProshowSection";

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
  },
  {
    src: "/images/asset_2 1.svg",
    alt: "Igniz 1",
    zIndex: 35,
    objectFit: "cover",
    priority: true,
  },
  {
    src: "/images/asset_3 1.svg",
    alt: "Igniz 1",
    zIndex: 35,
    objectFit: "cover",
    priority: true,
  },
  // {
  //   zIndex: 36,
  //   content: <BoltsLayer />,
  // },
  {
    src: "/images/bolts 3.svg",
    alt: "Igniz 1",
    zIndex: 38,
    objectFit: "cover",
    priority: true,
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
    src: "/images/48466.png",
    alt: "Igniz 1",
    zIndex: 40,
    objectFit: "cover",
    priority: true,
  },
  {
    src: "/images/2026.svg",
    alt: "2026",
    zIndex: 40,
    priority: true,
    scale: 0.1,
    translateY: "85%",
    objectFit: "contain",
  },
];

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden bg-[#1A0000] min-h-screen">
      <Navbar />
      {/* Section 1: Hero — 100vh */}
      <section className="relative w-full min-h-screen h-screen flex flex-col">
        <main className="relative w-full flex-1 min-h-0">
          <LayeredImage layers={HERO_LAYERS} aspectRatio="full" />
        </main>
      </section>
      <Countdown />
      <ProshowSection />
    </div>
  );
}
