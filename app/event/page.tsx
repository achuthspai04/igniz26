"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import EventSection from "@/components/EventSection";

export default function EventPage() {
  return (
    <div className="relative w-full overflow-x-hidden bg-[#1A0000] min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 min-h-0 flex items-center justify-center">
        <div className="flex flex-col items-center">
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
          <Image
            src="/events/LOAD.svg"
            alt=""
            width={200}
            height={60}
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
}
