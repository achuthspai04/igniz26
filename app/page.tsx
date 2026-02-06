"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative w-full h-[100dvh] bg-black overflow-hidden">
      <Navbar />
      <main className="w-full h-full">
        <Image
          src="/images/48466.png"
          alt="Igniz 1"
          fill
          className="object-cover"
          priority
        />
      </main>
    </div>
  );
}
