"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageLoader from "@/components/PageLoader";

const PRELOAD_ASSETS = [
    "/images/texture_updated.svg",
    "/images/navbartexture.png",
    "/events/eventpages/8.svg",
    "/events/eventpages/8-text.svg",
    "/events/eventpages/register.svg",
];

export default function MelodinzRegisterPage() {
    return (
        <PageLoader assets={PRELOAD_ASSETS}>
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
                            Melodinz
                        </h1>

                        {/* Mobile: Image appears right after heading */}
                        <div className="lg:hidden relative flex items-center justify-center mb-8">
                            <div className="relative w-[250px] h-[330px] sm:w-[300px] sm:h-[400px]">
                                <Image
                                    src="/events/eventpages/8.svg"
                                    alt="Melodinz"
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
                                        src="/events/eventpages/8-text.svg"
                                        alt="Competition Description"
                                        width={800}
                                        height={300}
                                        className="w-full h-auto"
                                    />
                                </div>

                                <div className="space-y-1 text-base sm:text-lg md:text-xl lg:text-2xl font-akira-expanded text-[#FFD120] uppercase">
                                    <p>DATE :</p>
                                    <p>TIME : 10:00-2:30PM</p>
                                    <p>STAGE : Stage 2</p>
                                    <p>REG FEES : 150 PER HEAD</p>
                                    <p>PRIZE POOL : 10000</p>
                                </div>

                                <div className="pt-4">
                                    <Link
                                        href="#"
                                        className="inline-block hover:scale-105 transition-transform"
                                    >
                                        <Image
                                            src="/events/eventpages/register.svg"
                                            alt="Register"
                                            width={300}
                                            height={100}
                                            className="w-auto h-12 sm:h-14 md:h-16 lg:h-20"
                                        />
                                    </Link>
                                </div>
                            </div>

                            {/* Desktop: Image on the right */}
                            <div className="hidden lg:flex relative items-center justify-center lg:col-span-5">
                                <div className="relative w-[350px] h-[470px] xl:w-[450px] xl:h-[600px]">
                                    <Image
                                        src="/events/eventpages/8.svg"
                                        alt="Melodinz"
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
                            <li>1. Team Size: Maximum of 15 members per team.</li>
                            <li>2. Performance Time: 15 minutes for performance + 10 minutes setup time. Teams exceeding the time limit will face immediate disqualification.</li>
                            <li>3. Judging Criteria: Originality and Creativity, Tightness, Overall Tone and Sound, Performance and Interaction, Vocals and Harmony.</li>
                            <li>4. Effects: Distortion is permitted where needed.</li>
                            <li>5. Languages: Teams can perform in any regional language of their choice.</li>
                            <li>6. Screaming is not allowed.</li>
                            <li>7. Instrument Guidelines:</li>
                            <li className="ml-4">a. Drums: A standard 5-piece drum kit will be provided.</li>
                            <li className="ml-4">b. Other Instruments: Teams must bring their own instruments.</li>
                            <li>8. Live Music Only: All music must be played live on stage. No pre-recorded music is allowed.</li>
                            <li>9. Judges' decision will be final and binding.</li>
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
                            <p> Adithya K : +91  9946766673</p>
                            <p>Gayathri Murali  : +91  9048451470</p>
                        </div>
                    </section>
                </main>

            </div>
        </PageLoader>
    );
}
