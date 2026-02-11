"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import EventSection from "@/components/EventSection";
import PageLoader from "@/components/PageLoader";

const PRELOAD_ASSETS = [
  "/events/cultural events heading.webp",
  "/events/LOAD.svg",
  "/culturals/classical_dance.webp",
  "/culturals/d2r.webp",
  "/culturals/fashion_show.webp",
  "/culturals/short_film.webp",
  "/culturals/solo_music.webp",
  "/culturals/band.webp",
  "/culturals/mr_mrs.webp",
  "/culturals/quiz.webp",
  "/culturals/shot_choreo.webp",
];

export default function EventPage() {
  return (
    <PageLoader assets={PRELOAD_ASSETS}>
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
    </PageLoader>
  );
}
