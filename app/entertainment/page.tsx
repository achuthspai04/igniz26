"use client";

import { useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageLoader from "@/components/PageLoader";
import InteractiveComicPanel, {
    type ComicPanelConfig,
} from "@/components/InteractiveComicPanel";

const COMIC_SVG_1 = "/images/Frame%20comic-1.svg";
const COMIC_SVG_2 = "/images/Frame%20comic-2.svg";
const COMIC_SVG_3 = "/images/Frame%20comic-3.svg";
const COMIC_SVG_4 = "/images/Frame%20comic-4.svg";

const PANEL_CONFIG_1: ComicPanelConfig[] = [
    {
        id: "TOP",
        label: "Mechanical Bull",
        onClick: () => console.log("Mechanical Bull clicked"),
    },
    {
        id: "LEFT",
        label: "Archery",
        onClick: () => console.log("Archery clicked"),
    },
    {
        id: "RIGHT",
        label: "Bumper Balls",
        onClick: () => console.log("Bumper Balls clicked"),
    },
];

const PANEL_CONFIG_2: ComicPanelConfig[] = [
    {
        id: "TOP",
        label: "Paint Ball",
        onClick: () => console.log("Paint Ball clicked"),
    },
    {
        id: "LEFT",
        label: "VR Gaming",
        onClick: () => console.log("VR Gaming clicked"),
    },
    {
        id: "RIGHT",
        label: "E-Sports",
        onClick: () => console.log("E-Sports clicked"),
    },
];

const PANEL_CONFIG_3: ComicPanelConfig[] = [
    {
        id: "TOP",
        label: "Escape Room",
        onClick: () => console.log("Escape Room clicked"),
    },
    {
        id: "LEFT",
        label: "Treasure Hunt",
        onClick: () => console.log("Treasure Hunt clicked"),
    },
    {
        id: "RIGHT",
        label: "Basketball Throw",
        onClick: () => console.log("Basketball Throw clicked"),
    },
];

const PANEL_CONFIG_4: ComicPanelConfig[] = [
    {
        id: "TOP",
        label: "Ring Throw",
        onClick: () => console.log("Ring Throw clicked"),
    },
    {
        id: "LEFT",
        label: "Snake & Ladder",
        onClick: () => console.log("Snake & Ladder clicked"),
    },
    {
        id: "RIGHT",
        label: "Board Games",
        onClick: () => console.log("Board Games clicked"),
    },
];

export default function EntertainmentPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageLoader assets={[COMIC_SVG_1, COMIC_SVG_2, COMIC_SVG_3, COMIC_SVG_4]}>
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

                    {/* Interactive Comic Panels */}
                    <div className="relative z-10 w-full max-w-4xl flex flex-col gap-4 sm:gap-6 md:gap-8">
                        <InteractiveComicPanel
                            svgPath={COMIC_SVG_1}
                            panels={PANEL_CONFIG_1}
                        />
                        <InteractiveComicPanel
                            svgPath={COMIC_SVG_2}
                            panels={PANEL_CONFIG_2}
                        />
                        <InteractiveComicPanel
                            svgPath={COMIC_SVG_3}
                            panels={PANEL_CONFIG_3}
                        />
                        <InteractiveComicPanel
                            svgPath={COMIC_SVG_4}
                            panels={PANEL_CONFIG_4}
                        />
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
