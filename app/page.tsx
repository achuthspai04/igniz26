"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-[100dvh] bg-black overflow-hidden">
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
