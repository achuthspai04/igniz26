"use client";

import { useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageLoader from "@/components/PageLoader";

const WORKSHOPS = [
    {
        id: 1,
        title: "HACK THE IGNIZ",
        image: "/events/technical%20events/cs-event-1.webp",
        day: "Day 2",
        time: "10:00am-4:00pm",
        venue: "Lab S",
        registrationFee: "₹140",
        prizePool: "₹400",
        description: "Web and Android App Hackathon Bug Bounty CTF Competitions",
        volunteersIncharge: "Adithan",
        mentorship: "Mentorship Available",
        contact: "-09 98093408855",
    },
    {
        id: 2,
        title: "PYTHE QUEST",
        image: "/events/technical%20events/cs-event-2.webp",
        day: "Day 2",
        time: "9:00am-4:00pm",
        venue: "Lab S",
        registrationFee: "₹140",
        prizePool: "₹400",
        description: "Web and Android App Hackathon Bug Bounty CTF Competitions",
        volunteersIncharge: "Rishi Robert",
        mentorship: "Mentorship Available",
        contact: "-01 7502908621",
    },
    {
        id: 3,
        title: "HOME DESIGNING IOT",
        image: "/events/technical%20events/cs-event-3.webp",
        day: "Day 2",
        time: "10:00am-4:00pm",
        venue: "CCP",
        registrationFee: "₹140",
        prizePool: "₹350",
        description: "Build Your Own Cloud at Home",
        volunteersIncharge: "Gayatri B Naman",
        mentorship: "Mentorship Available",
        contact: "-01 0748602540",
    },
    {
        id: 4,
        title: "CACHE QUEST",
        image: "/events/technical%20events/cs-event-4.webp",
        day: "Day 2",
        time: "10:00am-4:00pm",
        venue: "Lab D",
        registrationFee: "₹140",
        prizePool: "₹500",
        description: "Treasure hunt using GeoGaching",
        volunteersIncharge: "Hans Shivaon",
        mentorship: "Mentorship Available",
        contact: "-01 7310579710",
    },
    {
        id: 5,
        title: "INDIE WEB 101",
        image: "/events/technical%20events/cs-event-5.webp",
        day: "Day 2",
        time: "9:00am-4:00pm",
        venue: "Lab S",
        registrationFee: "₹140",
        prizePool: "₹350",
        description: "Build Your Place on the Internet",
        volunteersIncharge: "Ananya Wilkins",
        mentorship: "Mentorship Available",
        contact: "-01 8926052008",
    },
];

const PRELOAD_ASSETS = [
    ...WORKSHOPS.map((w) => w.image),
];

export default function WorkshopsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageLoader assets={PRELOAD_ASSETS}>
            <div className="relative w-full overflow-clip bg-[#2B0000] min-h-screen flex flex-col">
                <Navbar />

                {/* Main Content */}
                <main className="flex-1 flex flex-col items-center pt-32 md:pt-40 pb-16 px-4 sm:px-6 md:px-8 relative">
                    {/* Heading */}
                    <div className="relative z-10 text-center mb-12 md:mb-16">
                        <h1
                            className="font-akira-expanded text-3xl md:text-5xl lg:text-6xl font-semibold tracking-wide text-[#FFD120] uppercase"
                            style={{
                                textShadow: "0 0 20px rgba(255, 209, 32, 0.5)",
                                fontFamily: '"Akira Expanded", sans-serif',
                            }}
                        >
                            Technical Workshops
                        </h1>
                    </div>

                    {/* Department Section */}
                    <div className="relative z-10 w-full max-w-4xl mb-12 md:mb-16 flex items-center justify-center gap-4">
                        <div className="bg-[#FFD120] px-6 py-3 md:px-8 md:py-4 font-black text-[#1A0000] uppercase text-lg md:text-xl tracking-wide">
                            Department
                        </div>
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center">
                            <svg
                                className="w-8 h-8 md:w-10 md:h-10 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 10a3 3 0 100-6 3 3 0 000 6zm0 1.268a6.008 6.008 0 00-5.916 9.142H15.916A6.008 6.008 0 0010 11.268z" />
                            </svg>
                        </div>
                    </div>

                    {/* SVG filters defined once at top level */}
                    <svg className="absolute w-0 h-0" aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0 }}>
                        <defs>
                            <filter id="grainTitle" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
                                <feTurbulence type="fractalNoise" baseFrequency="2" numOctaves="3" seed="5" result="noise" />
                                <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
                                <feMorphology operator="erode" radius="0.2" />
                            </filter>
<filter id="grainDescription" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
    <feTurbulence type="fractalNoise" baseFrequency="2.5" numOctaves="3" seed="10" result="noise" />
     <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" /> 
<feMorphology operator="erode" radius="0.1" /> 

</filter>                   
                            
                        </defs>
                    </svg>


                    {/* Workshops Grid */}
                    <div className="relative z-10 w-full max-w-5xl space-y-8 md:space-y-10">
                        {WORKSHOPS.map((workshop) => (
                            <div
                                key={workshop.id}
                                className="relative w-full group hover:shadow-lg transition-shadow"
                                style={{
                                    WebkitMaskImage: 'url("/events/technical%20events/event-card.png")',
                                    maskImage: 'url("/events/technical%20events/event-card.png")',
                                    WebkitMaskSize: '100% 100%',
                                    maskSize: '100% 100%',
                                    WebkitMaskRepeat: 'no-repeat',
                                    maskRepeat: 'no-repeat',
                                    WebkitMaskPosition: 'center',
                                    maskPosition: 'center',
                                }}
                            >
                                {/* Ticket background */}
                                <div className="absolute inset-0">
                                    <Image
                                        src="/events/technical%20events/event-card.png"
                                        alt=""
                                        fill
                                        className="object-fill"
                                    />
                                </div>
                                
                                {/* Card content */}
                                <div className="relative z-10 flex flex-col md:flex-row items-stretch min-h-[180px] md:min-h-[220px]">
                                    {/* Image Section - Left with gradient blend */}
                                    <div className="relative w-full md:w-[32%] h-48 md:h-auto flex-shrink-0">
                                        <Image
                                            src={workshop.image}
                                            alt={workshop.title}
                                            fill
                                            className="object-cover grayscale"
                                        />
                                        {/* Smooth gradient blend effect on right edge */}
                                        <div 
                                            className="absolute inset-y-0 right-0 w-24 md:w-32"
                                            style={{
                                                background: 'linear-gradient(to right, transparent 0%, rgba(255, 209, 32, 0.3) 30%, rgba(255, 209, 32, 0.6) 50%, rgba(255, 209, 32, 0.85) 70%, #FFD120 100%)'
                                            }}
                                        />
                                    </div>

                                    {/* Title and Description - Center */}
                                    <div className="flex-1 p-6 md:p-8 md:pr-2 flex flex-col justify-start items-start min-h-[200px]">
                                        {/* Title */}
                                        <div className="mb-3 relative">
                                            <h3 
                                                className="uppercase"
                                                style={{
                                                    fontFamily: '"Akira Expanded", sans-serif',
                                                    fontWeight: 800,
                                                    fontSize: 'clamp(32px, 5vw, 63.57px)',
                                                    lineHeight: '0.71',
                                                    letterSpacing: '-0.08em',
                                                    filter: 'url(#grainTitle)',
                                                    color: '#1A0000',
                                                }}
                                            >
                                                {workshop.title}
                                            </h3>
                                            {/* Texture layer clipped to text shape */}
                                            <h3 
                                                className="uppercase absolute inset-0 pointer-events-none"
                                                aria-hidden="true"
                                                style={{
                                                    fontFamily: '"Akira Expanded", sans-serif',
                                                    fontWeight: 800,
                                                    fontSize: 'clamp(32px, 5vw, 63.57px)',
                                                    lineHeight: '0.71',
                                                    letterSpacing: '-0.08em',
                                                    backgroundImage: 'url("/events/technical%20events/text-texture.png")',
                                                    backgroundSize: '237px 355px',
                                                    backgroundRepeat: 'repeat',
                                                    WebkitBackgroundClip: 'text',
                                                    backgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    mixBlendMode: 'soft-light',
                                                    opacity: 0.4,
                                                }}
                                            >
                                                {workshop.title}
                                            </h3>
                                        </div>
                                        {/* Description */}
                                        <div className="relative">
                                            <p 
                                                style={{
                                                    fontFamily: '"Quanta Grotesk Pro", sans-serif',
                                                    fontWeight: 900,
                                                    fontSize: '18.5px',
                                                    lineHeight: '18.5px',
                                                    letterSpacing: '0.01em',
                                                    filter: 'url(#grainDescription)',
                                                    color: '#1A0000',
                                                }}
                                            >
                                                {workshop.description}
                                            </p>
                                            {/* Texture layer clipped to text shape */}
                                            <p 
                                                className="absolute inset-0 pointer-events-none"
                                                aria-hidden="true"
                                                style={{
                                                    fontFamily: '"Quanta Grotesk Pro", sans-serif',
                                                    fontWeight: 900,
                                                    fontSize: '18.5px',
                                                    lineHeight: '18.5px',
                                                    letterSpacing: '0.01em',
                                                    backgroundImage: 'url("/events/technical%20events/text-texture.png")',
                                                    backgroundSize: '237px 355px',
                                                    backgroundRepeat: 'repeat',
                                                    WebkitBackgroundClip: 'text',
                                                    backgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    mixBlendMode: 'soft-light',
                                                    opacity: 0.4,
                                                }}
                                            >
                                                {workshop.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Details Section - Right */}
                                    <div 
                                        className="flex-1 p-6 md:p-8 md:pl-6 flex flex-col justify-start min-h-[200px] text-[#1A0000] space-y-2"
                                        style={{
                                            fontFamily: '"Quanta Grotesk Pro", sans-serif',
                                            fontWeight: 900,
                                            fontSize: '20px',
                                            lineHeight: '18.5px',
                                            letterSpacing: '1%',
                                            verticalAlign: 'middle',
                                        }}
                                    >
                                        <div>
                                            <span className="block">Day: {workshop.day}</span>
                                            <span className="block">Time: {workshop.time}</span>
                                            <span className="block">Venue: {workshop.venue}</span>
                                        </div>

                                        <div>
                                            <span className="block">Reg.Fee: {workshop.registrationFee}</span>
                                            <span className="block">With PROSHOW: ₹400</span>
                                            <span className="block">Prize Pool: {workshop.prizePool}</span>
                                        </div>

                                        <div className="border-t-2 border-[#1A0000] pt-2 mt-2">
                                            <span className="block">Volunteer Incharge: {workshop.volunteersIncharge}</span>
                                            <span className="block">Contact No: {workshop.contact}</span>
                                        </div>
                                    </div>

                                    {/* Arrow Icon - Top Right */}
                                    <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-11 md:h-11 z-20">
                                        <Image
                                            src="/events/technical%20events/arrow-circle-right.png"
                                            alt="Details"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Register Button */}
                    <div className="relative z-10 mt-12 md:mt-16">
                        <button className="relative w-64 h-20 md:w-80 md:h-24 cursor-pointer hover:opacity-80 transition-opacity">
                            <Image
                                src="/events/eventpages/register.webp"
                                alt="Register"
                                fill
                                className="object-contain"
                            />
                        </button>
                    </div>
                </main>
            </div>
        </PageLoader>
    );
}
