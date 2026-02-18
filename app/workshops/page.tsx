"use client";

import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageLoader from "@/components/PageLoader";
import RegistrationPopup, { TicketOption } from "@/components/RegistrationPopup";
import "./workshops.css";

interface WorkshopEvent {
    id: number;
    title: string;
    image: string;
    type: string;
    day: string;
    time: string;
    venue: string;
    registrationFee: string;
    proshowFee: string;
    prizePool: string;
    description: string;
    volunteer: string;
    contact: string;
    conductedBy: string;
    goldenFee?: string;
}

const DEPARTMENT_EVENTS: Record<string, WorkshopEvent[]> = {
    "COMPUTER SCIENCE": [
        {
            id: 1, title: "HACK THE IGNIZ", image: "/events/technical events/cs/cs-hack-the-igniz.webp", type: "Workshop + CTF Match", day: "Day 1", time: "9AM - 3:30PM", venue: "PG Lab, AD Block", registrationFee: "₹199/- per head",
            proshowFee: "₹299",
            goldenFee: "₹499",
            prizePool: "₹3,000",
            description: "Web & Android App Hacking, Bug Bounty & CTF Competition",
            volunteer: "Adithan J Menon",
            contact: "9895340855",
            conductedBy: "Pranav Jayan, Janish Shaji",
        },
        {
            id: 2, title: "HOME LABBING 101", image: "/events/technical events/cs/cs-homelabbing.webp", type: "Workshop + Competition", day: "Day 1", time: "9AM - 3:30PM", venue: "CCF, AD", registrationFee: "₹199/- per head",
            proshowFee: "₹299",
            goldenFee: "₹499",
            prizePool: "₹2,000",
            description: "Build Your Own Cloud at Home",
            volunteer: "Gayatri B Menon",
            contact: "9746802616",
            conductedBy: "Jasil",
        },
        {
            id: 3, title: "CACHE QUEST", image: "/events/technical events/cs/cs-cache-quest.webp", type: "Competition", day: "Day 2", time: "9AM - 3:30PM", venue: "AD 104 (in and around campus)",
            registrationFee: "₹199/- per head",
            proshowFee: "₹299",
            goldenFee: "₹499",
            prizePool: "₹5,000",
            description: "Treasure hunt using OpenStreetMap",
            volunteer: "Hana Shireen",
            contact: "7510937076",
            conductedBy: "Aneeja",
        },
        {
            id: 4, title: "INDIE WEB 101", image: "/events/technical events/cs/cs-indie-web.webp", type: "Workshop + Competition", day: "Day 2", time: "9AM - 3:30PM", venue: "Lab 5, AD",
            registrationFee: "₹199/- per head",
            proshowFee: "₹299",
            goldenFee: "₹499",
            prizePool: "₹3,000",
            description: "Owning Your Place on the Internet",
            volunteer: "Anaya Wilson",
            contact: "8921922968",
            conductedBy: "Muneer",
        },
        {
            id: 5,
            title: "PYTHE QUEST: BUILD THE BACKEND",
            image: "/events/technical events/cs/cs-pythequest.webp",
            type: "Workshop + Hackathon",
            day: "Day 2",
            time: "9AM - 3:30PM",
            venue: "CCF, AD",
            registrationFee: "₹199/- per head",
            proshowFee: "₹299",
            goldenFee: "₹499",
            prizePool: "₹3,000",
            description: "Gamified way to build and understand backend systems",
            volunteer: "Rincy Robert",
            contact: "7902968621",
            conductedBy: "Navaneeth Raj",
        },
    ],
    "ARTIFICIAL INTELLIGENCE & DATA SCIENCE": [
        {
            id: 1,
            title: "Build a No-code AI Agent",
            image: "/events/technical events/ai-ds/Build-no-code-ai-agent.webp",
            type: "Workshop",
            day: "Day 1",
            time: "9:30AM - 12:30PM",
            venue: "LAB 5 AD",
            registrationFee: "₹199 per person",
            proshowFee: "₹299",
            goldenFee: "₹499",
            prizePool: "-",
            description: "Hands-on session to build an agentic AI using N8N's workflow",
            volunteer: "Alan, K Gopika Gopalakrishnan",
            contact: "90742 51149 / 8697942839",
            conductedBy: "Pranav Krishna Vadhyar",
        },
        {
            id: 2,
            title: "Micro SaaS product -building",
            image: "/events/technical events/ai-ds/macro-saas.webp",
            type: "Workshop",
            day: "Day 1",
            time: "9:30AM - 12:30PM",
            venue: "CCF Slot 3 - AD 203",
            registrationFee: "₹199 per person",
            proshowFee: "₹299",
            goldenFee: "₹499",
            prizePool: "-",
            description: "Finding a real world problem and building a micro saas product around it",
            volunteer: "Ilham Nadhir, Arfan MT",
            contact: "73568 31775 / 89210 78365",
            conductedBy: "Habeeb & Achuth",
        },
        {
            id: 3,
            title: "Web to Wallet",
            image: "/events/technical events/ai-ds/freelancing.webp",
            type: "Workshop",
            day: "Day 1",
            time: "10:30AM - 1:30PM",
            venue: "Lab 6 - AD 505",
            registrationFee: "₹199 per person",
            proshowFee: "₹299",
            goldenFee: "₹499",
            prizePool: "-",
            description: "Hands-on session on wordpress",
            volunteer: "Devika AD, Thoufeer M A",
            contact: "81297 06707 / 9446115254",
            conductedBy: "Vinayak J Mohan",
        },
        {
            id: 4,
            title: "IEEE Cryptiq",
            image: "/events/technical events/ai-ds/IEEE-Cryptiq.webp",
            type: "Competition",
            day: "Day 2",
            time: "9:30AM - 12:30PM",
            venue: "Lab 6 - AD 505",
            registrationFee: "Team of 3: IEEE ₹100 / Non-IEEE ₹199",
            proshowFee: "-",
            prizePool: "₹10,000",
            description: "State level debugging competition",
            volunteer: "Alan, Anurag",
            contact: "90742 51149 / 7736013480",
            conductedBy: "IEEE Team",
        },
        {
            id: 5,
            title: "Upside Downed - 6 hrs: 1 Escape Plan",
            image: "/events/technical events/ai-ds/upside-down.webp",
            type: "Competition",
            day: "Day 2",
            time: "9:30AM - 3:30PM",
            venue: "PG Lab - AD 411",
            registrationFee: "Solo: ₹199 / Team of 2: ₹175pp / Team of 3: ₹150pp",
            proshowFee: "-",
            prizePool: "1st ₹3,000 / 2nd ₹2,000 / 3rd ₹3,000",
            description: "A 6 hour Stranger Things themed makeathon to help Eleven escape",
            volunteer: "Ilham Nadhir, Adithyan K",
            contact: "73568 31775 / 95620 99491",
            conductedBy: "Aksa Rose, Fahad, Arjun",
        },
        {
            id: 6,
            title: "FigMatch",
            image: "/events/technical events/ai-ds/Figmatch.webp",
            type: "Workshop",
            day: "Day 2",
            time: "12:30PM - 3:30PM",
            venue: "CCF Slot 3 - AD 203",
            registrationFee: "₹199 per person",
            proshowFee: "₹299",
            goldenFee: "₹499",
            prizePool: "-",
            description: "Hands-on Figma workshop to build interactive swipe-style matching prototypes",
            volunteer: "Devika AD, Fatima Sana Issihac",
            contact: "8129706707 / 6282832763",
            conductedBy: "Suryanarayan K V",
        },
    ],
    "CIVIL": [
        {
            id: 1,
            title: "SPATIA",
            image: "/events/technical events/civil/spacia.webp",
            type: "Workshop",
            day: "Day 1",
            time: "9AM - 12PM",
            venue: "AC II Seminar Hall",
            registrationFee: "₹199 per person",
            proshowFee: "₹299",
            goldenFee: "₹499",
            prizePool: "-",
            description: "AI based interior design workshop; Introduction of interior designing",
            volunteer: "Siddharth J Nair",
            contact: "8075064063",
            conductedBy: "Ashwini ES",
        },
        {
            id: 2,
            title: "GRID GLADIATORS",
            image: "/events/technical events/civil/grid.webp",
            type: "Competition",
            day: "Day 1",
            time: "1PM - 3PM",
            venue: "AC II Software Lab",
            registrationFee: "₹100 per person / ₹199 per team (2)",
            proshowFee: "-",
            prizePool: "₹1,500",
            description: "2D drawing in AutoCAD",
            volunteer: "Angel Mariya Roy",
            contact: "9188807515",
            conductedBy: "-",
        },
        {
            id: 3,
            title: "THE MAPPING MYSTERY",
            image: "/events/technical events/civil/the-mapping.webp",
            type: "Competition",
            day: "Day 2",
            time: "9AM - 12PM",
            venue: "Outdoor",
            registrationFee: "₹199 per team (3-4 persons)",
            proshowFee: "-",
            prizePool: "₹2,000",
            description: "Treasure Hunt using surveying equipments",
            volunteer: "Fathima Salim",
            contact: "9495654159",
            conductedBy: "-",
        },
        {
            id: 4,
            title: "GAMESPEAR",
            image: "/events/technical events/civil/game.webp",
            type: "Competition",
            day: "Day 2",
            time: "10AM - 3PM",
            venue: "Outdoor",
            registrationFee: "₹49 per head",
            proshowFee: "-",
            prizePool: "₹1,500",
            description: "A set of games related to civil engineering",
            volunteer: "Arjun V S",
            contact: "9496983279",
            conductedBy: "-",
        },
    ],
    "MECHANICAL": [
        {
            id: 1,
            title: "TECHMAGHI",
            image: "/events/technical events/mech/EV-design.webp",
            type: "Workshop",
            day: "Day 1",
            time: "9:30AM - 3:30PM",
            venue: "AC102",
            registrationFee: "₹199/- per head",
            proshowFee: "₹299",
            goldenFee: "₹499",
            prizePool: "-",
            description: "Electric vehicle design using virtual reality",
            volunteer: "Muhamed Minhaj Fazal, Govind Padmakumar",
            contact: "9383497169 / 8590357034",
            conductedBy: "Techmagii",
        },
        {
            id: 2,
            title: "UPCYCLING OF TRASH",
            image: "/events/technical events/mech/upcycling.webp",
            type: "Competition",
            day: "Day 2",
            time: "9:30AM - 1PM",
            venue: "Basic Mech Workshop",
            registrationFee: "₹199/- per team",
            proshowFee: "-",
            prizePool: "₹4,000",
            description: "Upcycling of trash: Transform trash into treasure and show us your unique take on sustainability",
            volunteer: "Abel Charly, Gokula Krishnan",
            contact: "8078798472 / 8606007926",
            conductedBy: "Gautham P Utham",
        },
        {
            id: 3,
            title: "TORQUE TAILS",
            image: "/events/technical events/mech/torch-tails.webp",
            type: "Competition",
            day: "Day 2",
            time: "9:30AM - 1PM",
            venue: "AC101",
            registrationFee: "₹199/- per team",
            proshowFee: "-",
            prizePool: "₹2,500",
            description: "Reel Making Competition organized to showcase creativity and technical insight within a short video",
            volunteer: "Al Shafan",
            contact: "8606216861",
            conductedBy: "Faiz, Arjun",
        },
    ],
    "AUTOMOBILE": [
        {
            id: 1,
            title: "ZERO TO HERO",
            image: "/events/technical events/auto/zero.webp",
            type: "Workshop",
            day: "Day 1",
            time: "9:30AM - 1PM",
            venue: "Behind bike parking",
            registrationFee: "₹399/-",
            proshowFee: "₹449",
            goldenFee: "₹499",
            prizePool: "-",
            description: "Off-road Training Workshop",
            volunteer: "Sahad Shihab",
            contact: "9526775198",
            conductedBy: "Albin Vargeese, Sam Kalarikkal",
        },
        {
            id: 2,
            title: "SILENT THUNDER",
            image: "/events/technical events/auto/silent.webp",
            type: "Workshop",
            day: "Day 2",
            time: "9:30AM - 1PM",
            venue: "Automobile Lab",
            registrationFee: "₹199/-",
            proshowFee: "₹299",
            goldenFee: "₹449",
            prizePool: "-",
            description: "Hands on Electrical Vehicle Workshop",
            volunteer: "Clement GN",
            contact: "9447815764",
            conductedBy: "Clement GN",
        },
    ],
    "ELECTRICAL": [
        {
            id: 1,
            title: "Quiz Competition (in collab with Energy club)",
            image: "/events/technical events/electrical/quiz.webp",
            type: "Competition",
            day: "Day 1",
            time: "1:30PM - 3:30PM",
            venue: "ACI 101",
            registrationFee: "₹199",
            proshowFee: "-",
            prizePool: "₹4,000",
            description: "Quiz Competition in collaboration with Energy Club",
            volunteer: "Ashfiya Saleem",
            contact: "8891249253",
            conductedBy: "Ashfiya Saleem",
        },
        {
            id: 2,
            title: "Workshop on LED bulb Assembling",
            image: "/events/technical events/electrical/LED.webp",
            type: "Workshop",
            day: "Day 1",
            time: "9:30AM - 12PM",
            venue: "AC-11 302",
            registrationFee: "₹199",
            proshowFee: "₹299",
            goldenFee: "₹499",
            prizePool: "-",
            description: "LED Bulb Assembling and troubleshooting hands-on workshop",
            volunteer: "Keerthana P Menon",
            contact: "83049 34335",
            conductedBy: "Keerthana P Menon",
        },
        {
            id: 3,
            title: "Electrical projects expo",
            image: "/events/technical events/electrical/electrical.webp",
            type: "Expo",
            day: "Day 1 & 2",
            time: "9AM - 3:45PM",
            venue: "AC- I 06",
            registrationFee: "Free",
            proshowFee: "-",
            prizePool: "-",
            description: "Electrical projects expo showcasing innovative projects",
            volunteer: "Jerin Jose",
            contact: "7994680149",
            conductedBy: "Jerrin",
        },
        {
            id: 4,
            title: "RoboCraft (EEE & ECE)",
            image: "/events/technical events/electrical/robo-craft.webp",
            type: "Competition",
            day: "Day 2",
            time: "10AM - 3PM",
            venue: "Dig/Micro Lab & Outdoor",
            registrationFee: "₹299 (Team of 4 max)",
            proshowFee: "-",
            prizePool: "₹10,000",
            description: "Line follower robot",
            volunteer: "Sabarinath S",
            contact: "9188571492",
            conductedBy: "Sabarinath S",
        },
    ],
    "ELECTRONICS": [
        {
            id: 1,
            title: "Inside ROS: How Robots Think",
            image: "/events/technical events/electronics/inside.webp",
            type: "Workshop",
            day: "Day 1",
            time: "9AM - 3PM",
            venue: "AC1 Lab 1",
            registrationFee: "₹199",
            proshowFee: "₹299",
            goldenFee: "₹499",
            prizePool: "-",
            description: "Workshop with hands-on session on Robot Operating System",
            volunteer: "Adarsh Menon, Sougandh",
            contact: "6235284128 / 8547799640",
            conductedBy: "IHub Robotics",
        },
        {
            id: 2,
            title: "Raspberry Pi: Learn, Build, Deploy",
            image: "/events/technical events/electronics/rasberry.webp",
            type: "Workshop",
            day: "Day 2",
            time: "9AM - 11AM",
            venue: "AC 1 Lab 1",
            registrationFee: "₹199",
            proshowFee: "₹299",
            goldenFee: "₹499",
            prizePool: "-",
            description: "Raspberry pi board based workshop",
            volunteer: "Adithyan K, Roshan",
            contact: "9562099491 / 9846027892",
            conductedBy: "Dr Vinoj P G",
        },
        {
            id: 3,
            title: "BlitzDenken",
            image: "/events/technical events/electronics/blitz.webp",
            type: "Hackathon",
            day: "Day 1",
            time: "11AM - 3PM",
            venue: "AC1 Basic Workshop / Digital Lab",
            registrationFee: "₹199 (Max 4 participants)",
            proshowFee: "-",
            prizePool: "₹5,000",
            description: "Mini hackathon — bring components and approach a shared problem with innovative solutions",
            volunteer: "Abiah Jahan, Joann",
            contact: "8089812119 / 9539409054",
            conductedBy: "-",
        },
        {
            id: 4,
            title: "RoboCraft (ECE & EEE)",
            image: "/events/technical events/electronics/robo.webp",
            type: "Competition",
            day: "Day 2",
            time: "9AM - 3PM",
            venue: "Outdoor",
            registrationFee: "₹299 (Team of 4 max)",
            proshowFee: "-",
            prizePool: "₹10,000",
            description: "Line follower robot",
            volunteer: "Abhay",
            contact: "8289914620",
            conductedBy: "-",
        },
    ],
    "OTHERS": [
        {
            id: 1,
            title: "IGNIZ DEBATE",
            image: "/events/technical events/Others/debate.webp",
            type: "Competition",
            day: "Day 2",
            time: "9AM - 1PM",
            venue: "Conference Hall",
            registrationFee: "₹300/-",
            proshowFee: "-",
            prizePool: "₹8,000\n(1st ₹5,000 / 2nd ₹2,000)",
            description: "IGNIZ Debate",
            volunteer: "Aksa Santha Ronio",
            contact: "8848462375",
            conductedBy: "OrSO",
        },
        {
            id: 2,
            title: "IGNIZ MUN ",
            image: "/events/technical events/Others/MUN.webp",
            type: "Competition",
            day: "Day 1",
            time: "9AM - 3:30PM",
            venue: "Conference Hall",
            registrationFee: "₹300/-",
            proshowFee: "₹400",
            goldenFee: "₹500",
            prizePool: "₹7,000",
            description: "IGNIZ MUN — An SSETMUN Initiative",
            volunteer: "Aksa Santha Ronio",
            contact: "8848462375",
            conductedBy: "OrSo",
        },
        {
            id: 3,
            title: "Brains Behind the Brand: Choosing Your Startup Squad",
            image: "/events/technical events/Others/brains.webp",
            type: "Workshop",
            day: "Day 1",
            time: "9:30AM - 12PM",
            venue: "AD 208",
            registrationFee: "₹199",
            proshowFee: "₹299",
            goldenFee: "₹499",
            prizePool: "-",
            description: "Choosing Your Startup Squad — by IEDC",
            volunteer: "Nakul",
            contact: "9207613433",
            conductedBy: "Aryan C Rajan (Former CEO IEDC, Founder at Tinfe)",
        },
        {
            id: 4,
            title: "3D Workshop",
            image: "/events/technical events/Others/3d.webp",
            type: "Workshop",
            day: "Day 2",
            time: "9:30AM - 12:30PM",
            venue: "FAB LAB",
            registrationFee: "₹199",
            proshowFee: "₹299",
            goldenFee: "₹499",
            prizePool: "-",
            description: "3D Workshop by IEDC",
            volunteer: "Devasurya",
            contact: "-",
            conductedBy: "Anoob Sir",
        },
        {
            id: 5,
            title: "Arcade",
            image: "/events/technical events/Others/arcade.webp",
            type: "Event",
            day: "Day 1 & 2",
            time: "9:30AM - 3:30PM",
            venue: "AD 04 & AD 05",
            registrationFee: "₹150",
            proshowFee: "-",
            prizePool: "-",
            description: "AETHERA Arcade — hands-on workshop by students",
            volunteer: "Salma",
            contact: "8089440128",
            conductedBy: "AETHERA",
        },
        {
            id: 6,
            title: "CRISIS MANAGEMENT",
            image: "/events/technical events/Others/crisis.webp",
            type: "Competition",
            day: "Day 1",
            time: "10AM - 11:30AM",
            venue: "AD 102",
            registrationFee: "₹199",
            proshowFee: "-",
            prizePool: "₹1,000",
            description: "Crisis Management competition",
            volunteer: "Avinash Cinesh",
            contact: "8075900386",
            conductedBy: "YUVA",
        },
    ],
};

const DEPARTMENTS = Object.keys(DEPARTMENT_EVENTS);

const PRELOAD_ASSETS = [
    "/events/technical%20events/event-card.png",
    "/events/technical%20events/dropdown.svg",
];

export default function WorkshopsPage() {
    const [selectedDept, setSelectedDept] = useState("COMPUTER SCIENCE");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
    const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());

    const [showPopup, setShowPopup] = useState(false);
    const [selectedWorkshop, setSelectedWorkshop] = useState<WorkshopEvent | null>(null);

    const parseFee = (feeStr: string): number => {
        // Handle "Free" or "-"
        if (!feeStr || feeStr.toLowerCase().includes("free") || feeStr === "-") return 0;

        // Extract first number found
        const match = feeStr.match(/₹?(\d+,?\d*)/);
        let amount = match ? parseInt(match[1].replace(/,/g, ''), 10) : 0;



        if (feeStr.toLowerCase().includes("per person") || feeStr.toLowerCase().includes("per head") || feeStr.toLowerCase().includes("solo")) {

            const perPersonMatch = feeStr.match(/₹?(\d+,?\d*)\s*(?:\/-)?\s*(?:per person|per head|solo)/i);
            if (perPersonMatch) {
                amount = parseInt(perPersonMatch[1].replace(/,/g, ''), 10);
            }
        } else if (feeStr.toLowerCase().includes("team")) {

        }

        return amount;
    };

    const getTicketOptions = (workshop: WorkshopEvent): TicketOption[] => {
        const options: TicketOption[] = [];

        // Bronze Pass - Workshop Only
        const baseFee = parseFee(workshop.registrationFee);



        if (baseFee > 0 || workshop.registrationFee.toLowerCase().includes("free")) {
            options.push({
                id: "bronze",
                name: "BRONZE PASS",
                price: baseFee,
                type: "bronze",
                description: "Workshop Only"
            });
        }

        const silverFee = parseFee(workshop.proshowFee);
        if (silverFee > 0 && workshop.proshowFee !== "-") {
            options.push({
                id: "silver",
                name: "SILVER PASS",
                price: silverFee,
                type: "silver",
                description: "Workshop + Respective Day Proshow"
            });


            const goldPrice = workshop.goldenFee ? parseFee(workshop.goldenFee) : silverFee + 250;
            options.push({
                id: "gold",
                name: "GOLDEN PASS",
                price: goldPrice,
                type: "gold",
                description: "Workshop + 2 Days Proshow"
            });
        }

        return options;
    };

    const activeEvents = useMemo(() => DEPARTMENT_EVENTS[selectedDept] || [], [selectedDept]);

    useEffect(() => {
        setVisibleCards(new Set());
    }, [selectedDept]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute("data-card-id");
                        if (id) {
                            setVisibleCards((prev) => new Set(prev).add(id));
                        }
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        );

        cardRefs.current.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [activeEvents]);

    const setCardRef = useCallback((el: HTMLDivElement | null, id: string) => {
        if (el) cardRefs.current.set(id, el);
        else cardRefs.current.delete(id);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageLoader assets={PRELOAD_ASSETS}>
            {/* Card animation styles */}
            {/* Card animation styles - moved to workshops.css */}
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

                    {/* Department Dropdown Section */}
                    <div className="relative z-50 w-full max-w-4xl mb-12 md:mb-16 flex justify-center">
                        <div className="relative w-full max-w-[500px]"> {/* fixed consistent width */}

                            {/* Main Button */}
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="relative w-full h-[76px] px-5 flex items-center justify-center text-center cursor-pointer overflow-hidden box-border"
                                style={{
                                    backgroundImage: 'url("/events/technical%20events/dropdown.svg")',
                                    backgroundSize: "100% 100%",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                }}
                            >
                                <span
                                    className="relative z-10 block w-full min-w-0 text-[#3B0000] uppercase text-center pr-8"
                                    style={{
                                        fontFamily: '"Akira Expanded", sans-serif',
                                        fontWeight: 900,
                                        fontSize: "clamp(14px, 1.6vw, 20px)",
                                        lineHeight: "1.05",
                                        letterSpacing: "-0.04em",
                                        whiteSpace: "normal",
                                        overflow: "hidden",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                    }}
                                >
                                    {selectedDept}
                                </span>
                                {/* Down arrow */}
                                <svg
                                    className={`absolute right-6 md:right-8 w-5 h-5 md:w-6 md:h-6 dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#3B0000"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>

                            {/* Dropdown */}
                            {isDropdownOpen && (
                                <div
                                    className="absolute top-full left-0 w-full flex flex-col dropdown-menu"
                                    style={{ marginTop: "-12px" }}
                                >
                                    {DEPARTMENTS.map((dept, index) => (
                                        <button
                                            key={dept}
                                            onClick={() => {
                                                setSelectedDept(dept);
                                                setIsDropdownOpen(false);
                                            }}
                                            className="relative w-full h-[76px] px-5 flex items-center justify-center text-center cursor-pointer overflow-hidden box-border dropdown-item"
                                            style={{
                                                zIndex: DEPARTMENTS.length - index,
                                                marginTop: index === 0 ? 0 : "-12px",
                                                backgroundImage:
                                                    'url("/events/technical%20events/dropdown.svg")',
                                                backgroundSize: "100% 100%",
                                                backgroundRepeat: "no-repeat",
                                                backgroundPosition: "center",
                                                animationDelay: `${index * 40}ms`,
                                            }}
                                        >
                                            <span
                                                className="relative z-10 block w-full min-w-0 text-[#3B0000] uppercase text-center"
                                                style={{
                                                    fontFamily: '"Akira Expanded", sans-serif',
                                                    fontWeight: 900,
                                                    fontSize: "clamp(14px, 1.6vw, 20px)",
                                                    lineHeight: "1.05",
                                                    letterSpacing: "-0.04em",
                                                    whiteSpace: "normal",
                                                    overflow: "hidden",
                                                    display: "-webkit-box",
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: "vertical",
                                                }}
                                            >
                                                {dept}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            )}
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
                    <div className="relative z-10 w-full max-w-7xl space-y-8 md:space-y-10">
                        {activeEvents.map((workshop, index) => {
                            const cardId = `${selectedDept}-${workshop.id}`;
                            const isVisible = visibleCards.has(cardId);
                            return (
                                <div
                                    key={cardId}
                                    ref={(el) => setCardRef(el, cardId)}
                                    data-card-id={cardId}
                                    className={`card-animate ${isVisible ? 'card-visible' : ''}`}
                                    style={{
                                        transitionDelay: isVisible ? `${index * 120}ms` : '0ms',
                                    }}
                                >
                                    <div
                                        className="relative w-full group event-card-wrapper"
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
                                            <div className="relative w-full md:w-[34%] h-48 md:h-auto flex-shrink-0">
                                                <Image
                                                    src={workshop.image}
                                                    alt={workshop.title}
                                                    fill
                                                    className="object-cover grayscale card-image"
                                                />
                                                {/* Smooth gradient blend — extends past image edge to hide seam */}
                                                <div
                                                    className="absolute inset-y-0 w-56 md:w-72 z-10"
                                                    style={{
                                                        right: '-2rem',
                                                        background: 'linear-gradient(to right, transparent 0%, rgba(255, 209, 32, 0.15) 15%, rgba(255, 209, 32, 0.4) 30%, rgba(255, 209, 32, 0.65) 45%, rgba(255, 209, 32, 0.85) 60%, #FFD120 75%, #FFD120 100%)'
                                                    }}
                                                />
                                            </div>

                                            {/* Title and Description - Center */}
                                            <div className="w-full md:w-1/3 flex-shrink-0 p-6 md:p-8 md:pr-2 flex flex-col justify-start items-start min-h-[200px]">
                                                {/* Title */}
                                                <div className="mb-3 relative">
                                                    <h3
                                                        className="uppercase"
                                                        style={{
                                                            fontFamily: '"Akira Expanded", sans-serif',
                                                            fontWeight: 800,
                                                            fontSize: 'clamp(22px, 5vw, 63.57px)',
                                                            lineHeight: '0.95',
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
                                                            fontSize: 'clamp(22px, 5vw, 63.57px)',
                                                            lineHeight: '0.95',
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
                                                className="flex-1 p-6 md:p-8 md:pl-6 flex flex-col justify-start min-h-[200px] text-[#1A0000] space-y-4"
                                                style={{
                                                    fontFamily: '"Quanta Grotesk Pro", sans-serif',
                                                    fontWeight: 900,
                                                    fontSize: '20px',
                                                    lineHeight: '1.4',
                                                    letterSpacing: '1%',
                                                    verticalAlign: 'middle',
                                                }}
                                            >
                                                <div>
                                                    <span className="block text-xs uppercase font-bold tracking-wider opacity-70 mb-1">{workshop.type}</span>
                                                    <span className="block">Day: {workshop.day}</span>
                                                    <span className="block">Time: {workshop.time}</span>
                                                    <span className="block">Venue: {workshop.venue}</span>
                                                </div>

                                                <div>
                                                    <span className="block">Reg.Fee: {workshop.registrationFee}</span>
                                                    {workshop.proshowFee !== "-" && (
                                                        <span className="block">With PROSHOW: {workshop.proshowFee}</span>
                                                    )}
                                                    {workshop.prizePool !== "-" && (
                                                        <span className="block whitespace-pre-line">Prize Pool: {workshop.prizePool}</span>
                                                    )}
                                                </div>

                                                <div className="border-t-2 border-[#1A0000] pt-2 mt-2">
                                                    <span className="block">Volunteer: {workshop.volunteer}</span>
                                                    <span className="block">Contact: {workshop.contact}</span>
                                                    {workshop.conductedBy !== "-" && (
                                                        <span className="block">Conducted By: {workshop.conductedBy}</span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Arrow Icon - Top Right - Clickable */}
                                            <button
                                                onClick={() => {
                                                    setSelectedWorkshop(workshop);
                                                    setShowPopup(true);
                                                }}
                                                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-11 md:h-11 z-20 card-arrow cursor-pointer hover:scale-110 transition-transform"
                                            >
                                                <Image
                                                    src="/events/technical%20events/arrow-circle-right.png"
                                                    alt="Details"
                                                    fill
                                                    className="object-contain"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
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

                {selectedWorkshop && (
                    <RegistrationPopup
                        isOpen={showPopup}
                        onClose={() => setShowPopup(false)}
                        eventName={selectedWorkshop.title}
                        ticketOptions={getTicketOptions(selectedWorkshop)}
                    />
                )}
            </div>
        </PageLoader>
    );
}
