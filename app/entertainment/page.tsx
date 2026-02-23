"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

/* ─── Placeholder images — swap when real assets arrive ─── */
const CULTURAL_IMGS = [
    "/culturals/classical_dance.webp",
    "/culturals/d2r.webp",
    "/culturals/fashion_show.webp",
    "/culturals/short_film.webp",
    "/culturals/solo_music.webp",
    "/culturals/shot_choreo.webp",
    "/culturals/mr_mrs.webp",
    "/culturals/quiz.webp",
    "/culturals/band.webp",
];
const img = (i: number) => CULTURAL_IMGS[i % CULTURAL_IMGS.length];

/* ─────────────────────── TYPES ─────────────────────── */

interface EntertainmentItem {
    id: string;
    name: string;
    /** shown for paid events only — omit for free events */
    lineup?: string;
    description: string;
    entryFee: string;       // "₹60 per head" | "Free" | "₹400 per team"
    prizePool?: string;     // omit for free events
    image: string;
    registerHref?: string;
}

interface ESportsGame {
    id: string;
    name: string;
    genre: string;
    lineup: string;
    entryFee: string;
    prizePool?: string;
    image: string;
    logoBg?: string;
    registerHref?: string;
}

/* ─────────────────────── DATA ─────────────────────── */

const ENTERTAINMENT_EVENTS: EntertainmentItem[] = [
    {
        id: "paintball",
        name: "Paintball",
        lineup: "Team of 3",
        description:
            "Gear up, strategise, and paint the battlefield in your team's colors. Squad up with 2 others and outlast every rival on the field.",
        entryFee: "₹400 per team",
        image: "/images/man-with-gun-playing-paintball (1).jpg",
        registerHref: "https://snaptiqz.com/event/paintball/",
    },
    {
        id: "mechanical-bull",
        name: "Mechanical Bull",
        lineup: "Solo Rider",
        description:
            "Grip the horns, feel the spin, and hold on for dear life. The longest ride wins — and the crowd never lets you forget a fall.",
        entryFee: "₹60 per head",
        image: "/images/mechanical-bull.jpg",
        registerHref: "https://snaptiqz.com/event/mechanicalbull",
    },
    {
        id: "archery",
        name: "Archery",
        lineup: "Solo Player",
        description:
            "Steady your breath, draw back, and send it straight to the bullseye. A timeless test of focus and precision under pressure.",
        entryFee: "₹20 per head",
        image: "/images/archery.j.jpg",
        registerHref: "https://snaptiqz.com/event/archery",
    },
    {
        id: "bumper-balls",
        name: "Bumper Balls",
        lineup: "Multi Player",
        description:
            "Get inside giant inflatable balls and crash into friends for maximum chaos. No rules, just rolling — pure festival energy.",
        entryFee: "₹50 per head",
        image: "/images/bumper-ball.webp",
        registerHref: "https://snaptiqz.com/event/ballfighting",
    },
    {
        id: "escape-room",
        name: "Escape Room",
        lineup: "Team of 3 – 4",
        description:
            "Clock's ticking. Decode clues, crack locks, and work as one to break free before time runs out. Best time wins.",
        entryFee: "₹70 per head",
        prizePool: "₹2,500",
        image: "/images/escape.avif",
        registerHref: "https://snaptiqz.com/event/escaperoom/",
    },
    {
        id: "treasure-hunt",
        name: "Treasure Hunt",
        lineup: "Team of 3",
        description:
            "A campus-wide chase packed with riddles and hidden checkpoints. Navigate fast, solve smart — the treasure won't wait.",
        entryFee: "₹150 per team",
        prizePool: "₹1,500",
        image: "/images/tr (1).png",
        registerHref: "https://snaptiqz.com/event/treasurehunt/",
    },
    {
        id: "basketball-throw",
        name: "Basketball Throw",
        lineup: "Solo Player",
        description:
            "One ball. One hoop. How many can you sink in the time limit? Step up to the line and show us what you've got.",
        entryFee: "₹20 per head",
        image: "/images/basket-ball.jpg",
        registerHref: "https://snaptiqz.com/event/basketballthrow",
    },
    {
        id: "catch-the-baton",
        name: "Catch the Baton",
        lineup: "Solo Player",
        description:
            "Reflexes, timing, and nerves of steel — catch the baton without dropping it. Sounds simple. Rarely is.",
        entryFee: "₹30 per head",
        image: "/images/catchthebaton.jpg",
        registerHref: "https://snaptiqz.com/event/catchthebaton",
    },
    {
        id: "ring-throw",
        name: "Ring Throw",
        lineup: "Solo Player",
        description:
            "A carnival classic — aim those rings, land them clean, and rack up the highest score. Easy to learn, hard to master.",
        entryFee: "₹20 per head",
        image: "/images/ring.jpg",
        registerHref: "https://snaptiqz.com/event/ringthrow",
    },
    {
        id: "vr-boxing",
        name: "VR Boxing",
        lineup: "Solo Player",
        description:
            "Strap on the headset and step into the ring. Dodge, weave, and throw punches in a fully immersive virtual boxing experience.",
        entryFee: "₹40 per head",
        image: "/images/vrboxing.jpg",
        registerHref: "https://snaptiqz.com/event/vrboxing",
    },
    {
        id: "vr-roller-coaster",
        name: "VR Roller Coaster",
        lineup: "Solo Player",
        description:
            "Feel every twist, drop, and loop without leaving the ground. A wild virtual ride that'll leave your heart racing long after.",
        entryFee: "₹30 per head",
        image: "/images/vrroller.jpg",
        registerHref: "https://snaptiqz.com/event/vrrollercoaster",
    },
    {
        id: "human-snake-ladder",
        name: "Human Snake & Ladder",
        lineup: "Multiplayer",
        description:
            "You are the piece. Step on a giant board, roll the dice, and navigate snakes and ladders at full human scale. Pure classic fun.",
        entryFee: "Free",
        image: "/images/humansnake.jpg",
        registerHref: "https://snaptiqz.com/event/humansnake",
    },
    {
        id: "murder-mystery",
        name: "Murder Mystery",
        lineup: "Solo Player",
        description:
            "Reality glitches. Fiction bleeds through. Follow the symbols, question everything, and uncover the truth before it rewrites you. Only the sharpest minds make it out.",
        entryFee: "Free",
        image: "/images/MurderMystery.jpg",
        registerHref: "https://snaptiqz.com/event/murder",
    },
];

const ESPORTS_GAMES: ESportsGame[] = [
    {
        id: "fifa",
        name: "FIFA",
        genre: "Sports",
        lineup: "Solo Player",
        entryFee: "₹100 per head",
        prizePool: "₹2,000",
        image: "/images/FC_26_Logo.svg",
        registerHref: "https://snaptiqz.com/event/fifagame",
    },
    {
        id: "efootball",
        name: "eFootball",
        genre: "Sports",
        lineup: "Solo Player",
        entryFee: "₹30 per head",
        prizePool: "₹2,000",
        image: "/images/efootball-seeklogo.png",
        registerHref: "https://snaptiqz.com/event/efootball",
    },
    {
        id: "bgmi",
        name: "BGMI",
        genre: "Battle Royale",
        lineup: "Team of 4",
        entryFee: "₹200 per team",
        prizePool: "₹2,000",
        image: "/images/Battlegrounds_Mobile_India,_BGMI_LOGO_white_-_1082x360.png",
        logoBg: "#0a1628",
        registerHref: "https://snaptiqz.com/event/bgmiteam",
    },
    {
        id: "valorant",
        name: "Valorant",
        genre: "Tactical Shooter",
        lineup: "Team of 5",
        entryFee: "₹250 per team",
        prizePool: "₹2,000",
        image: "/images/valorant.png",
        registerHref: "https://snaptiqz.com/event/valorant",
    },
    {
        id: "mini-militia",
        name: "Mini Militia",
        genre: "Action Shooter",
        lineup: "Team of 4",
        entryFee: "₹100 per team",
        prizePool: "₹1,500",
        image: "/images/mini-militia.png",
        registerHref: "https://snaptiqz.com/event/minimilitia",
    },
];

/* ─────────────────────── HOOK ─────────────────────── */

function useInView(threshold = 0.1) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
            },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return { ref, inView };
}

/* ─────────────────────── ATOMS ─────────────────────── */

function SectionDivider() {
    return (
        <div className="w-full flex items-center gap-4 my-10 md:my-14">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#FF8A12]/40 to-transparent" />
            <div className="w-2 h-2 rotate-45 bg-[#FFD120] flex-shrink-0" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#FF8A12]/40 to-transparent" />
        </div>
    );
}

/* ─── Inline SVG icons ─── */
const IconTrophy = (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
        <path d="M5 2h6v5a3 3 0 0 1-6 0V2Z" stroke="#FF8A12" strokeWidth="1.5" />
        <path d="M5 4H3a2 2 0 0 0 2 2M11 4h2a2 2 0 0 1-2 2" stroke="#FF8A12" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 9v3M5.5 14h5" stroke="#FF8A12" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);
const IconTicket = (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="4" width="14" height="8" rx="1.5" stroke="#FF8A12" strokeWidth="1.5" />
        <path d="M10 4v8" stroke="#FF8A12" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);
const IconArrow = (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const IconPeople = (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
        <circle cx="6" cy="4.5" r="2.5" stroke="#FF8A12" strokeWidth="1.5" />
        <path d="M1 13c0-2.761 2.239-5 5-5h.5" stroke="#FF8A12" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="11" cy="5" r="2" stroke="#FF8A12" strokeWidth="1.5" />
        <path d="M8 13c0-2.209 1.343-4 3-4s3 1.791 3 4" stroke="#FF8A12" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

/* ─────────────────────── EVENT CARD ─────────────────────── */

function EventCard({ item, index }: { item: EntertainmentItem; index: number }) {
    const { ref, inView } = useInView();
    const isFree = item.entryFee === "Free";

    return (
        <div
            ref={ref}
            className="group flex flex-col overflow-hidden border border-[#FF8A12]/20 hover:border-[#FF8A12]/60 transition-colors duration-300 bg-[#1A0000] h-full"
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.52s ease ${index * 45}ms, transform 0.52s ease ${index * 45}ms`,
            }}
        >
            {/* ── Image (clickable if link exists) ── */}
            {item.registerHref ? (
                <a href={item.registerHref} target="_blank" rel="noopener noreferrer" className="block relative w-full overflow-hidden flex-shrink-0 cursor-pointer" style={{ aspectRatio: "16/9" }}>
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className={`object-cover ${item.id === "murder-mystery" ? "object-top" : ""} transition-transform duration-500 group-hover:scale-105 ${item.id === "paintball" || item.id === "mechanical-bull" || item.id === "archery" || item.id === "bumper-balls" || item.id === "escape-room" || item.id === "treasure-hunt" || item.id === "basketball-throw" || item.id === "catch-the-baton" || item.id === "ring-throw" || item.id === "vr-boxing" || item.id === "vr-roller-coaster" || item.id === "human-snake-ladder" || item.id === "murder-mystery" ? "grayscale" : ""}`}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className={`absolute inset-0 ${item.id === "paintball" || item.id === "mechanical-bull" || item.id === "archery" || item.id === "bumper-balls" || item.id === "escape-room" || item.id === "treasure-hunt" || item.id === "basketball-throw" || item.id === "catch-the-baton" || item.id === "ring-throw" || item.id === "vr-boxing" || item.id === "vr-roller-coaster" || item.id === "human-snake-ladder" || item.id === "murder-mystery" ? "bg-gradient-to-t from-[#1A0000]/75 via-transparent to-transparent" : "bg-gradient-to-t from-[#1A0000] via-[#1A0000]/20 to-transparent"}`} />
                    {isFree && (
                        <span className="absolute top-3 right-3 bg-[#FFD120] text-black text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-1">
                            Free
                        </span>
                    )}
                </a>
            ) : (
                <div className="relative w-full overflow-hidden flex-shrink-0" style={{ aspectRatio: "16/9" }}>
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className={`object-cover ${item.id === "murder-mystery" ? "object-top" : ""} transition-transform duration-500 group-hover:scale-105 ${item.id === "paintball" || item.id === "mechanical-bull" || item.id === "archery" || item.id === "bumper-balls" || item.id === "escape-room" || item.id === "treasure-hunt" || item.id === "basketball-throw" || item.id === "catch-the-baton" || item.id === "ring-throw" || item.id === "vr-boxing" || item.id === "vr-roller-coaster" || item.id === "human-snake-ladder" || item.id === "murder-mystery" ? "grayscale" : ""}`}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className={`absolute inset-0 ${item.id === "paintball" || item.id === "mechanical-bull" || item.id === "archery" || item.id === "bumper-balls" || item.id === "escape-room" || item.id === "treasure-hunt" || item.id === "basketball-throw" || item.id === "catch-the-baton" || item.id === "ring-throw" || item.id === "vr-boxing" || item.id === "vr-roller-coaster" || item.id === "human-snake-ladder" || item.id === "murder-mystery" ? "bg-gradient-to-t from-[#1A0000]/75 via-transparent to-transparent" : "bg-gradient-to-t from-[#1A0000] via-[#1A0000]/20 to-transparent"}`} />
                    {isFree && (
                        <span className="absolute top-3 right-3 bg-[#FFD120] text-black text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-1">
                            Free
                        </span>
                    )}
                </div>
            )}

            {/* ── Body ── */}
            <div className="flex flex-col gap-3 p-5 sm:p-6 flex-1">

                {/* Accent + name */}
                <div>
                    <div className="w-8 h-[2px] bg-[#FF8A12] mb-3 group-hover:w-14 transition-all duration-300" />
                    <h3
                        className="text-[#FFD120] uppercase font-semibold leading-snug text-lg sm:text-xl"
                        style={{ fontFamily: "var(--font-akira), sans-serif", letterSpacing: "-0.025em" }}
                    >
                        {item.name}
                    </h3>
                </div>

                {/* Info pills — always shown */}
                <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-[#FF8A12]/15 pt-3" style={{ fontFamily: "var(--font-quanta), sans-serif" }}>
                    {item.lineup && (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-[#FFD120]/65">
                            {IconPeople}&nbsp;{item.lineup}
                        </span>
                    )}
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-[#FFD120]/65">
                        {IconTicket}&nbsp;{item.entryFee}
                    </span>
                    {item.prizePool && (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-[#FFD120]/65">
                            {IconTrophy}&nbsp;Prize: {item.prizePool}
                        </span>
                    )}
                </div>

                {/* Description */}
                <p className="text-[#FFD120]/55 text-sm sm:text-[0.9rem] leading-relaxed flex-1" style={{ fontFamily: "var(--font-quanta), sans-serif" }}>
                    {item.description}
                </p>

                {/* CTA */}
                {item.registerHref ? (
                    <a
                        href={item.registerHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto self-start inline-flex items-center gap-2 border border-[#FF8A12] px-5 py-2 text-[#FF8A12] text-xs font-bold uppercase tracking-wider hover:bg-[#FF8A12] hover:text-black transition-all duration-200"
                        style={{ fontFamily: "var(--font-akira), sans-serif" }}
                    >
                        Register
                    </a>
                ) : (
                    <span className="mt-auto self-start text-[10px] text-[#FF8A12]/30 uppercase tracking-[0.18em]">
                        Registration link coming soon
                    </span>
                )}
            </div>
        </div>
    );
}

/* ─────────────────────── E-SPORTS CARD ─────────────────────── */

function ESportsCard({ game, index }: { game: ESportsGame; index: number }) {
    const { ref, inView } = useInView();
    const isLogo = game.image.endsWith(".svg") || game.image.includes("seeklogo") || game.image.includes("logo") || game.image.includes("LOGO") || game.image.includes("valorant") || game.image.includes("mini-militia");
    const logoBg = game.logoBg ?? "#ffffff";
    return (
        <div
            ref={ref}
            className="group flex flex-col overflow-hidden border border-[#FFD120]/18 hover:border-[#FFD120]/55 transition-colors duration-300 bg-[#1A0000] h-full"
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(22px)",
                transition: `opacity 0.5s ease ${120 + index * 65}ms, transform 0.5s ease ${120 + index * 65}ms`,
            }}
        >
            {/* Image (clickable if link exists) */}
            {game.registerHref ? (
                <a href={game.registerHref} target="_blank" rel="noopener noreferrer" className="block relative w-full overflow-hidden flex-shrink-0 cursor-pointer" style={{ aspectRatio: "4/3", background: isLogo ? logoBg : undefined }}>
                    <Image
                        src={game.image}
                        alt={game.name}
                        fill
                        className={`transition-transform duration-500 group-hover:scale-105 ${isLogo ? "object-contain p-4 grayscale" : "object-cover"}`}
                        sizes="(max-width: 768px) 200px, 20vw"
                    />
                    {!isLogo && <div className="absolute inset-0 bg-gradient-to-t from-[#1A0000]/75 via-transparent to-transparent" />}
                    {isLogo && <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(26,0,0,0.55) 65%, #1A0000 100%)' }} />}
                    <span className="absolute top-2.5 left-2.5 bg-[#FF8A12] text-black text-[8px] font-extrabold uppercase tracking-wider px-2 py-0.5">
                        {game.genre}
                    </span>
                </a>
            ) : (
                <div className="relative w-full overflow-hidden flex-shrink-0" style={{ aspectRatio: "4/3", background: isLogo ? logoBg : undefined }}>
                    <Image
                        src={game.image}
                        alt={game.name}
                        fill
                        className={`transition-transform duration-500 group-hover:scale-105 ${isLogo ? "object-contain p-4 grayscale" : "object-cover"}`}
                        sizes="(max-width: 768px) 200px, 20vw"
                    />
                    {!isLogo && <div className="absolute inset-0 bg-gradient-to-t from-[#1A0000]/75 via-transparent to-transparent" />}
                    {isLogo && <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(26,0,0,0.55) 65%, #1A0000 100%)' }} />}
                    <span className="absolute top-2.5 left-2.5 bg-[#FF8A12] text-black text-[8px] font-extrabold uppercase tracking-wider px-2 py-0.5">
                        {game.genre}
                    </span>
                </div>
            )}

            {/* Body */}
            <div className="flex flex-col gap-2.5 p-4 flex-1">
                <div className="w-6 h-[2px] bg-[#FF8A12] mb-0.5 group-hover:w-10 transition-all duration-300" />
                <h3
                    className="text-[#FFD120] uppercase font-semibold text-sm sm:text-base leading-tight"
                    style={{ fontFamily: "var(--font-akira), sans-serif", letterSpacing: "-0.025em" }}
                >
                    {game.name}
                </h3>

                <div className="flex flex-col gap-1.5 border-t border-[#FF8A12]/15 pt-2.5" style={{ fontFamily: "var(--font-quanta), sans-serif" }}>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-[#FFD120]/60">
                        {IconPeople}&nbsp;{game.lineup}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-[#FFD120]/60">
                        {IconTicket}&nbsp;{game.entryFee}
                    </span>
                    {game.prizePool && (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-[#FFD120]/60">
                            {IconTrophy}&nbsp;Prize: {game.prizePool}
                        </span>
                    )}
                </div>

                {game.registerHref ? (
                    <a
                        href={game.registerHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto pt-2 self-start inline-flex items-center gap-1.5 border border-[#FF8A12] px-4 py-1.5 text-[#FF8A12] text-[10px] font-bold uppercase tracking-wider hover:bg-[#FF8A12] hover:text-black transition-all duration-200"
                        style={{ fontFamily: "var(--font-akira), sans-serif" }}
                    >
                        Register
                    </a>
                ) : (
                    <span className="mt-auto pt-2 text-[9px] text-[#FF8A12]/30 uppercase tracking-[0.15em]">
                        Link coming soon
                    </span>
                )}
            </div>
        </div>
    );
}

/* ─────────────────────── PAGE ─────────────────────── */

export default function EntertainmentPage() {
    const [heroVisible, setHeroVisible] = useState(false);
    const eSportsRef = useRef<HTMLDivElement>(null);
    const [eSportsVisible, setESportsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const t = setTimeout(() => setHeroVisible(true), 80);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        const el = eSportsRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setESportsVisible(true); obs.disconnect(); } },
            { threshold: 0.08 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div className="relative w-full overflow-x-hidden bg-[#2B0000] min-h-screen flex flex-col">

            <Navbar />

            <main className="flex-1 flex flex-col items-center pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 md:px-8 lg:px-12">

                {/* ── Heading ── */}
                <div
                    className="text-center mb-2"
                    style={{
                        opacity: heroVisible ? 1 : 0,
                        transform: heroVisible ? "translateY(0)" : "translateY(-18px)",
                        transition: "opacity 0.65s ease, transform 0.65s ease",
                    }}
                >
                    <h1
                        className="text-[#FFD120] uppercase text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-semibold"
                        style={{
                            fontFamily: "var(--font-akira), sans-serif",
                            textShadow: "0 0 36px rgba(255,209,32,0.28), 0 0 80px rgba(255,209,32,0.10)",
                            letterSpacing: "-0.01em",
                        }}
                    >
                        Entertainment
                    </h1>
                    <div
                        className="mt-3 mx-auto h-[2px] bg-gradient-to-r from-transparent via-[#FF8A12] to-transparent"
                        style={{ width: heroVisible ? "50%" : "0%", transition: "width 0.75s ease 0.28s" }}
                    />
                    <p
                        className="mt-4 text-[#FFD120]/40 text-xs sm:text-sm font-light tracking-[0.28em] uppercase"
                        style={{ opacity: heroVisible ? 1 : 0, transition: "opacity 0.65s ease 0.38s", fontFamily: "var(--font-quanta), sans-serif" }}
                    >
                        Games · Rides · Thrills — All Day Long
                    </p>
                </div>

                <SectionDivider />

                {/* ── E-Sports ── */}
                <section ref={eSportsRef} className="w-full max-w-6xl mb-2">
                    <div
                        className="text-center mb-8"
                        style={{
                            opacity: eSportsVisible ? 1 : 0,
                            transform: eSportsVisible ? "translateY(0)" : "translateY(16px)",
                            transition: "opacity 0.55s ease, transform 0.55s ease",
                        }}
                    >
                        <div className="inline-flex items-center gap-3 mb-2">
                            <div className="w-7 h-px bg-[#FF8A12]/50" />
                            <span className="text-[#FF8A12] text-[10px] uppercase tracking-[0.3em] font-semibold" style={{ fontFamily: "var(--font-quanta), sans-serif" }}>
                                Neo Arena
                            </span>
                            <div className="w-7 h-px bg-[#FF8A12]/50" />
                        </div>
                        <h2
                            className="text-[#FFD120] uppercase text-2xl sm:text-3xl md:text-4xl font-semibold"
                            style={{
                                fontFamily: "var(--font-akira), sans-serif",
                                textShadow: "0 0 20px rgba(255,209,32,0.22)",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            E-Sports
                        </h2>
                    </div>

                    {/* 2-col grid on mobile (last card centred), 5-col on desktop */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {ESPORTS_GAMES.map((game, i) => (
                            <div
                                key={game.id}
                                className={
                                    i === ESPORTS_GAMES.length - 1 && ESPORTS_GAMES.length % 2 !== 0
                                        ? "col-span-2 md:col-span-1 justify-self-center md:justify-self-stretch w-1/2 md:w-auto"
                                        : ""
                                }
                            >
                                <ESportsCard game={game} index={i} />
                            </div>
                        ))}
                    </div>
                </section>

                <SectionDivider />

                {/* ── Activities & Games ── */}
                <section className="w-full max-w-6xl">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-3 mb-2">
                            <div className="w-7 h-px bg-[#FF8A12]/50" />
                            <span className="text-[#FF8A12] text-[10px] uppercase tracking-[0.3em] font-semibold" style={{ fontFamily: "var(--font-quanta), sans-serif" }}>
                                Activities &amp; Games
                            </span>
                            <div className="w-7 h-px bg-[#FF8A12]/50" />
                        </div>
                        <h2
                            className="text-[#FFD120] uppercase text-2xl sm:text-3xl md:text-4xl font-semibold"
                            style={{
                                fontFamily: "var(--font-akira), sans-serif",
                                textShadow: "0 0 20px rgba(255,209,32,0.22)",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            What&apos;s On
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
                        {ENTERTAINMENT_EVENTS.map((item, i) => {
                            const isLast = i === ENTERTAINMENT_EVENTS.length - 1;
                            const odd2 = ENTERTAINMENT_EVENTS.length % 2 !== 0;
                            const odd3 = ENTERTAINMENT_EVENTS.length % 3 !== 0;
                            return (
                                <div
                                    key={item.id}
                                    className={[isLast
                                        ? [
                                            odd2 ? "sm:col-span-2 sm:justify-self-center sm:w-[calc(50%-0.75rem)]" : "",
                                            odd3 ? "xl:col-span-3 xl:justify-self-center xl:w-[calc(33.333%-1rem)]" : "",
                                        ].join(" ").trim()
                                        : "", "h-full"].join(" ").trim()}
                                >
                                    <EventCard item={item} index={i} />
                                </div>
                            );
                        })}
                    </div>
                </section>

            </main>

            <style>{`
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
}
