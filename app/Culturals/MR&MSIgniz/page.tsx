"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import RegistrationPopup, { TicketOption } from "@/components/RegistrationPopup";

export default function MrMsIgnizRegisterPage() {
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    const ticketOptions: TicketOption[] = [
        {
            id: "standard",
            name: "MR & MS IGNIZ PASS",
            price: 150,
            type: "silver",
            description: "ACCESS TO MR & MS IGNIZ COMPETITION\nREGISTRATION: 150 PER HEAD"
        }
    ];

    return (
        <div className="relative w-full overflow-x-hidden bg-[#2B0000] min-h-screen flex flex-col font-sans text-white">
            <div className="fixed inset-0 z-0 opacity-30 pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('/images/texture_updated.svg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center top" }}></div>
            <Navbar />
            <br /><br /><br />
            <main className="relative z-10 flex-1 flex flex-col items-center px-4 pt-20 md:pt-32 pb-12 md:pb-20 max-w-7xl mx-auto w-full">
                <div className="w-full mb-12 md:mb-20">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-akira-expanded text-[#FFD120] leading-tight mb-6 md:mb-8 break-words" style={{ maskImage: "url('/images/navbartexture.png')", WebkitMaskImage: "url('/images/navbartexture.png')", maskMode: "luminance", maskSize: "cover", WebkitMaskSize: "cover", maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat", maskPosition: "center", WebkitMaskPosition: "center" }}>
                        MR &amp; MS IGNIZ
                    </h1>
                    <div className="lg:hidden relative flex items-center justify-center mb-8">
                        <div className="relative w-[250px] h-[330px] sm:w-[300px] sm:h-[400px]">
                            <Image src="/events/eventpages/6.webp" alt="Mr & Ms Igniz" fill className="object-contain" />
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        <div className="space-y-6 md:space-y-8 lg:col-span-7">
                            <div className="w-full">
                                <Image src="/events/eventpages/6-text.webp" alt="Competition Description" width={800} height={300} className="w-full h-auto" />
                            </div>
                            <div className="space-y-1 text-base sm:text-lg md:text-xl lg:text-2xl font-akira-expanded text-[#FFD120] uppercase">
                                <p>TIME : 01:00 - 3:00 PM</p>
                                <p>STAGE : STAGE 2</p>
                                <p>REG FEES : 150 PER HEAD</p>
                                <p>PRIZE POOL : 3000</p>
                            </div>
                            <div className="pt-4">
                                <button onClick={() => setIsRegisterOpen(true)} className="inline-block hover:scale-105 transition-transform bg-transparent border-none p-0 cursor-pointer">
                                    <Image src="/events/eventpages/register.webp" alt="Register" width={300} height={100} className="w-auto h-12 sm:h-14 md:h-16 lg:h-20" />
                                </button>
                            </div>
                        </div>
                        <div className="hidden lg:flex relative items-center justify-center lg:col-span-5">
                            <div className="relative w-[350px] h-[470px] xl:w-[450px] xl:h-[600px]">
                                <Image src="/events/eventpages/6.webp" alt="Mr & Ms Igniz" fill className="object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
                <section className="w-full mb-16">
                    <h2 className="text-3xl font-akira-expanded text-[#FFD120] mb-6 tracking-wide">RULES</h2>
                    <ul className="list-none space-y-2 text-sm md:text-base font-bold uppercase tracking-tight text-white/90">
                        <li>1. Participants must be currently enrolled students with valid college ID</li>
                        <li>2. Judging rounds and criteria will be announced on the day of the event</li>
                        <li>3. Participants must report 1 hour before the event</li>
                        <li>4. Obscene behavior or offensive content will lead to disqualification</li>
                        <li>5. Judge&apos;s decision will be final</li>
                    </ul>
                </section>
                <section className="w-full mb-16">
                    <h2 className="text-3xl font-akira-expanded text-[#FFD120] mb-6 tracking-wide">GENERAL POLICY</h2>
                    <div className="space-y-4 text-xs md:text-sm font-bold uppercase tracking-tight text-white/90">
                        <div className="flex gap-2"><span>1.</span><p>Eligibility: All participants must be currently enrolled students. Valid college ID must be produced on demand.</p></div>
                        <div className="flex gap-2"><span>2.</span><p>Registration: Participants must complete registration within the specified time. Late entries will not be entertained.</p></div>
                        <div className="flex gap-2"><span>3.</span><p>Reporting Time: Participants must report at least 1 hour before the event. Failure may lead to disqualification.</p></div>
                        <div className="flex gap-2"><span>4.</span><p>Discipline &amp; Conduct: Any misbehavior will result in immediate disqualification.</p></div>
                        <div className="flex gap-2"><span>5.</span><p>Dress Code: Costumes should be decent and appropriate. Offensive attire will not be permitted.</p></div>
                        <div className="flex gap-2"><span>6.</span><p>Use of Props &amp; Materials: Dangerous, sharp, fire-based, or illegal items are strictly prohibited.</p></div>
                        <div className="flex gap-2"><span>7.</span><p>Music &amp; Technical Requirements: Pre-recorded music must be submitted in the specified format and time.</p></div>
                        <div className="flex gap-2"><span>8.</span><p>Judging &amp; Results: The decision of the judges shall be final and binding.</p></div>
                        <div className="flex gap-2"><span>9.</span><p>Health &amp; Safety: Organizers will not be liable for any loss, injury, or damage.</p></div>
                        <div className="flex gap-2"><span>10.</span><p>Photography &amp; Media: The organizing committee reserves the right to photograph or record events.</p></div>
                        <div className="flex gap-2"><span>11.</span><p>Rule Modifications: The organizing committee reserves the right to modify rules at any time.</p></div>
                        <div className="flex gap-2"><span>12.</span><p>Authority: Failure to comply may result in disqualification without prior notice.</p></div>
                    </div>
                </section>
                <section className="w-full mb-10">
                    <h2 className="text-3xl font-akira-expanded text-[#FFD120] mb-6 tracking-wide">COORDINATORS</h2>
                    <div className="space-y-2 text-lg md:text-2xl font-medium tracking-wide text-white">
                        <p>Aksa Santha Ronio: +91 8848462375</p>
                        <p>Sadhika Saji K: +91 9072291156</p>
                    </div>
                </section>
            </main>
            <RegistrationPopup isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} ticketOptions={ticketOptions} eventName="MR & MS IGNIZ" />
        </div>
    );
}
