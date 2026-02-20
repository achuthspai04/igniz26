'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const [copiedText, setCopiedText] = useState<string | null>(null);

    const copyToClipboard = (text: string) => {
        if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
            navigator.clipboard
                .writeText(text)
                .then(() => {
                    setCopiedText(text);
                    setTimeout(() => setCopiedText(null), 2000);
                })
                .catch(() => {
                    // Silently fail if clipboard is unavailable
                });
        }
    };

    const navLinks = [
        {
            label: "MAIL US",
            href: "mailto:igniz2026@gmail.com",
            detailLines: ["igniz2026@gmail.com"],
            ariaDetail: "Email igniz2026@gmail.com",
        },
        {
            label: "CONTACT US",
            href: null, // individual phone numbers will be separate links
            // Primary number is the existing student coordinator contact,
            // plus an additional dummy number as requested.
            detailItems: [
                { text: "STUDENT COORDINATORS" },
                { text: "+91 85939 68806", href: "tel:+918593968806" },
                { text: "+91 70128 10969", href: "tel:+917012810969" },
            ],
            ariaDetail:
                "Student coordinators contact numbers: +91 85939 68806 and +91 70128 10969",
        },
        {
            label: "LOCATE US",
            href: "https://maps.app.goo.gl/eGQX1PSKMRP9UNq96",
            detailLines: ["Open location in Google Maps"],
            ariaDetail: "Locate us on Google Maps",
        },
    ];
    return (
        <>
            <footer
                className={`relative bg-[#2B0000] overflow-hidden min-h-[32rem]`}
                style={{
                    borderTop: "12px solid transparent",
                    borderImage: "url('/svg/footerBorderLine.svg') 30 round",
                    fontFamily: 'var(--font-akira), "Sans-serif"',
                }}
            >
                {/* texture overlay */}
                <div
                    className="pointer-events-none absolute inset-0 z-[1] bg-repeat opacity-10"
                    style={{
                        backgroundImage: "url('/svg/footerOverlay.svg')",
                    }}
                />

                <div
                    className="relative z-10 max-w-7xl mx-auto px-8 py-8 text-center"
                    style={{
                        fontFamily: 'var(--font-akira), "Sans-serif"',
                        fontWeight: 900,
                    }}
                >
                    {/* top links */}
                    <ul className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-5xl mx-auto gap-6 md:gap-0">
                        {navLinks.map((link, index) => (
                            <li key={index} className="w-full md:flex-1 flex justify-center">
                                {link.href ? (
                                    <Link
                                        href={link.href}
                                        key={index}
                                        className="relative inline-block group focus:outline-none"
                                        aria-label={`${link.label} - ${link.ariaDetail}`}
                                    >
                                        {/* text label with glow hover effect */}
                                        <div className="relative flex flex-col items-center justify-center px-4 py-2 text-center">
                                            <span
                                                className="uppercase font-akira-expanded font-bold text-[#FFD120] text-xl md:text-2xl tracking-wide transition-transform duration-300 drop-shadow-[0_0_12px_rgba(255,209,32,0.6)] group-hover:drop-shadow-[0_0_24px_rgba(255,209,32,0.9)] group-hover:scale-110"
                                                style={{
                                                    textShadow: "0 0 20px rgba(255, 209, 32, 0.5)",
                                                    fontFamily: 'var(--font-akira), sans-serif',
                                                }}
                                            >
                                                {link.label}
                                            </span>
                                            {link.detailLines && link.detailLines.length > 0 && (
                                                <div className="mt-1 space-y-0.5 text-xs sm:text-sm text-white/80 tracking-wide transition-transform duration-300 group-hover:scale-105">
                                                    {link.detailLines.map((line, i) => (
                                                        <p key={i}>{line}</p>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                ) : (
                                    <div
                                        className="relative inline-block group focus:outline-none cursor-default"
                                        aria-label={`${link.label} - ${link.ariaDetail}`}
                                    >
                                        {/* text label with glow hover effect */}
                                        <div className="relative flex flex-col items-center justify-center px-4 py-2 text-center">
                                            <span
                                                className="uppercase font-akira-expanded font-bold text-[#FFD120] text-xl md:text-2xl tracking-wide transition-transform duration-300 drop-shadow-[0_0_12px_rgba(255,209,32,0.6)] group-hover:drop-shadow-[0_0_24px_rgba(255,209,32,0.9)] group-hover:scale-110"
                                                style={{
                                                    textShadow: "0 0 20px rgba(255, 209, 32, 0.5)",
                                                    fontFamily: 'var(--font-akira), sans-serif',
                                                }}
                                            >
                                                {link.label}
                                            </span>
                                            {link.detailItems && link.detailItems.length > 0 && (
                                                <div className="mt-1 space-y-0.5 text-xs sm:text-sm text-white/80 tracking-wide transition-transform duration-300 group-hover:scale-105">
                                                    {link.detailItems.map((item: any, i: number) => (
                                                        <div key={i}>
                                                            {item.href ? (
                                                                <>
                                                                    {/* Desktop: selectable plain text with yellow hover & copy on click */}
                                                                    <span
                                                                        className="hidden md:inline md:hover:text-[#FFD120] cursor-pointer"
                                                                        onClick={() => copyToClipboard(item.text)}
                                                                    >
                                                                        {item.text}
                                                                    </span>
                                                                    {/* Mobile: clickable tel link */}
                                                                    <a
                                                                        href={item.href}
                                                                        className="inline md:hidden hover:text-[#FFD120]"
                                                                    >
                                                                        {item.text}
                                                                    </a>
                                                                </>
                                                            ) : (
                                                                <p>{item.text}</p>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-4 w-full flex items-center justify-center">
                        <Image
                            src="/images/IGNIZ1.svg"
                            alt="IGNIZ logo"
                            width={900}
                            height={900}
                            className="w-auto h-36 md:h-44"
                        />
                    </div>

                    <div className="mt-0 flex flex-col items-center">
                        {/* Social icons — discoverable but not dominant */}
                        <div className="flex justify-center gap-3 mt-2">
                            <a href="https://www.instagram.com/igniz.sset/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="opacity-70 hover:opacity-100 transition-opacity duration-200">
                                <Image
                                    src="/svg/ig-icon.svg"
                                    width={28}
                                    height={28}
                                    alt="Instagram"
                                />
                            </a>
                            <a href="#" aria-label="Facebook" className="opacity-70 hover:opacity-100 transition-opacity duration-200">
                                <Image
                                    src="/svg/fb-icon.svg"
                                    width={28}
                                    height={28}
                                    alt="Facebook"
                                />
                            </a>
                        </div>
                        {/* Copyright — quiet legal footnote */}
                        <p className="mt-3 text-[10px] sm:text-xs font-akira-expanded text-white/30 tracking-wider">
                            © IGNIZ&apos;26 ALL RIGHTS RESERVED
                        </p>
                        <div className="mt-4 text-white/50 space-y-1 flex flex-col items-center justify-center font-akira-expanded text-xs sm:text-sm md:text-base">
                            <Link
                                href="/tandc"
                                className="hover:scale-110 duration-400"
                                style={{
                                    fontFamily: 'var(--font-akira)',
                                }}
                            >
                                {/* <Image
                    src="/svg/termsAndConditions.svg"
                    width={250}
                    height={250}
                    alt="Terms and Conditions"
                /> */}
                                <p className="uppercase font-akira-expanded font-bold text-white/50 text-center">
                                    Terms and Conditions
                                </p>
                            </Link>
                            <Link href="/return-policy" className="hover:scale-110 duration-400">
                                {/* <Image
                    src="/svg/ReturnPolicy.svg"
                    width={150}
                    height={150}
                    alt="Terms and Conditions"
                /> */}
                                <p className="uppercase font-akira-expanded font-bold text-white/50 text-center">
                                    Return Policy
                                </p>
                            </Link>
                            <Link href="/privacy-policy" className="hover:scale-110 duration-400">
                                {/* <Image
                    src="/svg/PrivacyPolicy.svg"
                    width={150}
                    height={150}
                    alt="Privacy Policy"
                /> */}
                                <p className="uppercase font-akira-expanded font-bold text-white/50 text-center">
                                    Privacy Policy
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
            {copiedText && (
                <div className="hidden md:block fixed bottom-6 right-6 z-[2000] bg-black/80 text-[#FFD120] px-4 py-2 rounded-md text-xs sm:text-sm shadow-lg">
                    Copied {copiedText} to clipboard
                </div>
            )}
        </>
    );
}
