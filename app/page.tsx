"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="relative w-full h-full">
        {/* Top layer image */}
        <Image
          src="/images/48466.png"
          alt="Igniz 1"
          fill
          className="object-cover pointer-events-none select-none z-40"
          priority
        />

        {/* Second layer image */}
        <Image
          src="/images/carn 1.svg"
          alt="Carn layer"
          fill
          className="object-contain pointer-events-none select-none z-30 transform scale-75"
        />

        {/* Middle dim layer */}
        <Image
          src="/images/logo.svg"
          alt="Dim background"
          fill
          className="object-contain pointer-events-none select-none z-20 transform scale-85"
        />

        {/* Bottom star layer */}
        <Image
          src="/images/bgstar.png"
          alt="Star background"
          fill
          className="object-cover pointer-events-none select-none z-10"
        />
      </main>
    </div>
  );
}
