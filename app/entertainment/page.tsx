"use client";

import { useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageLoader from "@/components/PageLoader";

const COMIC_SVGS = [
    "/images/Frame%20comic.svg",
    "/images/Frame%20comic%20(1).svg",
    "/images/Frame%20comic%20(2).svg",
    "/images/Frame%20comic%20(3).svg",
];

export default function EntertainmentPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageLoader assets={COMIC_SVGS}>
            <div className="relative w-full overflow-clip bg-[#1A0000] min-h-screen flex flex-col">
                {/* Texture overlay */}
                <div
                    className="fixed inset-0 z-0 opacity-30 pointer-events-none mix-blend-overlay"
                    style={{
                        backgroundImage: "url('/images/texture_updated.svg')",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center top",
                    }}
                />

                <Navbar />

                {/* Main Content */}
                <main className="relative z-10 flex-1 flex flex-col items-center pt-28 sm:pt-32 md:pt-40 pb-10 sm:pb-16 px-3 sm:px-6 md:px-8">
                    {/* Heading — same style as Technical Workshops page */}
                    <div className="relative z-10 text-center mb-6 sm:mb-8 md:mb-12">
                        <h1
                            className="font-akira-expanded text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold tracking-wide text-[#FFD120] uppercase"
                            style={{
                                textShadow: "0 0 20px rgba(255, 209, 32, 0.5)",
                                fontFamily: '"Akira Expanded", sans-serif',
                            }}
                        >
                            Entertainment
                        </h1>
                    </div>

                    {/* Comic SVGs — stacked column */}
                    <div className="relative z-10 w-full max-w-4xl flex flex-col gap-4 sm:gap-6 md:gap-8">
                        {COMIC_SVGS.map((src, idx) => (
                            <div key={idx} className="w-full">
                                <Image
                                    src={src}
                                    alt={`Entertainment panel ${idx + 1}`}
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                    priority={idx === 0}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Register Button */}
                    <div className="flex justify-center mt-8 sm:mt-10 md:mt-14">
                        <a
                            href="#"
                            className="relative inline-block w-44 h-12 sm:w-56 sm:h-16 md:w-72 md:h-20 hover:scale-105 transition-transform"
                        >
                            <Image
                                src="/events/eventpages/register.webp"
                                alt="Register"
                                fill
                                className="object-contain"
                            />
                        </a>
                    </div>
                </main>
            </div>
        </PageLoader>
    );
}
