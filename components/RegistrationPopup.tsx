"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import gsap from "gsap";

export type TicketType = "gold" | "silver" | "bronze";

export interface TicketOption {
    id: string;
    name: string;
    price: number;
    type: TicketType;
    description?: string;
    customColor?: string;
}

interface RegistrationPopupProps {
    isOpen: boolean;
    onClose: () => void;

    ticketOptions?: TicketOption[];
    eventName?: string;
}

const defaultTickets: TicketOption[] = [
    {
        id: "silver",
        name: "SILVER PASS",
        price: 800,
        type: "silver"
    },
    {
        id: "gold",
        name: "GOLDEN PASS",
        price: 800,
        type: "gold",
        description: "PRO SHOW INCLUDED WITH GOLDEN PASS\nGOLDEN PASS CAN BE ONLY PURCHASED ONCE"
    },
];

export default function RegistrationPopup({
    isOpen,
    onClose,
    ticketOptions = defaultTickets,
    eventName,
}: RegistrationPopupProps) {
    const [selectedTicket, setSelectedTicket] = useState<string>(() => {
        const goldTicket = ticketOptions.find(t => t.type === 'gold');
        return goldTicket?.id || ticketOptions[0]?.id || "";
    });
    const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
    const popupRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Initialize selected ticket when options change - prioritize golden pass
    useEffect(() => {
        if (ticketOptions.length > 0 && !ticketOptions.find(t => t.id === selectedTicket)) {
            const goldTicket = ticketOptions.find(t => t.type === 'gold');
            setSelectedTicket(goldTicket?.id || ticketOptions[0].id);
        }
    }, [ticketOptions, selectedTicket]);

    useEffect(() => {
        if (isOpen) {
            // Lock body scroll
            document.body.style.overflow = 'hidden';

            // Animation In
            if (overlayRef.current) gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, ease: "power2.out" });
            if (popupRef.current) {
                gsap.fromTo(
                    popupRef.current,
                    { scale: 0.8, opacity: 0, y: 50 },
                    {
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "back.out(1.5)"
                    }
                );
            }

            return () => {
                document.body.style.overflow = '';
            };
        }
    }, [isOpen]);

    const handleClose = () => {
        // Animation Out
        if (overlayRef.current) gsap.to(overlayRef.current, { opacity: 0, duration: 0.2 });
        if (popupRef.current) {
            gsap.to(popupRef.current, {
                scale: 0.8,
                opacity: 0,
                y: 20,
                duration: 0.2,
                onComplete: onClose
            });
        } else {
            onClose();
        }
    };

    const currentTicket = ticketOptions.find((t) => t.id === selectedTicket);


    if (!isOpen) return null;

    const popupContent = (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] flex items-start justify-center px-4 font-sans text-black overflow-y-auto pt-20 md:pt-24 pb-10"
        >
            {/* Overlay */}
            <div
                ref={overlayRef}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm opacity-0"
                onClick={handleClose}
            />

            {/* Popup Card */}
            <div
                ref={popupRef}
                className="relative w-full max-w-sm bg-[#FFD700] p-3 md:p-4 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] opacity-0"
            >
                {/* Background Texture with Opacity */}
                <div
                    className="absolute inset-0 rounded-[2rem] opacity-30 pointer-events-none"
                    style={{
                        backgroundImage: "url('/events/eventpages/popup/TEXTURE%20UP2%201.webp')",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                    }}
                />

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-5 right-5 z-20 text-black hover:scale-110 transition-transform bg-white/50 rounded-full p-1 border-2 border-black"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className="relative z-10">
                    {/* LOGO Header */}
                    <div className="text-center mb-1 relative flex flex-col items-center">
                        <div className="relative w-64 h-16 md:w-96 md:h-24">
                            <Image
                                src="/events/eventpages/popup/IGNIZ%201.webp"
                                alt="IGNIZ 2026"
                                fill
                                className="object-contain drop-shadow-md"
                            />
                        </div>

                        <div className="relative w-full h-20 md:h-24 mt-0">
                            <Image
                                src="/events/eventpages/popup/1.event title7 (1).webp"
                                alt="REGISTER"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-1 md:space-y-2 text-xs md:text-base font-bold uppercase tracking-tight">
                        <div>
                            <label className="block mb-0.5 md:mb-1 tracking-wide font-bold text-[#2B0000]">NAME :</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                className="w-full h-8 md:h-9 px-2 md:px-3 bg-white border-2 border-black rounded-lg focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-shadow uppercase font-sans font-bold text-sm md:text-base"
                            />
                        </div>
                        <div>
                            <label className="block mb-0.5 md:mb-1 tracking-wide font-bold text-[#2B0000]">PHONE NO :</label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full h-8 md:h-9 px-2 md:px-3 bg-white border-2 border-black rounded-lg focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-shadow uppercase font-sans font-bold text-sm md:text-base"
                            />
                        </div>
                        <div>
                            <label className="block mb-0.5 md:mb-1 tracking-wide font-bold text-[#2B0000]">EMAIL :</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                className="w-full h-8 md:h-9 px-2 md:px-3 bg-white border-2 border-black rounded-lg focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-shadow lowercase font-sans font-bold text-sm md:text-base"
                            />
                        </div>
                    </div>

                    {/* Ticket Selection Area */}
                    {ticketOptions.length > 0 && (
                        <div className="mt-4 flex flex-col gap-3 items-center">
                            {[...ticketOptions].sort((a, b) => {
                                const order = { gold: 2, silver: 1, bronze: 0 };
                                return (order[a.type as keyof typeof order] || 0) - (order[b.type as keyof typeof order] || 0);
                            }).map((ticket) => (
                                <div
                                    key={ticket.id}
                                    onClick={() => setSelectedTicket(ticket.id)}
                                    className={`group cursor-pointer flex flex-col items-center ${ticketOptions.length === 1 ? 'w-1/2' : 'w-full'}`}
                                >
                                    {/* Ticket Card */}
                                    <div className="relative w-full h-16 md:h-20 flex items-center justify-center transition-all duration-200 group-hover:-translate-y-1">
                                        <Image
                                            src={
                                                ticket.type === 'silver'
                                                    ? '/events/eventpages/popup/silver.webp'
                                                    : ticket.type === 'bronze'
                                                        ? '/events/eventpages/popup/bronze.webp'
                                                        : '/events/eventpages/popup/golden.webp'
                                            }
                                            alt={ticket.name}
                                            fill
                                            className={`object-contain ${ticket.type === 'gold' ? 'scale-115' : ticket.type === 'bronze' ? 'scale-90' : ''}`}
                                        />

                                    </div>

                                    {/* Radio Indicator */}
                                    <div className="mt-2 w-5 h-5 rounded-full border-2 border-black bg-white flex items-center justify-center">
                                        {selectedTicket === ticket.id && (
                                            <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}


                    {/* Disclaimer / Info */}
                    {/* Disclaimer / Info */}
                    <div className="mt-4 text-center px-4 space-y-1">
                        {[...ticketOptions]
                            .sort((a, b) => {
                                const order = { gold: 2, silver: 1, bronze: 0 };
                                return (order[a.type as keyof typeof order] || 0) - (order[b.type as keyof typeof order] || 0);
                            })
                            // Filter out tickets without descriptions
                            .filter(t => t.description)
                            .map((ticket) => (
                                <p key={ticket.id} className="text-[10px] md:text-xs font-bold text-black uppercase tracking-tight leading-tight">
                                    *{ticket.name}: {ticket.description}
                                </p>
                            ))
                        }


                    </div>

                    {/* Grand Total & Pay Button */}
                    <div className="mt-6 text-center">
                        <h4 className="font-akira-expanded text-base md:text-lg mb-4">
                            GRAND TOTAL : {currentTicket?.price || 0}
                        </h4>

                        <button
                            className="relative w-full max-w-[80%] mx-auto py-3 bg-[#310000] text-[#FFD700] rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-105 active:scale-95 transition-all overflow-hidden group"
                        >
                            {/* Texture on Button */}
                            <div className="absolute inset-0 opacity-30"
                                style={{ backgroundImage: "radial-gradient(black 1px, transparent 1px)", backgroundSize: "4px 4px" }}>
                            </div>

                            <span className="relative z-10 font-bold text-xl md:text-2xl tracking-widest drop-shadow-md uppercase">
                                PAY NOW
                            </span>
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );

    return createPortal(popupContent, document.body);
}
