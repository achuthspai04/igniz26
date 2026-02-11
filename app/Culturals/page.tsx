"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";

import CulturalEventCard from "@/components/CulturalEventCard";

const CULTURAL_EVENTS = [
    { id: 1, src: "/Culturals/classical_dance.webp", alt: "Classical Dance Competition", href: "/culturals/abhinaya" },
    { id: 2, src: "/Culturals/d2r.webp", alt: "Hip-Hop Dance Competition", href: "/culturals/Beatstorm" },
    { id: 3, src: "/Culturals/fashion_show.webp", alt: "Fashion Show", href: "/culturals/Aurelia" },
    { id: 4, src: "/Culturals/short_film.webp", alt: "Short Film Competition", href: "/culturals/Echoes_in_frame" },
    { id: 5, src: "/Culturals/solo_music.webp", alt: "Solo Music Competition" },
    { id: 6, src: "/Culturals/shot_choreo.webp", alt: "Spot Choreography" },
    { id: 7, src: "/Culturals/mr_mrs.webp", alt: "Mr & Ms Igniz" },
    { id: 8, src: "/Culturals/quiz.webp", alt: "Quiz Competition" },
    { id: 9, src: "/Culturals/band.webp", alt: "Band" },
];

export default function CulturalsMainPage() {
    return (
        <div className="relative w-full overflow-clip bg-[#2B0000] min-h-screen flex flex-col">
            <Navbar />

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center pt-32 md:pt-40 pb-16 px-4 sm:px-6 md:px-8 relative">

                {/* Heading */}
                <div className="relative z-10 w-full max-w-2xl mb-8 md:mb-12">
                    <Image
                        src="/events/cultural events heading.webp"
                        alt="Cultural Events"
                        width={800}
                        height={160}
                        className="w-full object-contain"
                        priority
                    />
                </div>

                {/* Event Grid */}
                <div className="relative z-10 w-full max-w-[90vw] md:max-w-6xl grid grid-cols-2 md:grid-cols-3 gap-x-0 -my-4 md:-my-8" style={{ rowGap: 0 }}>
                    {CULTURAL_EVENTS.map((event) => (
                        <CulturalEventCard
                            key={event.id}
                            src={event.src}
                            alt={event.alt}
                            href={(event as any).href}
                            imageStyle={(event as any).imageStyle}
                        />
                    ))}
                </div>
            </main>


        </div>
    );
}
