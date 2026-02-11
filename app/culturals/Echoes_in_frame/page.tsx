"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationPopup, { TicketOption } from "@/components/RegistrationPopup";

export default function EchoesInFrameRegisterPage() {
    const [isOpen, setIsOpen] = useState(false);

    const ticketOptions: TicketOption[] = [
        {
            id: "standard",
            name: "ECHOES IN FRAME PASS",
            price: 200,
            type: "silver",
            description: "ACCESS TO ECHOES IN FRAME COMPETITION\nREGISTRATION: 200 PER TEAM"
        },
        {
            id: "premium",
            name: "GOLDEN PASS",
            price: 800,
            type: "gold",
            description: "PRO SHOW INCLUDED WITH GOLDEN PASS\nGOLDEN PASS CAN BE ONLY PURCHASED ONCE"
        }
    ];
    return (
        <div className="relative w-full overflow-x-hidden bg-[#2B0000] min-h-screen flex flex-col font-sans text-white">
            {/* Texture Overlay */}
            <div
                className="fixed inset-0 z-0 opacity-30 pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: "url('/images/texture_updated.svg')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center top"
                }}
            ></div>

            <Navbar />
            <br />
            <br />
            <br />
            <main className="relative z-10 flex-1 flex flex-col items-center px-4 pt-20 md:pt-32 pb-12 md:pb-20 max-w-7xl mx-auto w-full">
                {/* Hero Section */}
                <div className="w-full mb-12 md:mb-20">
                    {/* Heading */}
                    <h1
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-akira-expanded text-[#FFD120] leading-tight mb-6 md:mb-8 break-words"
                        style={{
                            maskImage: "url('/images/navbartexture.png')",
                            WebkitMaskImage: "url('/images/navbartexture.png')",
                            maskMode: "luminance",
                            maskSize: "cover",
                            WebkitMaskSize: "cover",
                            maskRepeat: "no-repeat",
                            WebkitMaskRepeat: "no-repeat",
                            maskPosition: "center",
                            WebkitMaskPosition: "center"
                        }}
                    >
                        ECHOES IN FRAMES
                    </h1>

                    {/* Mobile: Image appears right after heading */}
                    <div className="lg:hidden relative flex items-center justify-center mb-8">
                        <div className="relative w-[250px] h-[330px] sm:w-[300px] sm:h-[400px]">
                            <Image
                                src="/events/eventpages/4.webp"
                                alt="Echoes in Frames"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        <div className="space-y-6 md:space-y-8 lg:col-span-7">
                            <div className="w-full">
                                <Image
                                    src="/events/eventpages/4-text.webp"
                                    alt="Competition Description"
                                    width={800}
                                    height={300}
                                    className="w-full h-auto"
                                />
                            </div>

                            <div className="space-y-1 text-base sm:text-lg md:text-xl lg:text-2xl font-akira-expanded text-[#FFD120] uppercase">
                                <p>DATE : </p>
                                <p>STAGE:Online</p>
                                <p>REG FEES : 200 per team</p>
                                <p>PRIZE POOL : 3000</p>
                            </div>

                            <div className="pt-4">
                                <button
                                    onClick={() => setIsOpen(true)}
                                    className="inline-block hover:scale-105 transition-transform cursor-pointer bg-transparent border-none p-0 focus:outline-none"
                                >
                                    <Image
                                        src="/events/eventpages/register.webp"
                                        alt="Register"
                                        width={300}
                                        height={100}
                                        className="w-auto h-12 sm:h-14 md:h-16 lg:h-20"
                                    />
                                </button>
                            </div>
                        </div>

                        {/* Desktop: Image on the right */}
                        <div className="hidden lg:flex relative items-center justify-center lg:col-span-5">
                            <div className="relative w-[350px] h-[470px] xl:w-[450px] xl:h-[600px]">
                                <Image
                                    src="/events/eventpages/4.webp"
                                    alt="Echoes in Frames"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rules Section */}
                <section className="w-full mb-16">
                    <h2 className="text-3xl font-akira-expanded text-[#FFD120] mb-6 tracking-wide">RULES</h2>
                    <ul className="list-none space-y-2 text-sm md:text-base font-bold uppercase tracking-tight text-white/90">
                        <li>1. Individual or team participation allowed</li>
                        <li>2. Video duration as specified by organizers</li>
                        <li>3. Content must be original</li>
                        <li>4. Plagiarism will lead to disqualification</li>
                        <li>5. Date of submission and theme will be announce later</li>
                    </ul>
                </section>

                {/* General Policy Section */}
                <section className="w-full mb-16">
                    <h2 className="text-3xl font-akira-expanded text-[#FFD120] mb-6 tracking-wide">GENERAL POLICY</h2>
                    <div className="space-y-4 text-xs md:text-sm font-bold uppercase tracking-tight text-white/90">
                        <div className="flex gap-2">
                            <span>1.</span>
                            <p>Eligibility:<br />All participants must be currently enrolled students of the institution or invited colleges, as applicable.<br />Valid college ID must be produced on demand.</p>
                        </div>
                        <div className="flex gap-2">
                            <span>2.</span>
                            <p>Registration:<br />Participants must complete registration within the specified time.<br />Late entries will not be entertained under any circumstances.</p>
                        </div>
                        <div className="flex gap-2">
                            <span>3.</span>
                            <p>Reporting Time:<br />Participants must report at least 1 hour before the scheduled start of the event.<br />Failure to report on time may lead to disqualification.</p>
                        </div>
                        <div className="flex gap-2">
                            <span>4.</span>
                            <p>Discipline & Conduct:<br />Participants are expected to maintain discipline, respect organizers, judges, and fellow participants.<br />Any form of misbehavior, misconduct, or argument with officials will result in immediate disqualification.</p>
                        </div>
                        <div className="flex gap-2">
                            <span>5.</span>
                            <p>Dress Code:<br />Costumes and attire should be decent and appropriate to the nature of the event.<br />Any attire or content considered offensive or inappropriate will not be permitted.</p>
                        </div>
                        <div className="flex gap-2">
                            <span>6.</span>
                            <p>Use of Props & Materials:<br />Props are allowed only if mentioned in the event rules and must be arranged and managed by the participants themselves.<br />Dangerous, sharp, fire-based, or illegal items are strictly prohibited.</p>
                        </div>
                        <div className="flex gap-2">
                            <span>7.</span>
                            <p>Music & Technical Requirements:<br />Pre-recorded music, if required, must be submitted in the specified format and time.<br />Organizers are not responsible for technical issues arising from late or incorrect submissions.</p>
                        </div>
                        <div className="flex gap-2">
                            <span>8.</span>
                            <p>Judging & Results:<br />The decision of the judges shall be final and binding.<br />Scores or feedback will not be discussed after the event.</p>
                        </div>
                        <div className="flex gap-2">
                            <span>9.</span>
                            <p>Health & Safety:<br />Participants are responsible for their personal safety during the event.<br />Organizers will not be liable for any loss, injury, or damage to personal belongings.</p>
                        </div>
                        <div className="flex gap-2">
                            <span>10.</span>
                            <p>Photography & Media:<br />The organizing committee reserves the right to photograph or record events for promotional and documentation purposes.</p>
                        </div>
                        <div className="flex gap-2">
                            <span>11.</span>
                            <p>Rule Modifications:<br />The organizing committee reserves the right to modify or amend rules at any time if required for smooth conduct of events.</p>
                        </div>
                        <div className="flex gap-2">
                            <span>12.</span>
                            <p>Authority:<br />Failure to comply with the general policy or event-specific rules may result in disqualification without prior notice.</p>
                        </div>
                    </div>
                </section>

                {/* Coordinators Section */}
                <section className="w-full mb-10">
                    <h2 className="text-3xl font-akira-expanded text-[#FFD120] mb-6 tracking-wide">COORDINATORS</h2>
                    <div className="space-y-2 text-lg md:text-2xl font-medium tracking-wide text-white">
                        <p>Edwin Joy : +91 9495991341</p>
                        <p>Ankita K : +91 7907146962</p>
                    </div>
                </section>
            </main>

            <RegistrationPopup
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                eventName="ECHOES IN FRAMES"
                ticketOptions={ticketOptions}
            />

            <Footer />
        </div >
    );
}
