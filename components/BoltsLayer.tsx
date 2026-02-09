"use client";

import Image from "next/image";

/**
 * Responsive layer that fills the available space and places each bolt
 * with percentage-based positioning so the composition scales on any screen.
 * Tweak the style objects below to rearrange or resize individual bolts.
 */
export default function BoltsLayer() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
      {/* Top-left */}
      <div
        className="absolute relative w-[22%] aspect-[1259/1282] max-w-[280px]"
        style={{ left: "4%", top: "4%" }}
      >
        <Image
          src="/images/bolts 4.svg"
          alt="Bolt"
          fill
          sizes="30vw"
          className="object-contain object-left-top"
        />
      </div>
      {/* Top-right */}
      <div
        className="absolute relative w-[22%] aspect-[381/345] max-w-[280px]"
        style={{ right: "4%", top: "4%" }}
      >
        <Image
          src="/images/bolts 5.svg"
          alt="Bolt"
          fill
          sizes="30vw"
          className="object-contain object-right-top"
        />
      </div>
      {/* Bottom-right */}
      <div
        className="absolute relative w-[18%] aspect-[237/208] max-w-[220px]"
        style={{ right: "4%", bottom: "4%" }}
      >
        <Image
          src="/images/bolts 6.svg"
          alt="Bolt"
          fill
          sizes="25vw"
          className="object-contain object-right-bottom"
        />
      </div>
    </div>
  );
}
