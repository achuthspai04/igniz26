'use client';

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LayeredImage from './LayeredImage';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

const Navbar = () => {
    const eventStartDay = '26';
    const eventEndDay = '27';
    const eventMonth = 'FEB';
    const [menuOpen, setMenuOpen] = useState(false);
    const [ticketsOpen, setTicketsOpen] = useState(false);
    const [mobileTicketsOpen, setMobileTicketsOpen] = useState(false);
    const ticketsRef = useRef<HTMLDivElement>(null);
    const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);
    const closeMenu = useCallback(() => { setMenuOpen(false); setMobileTicketsOpen(false); }, []);

    const TICKET_ITEMS = useMemo(
        () => [
            { label: 'Culturals', href: '/Culturals' },
            { label: 'Technical Workshops', href: '/workshops' },
            { label: 'Entertainment & Games', href: '/entertainment' },
        ],
        []
    );

    // Close desktop dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ticketsRef.current && !ticketsRef.current.contains(e.target as Node)) {
                setTicketsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <header
            className="absolute top-0 left-0 right-0 z-[1000] px-4 pt-4 sm:px-6 sm:pt-5 font-might-makes-right"
        >
            <div className="w-full max-w-[1600px] mx-auto bg-transparent flex items-center justify-between px-2 sm:px-4 pt-6 pb-2">

                {/* Left: Logo */}
                <div className="flex items-center">
                    <Link href="/" aria-label="Go to home page">
                        <Image
                            src="/images/navbarlogo.svg"
                            alt="IGNIZ logo"
                            width={120}
                            height={90}
                            className="h-[72px] md:h-[80px] w-auto cursor-pointer"
                            priority
                        />
                    </Link>
                </div>

                {/* Center Navbar — Desktop */}
                <nav className="hidden md:flex flex-1 h-[63px] border-3 border-[#FF8A12] box-border items-center mx-4 pl-10 pr-10 relative overflow-visible">
                    <div className="absolute inset-0 overflow-hidden">
                        <LayeredImage
                            aspectRatio="full"
                            className="h-full w-full"
                            layers={[
                                { content: <div className="absolute inset-0 bg-[#FFD120]" />, zIndex: 0 },
                                {
                                    content: (
                                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                                            <Image
                                                src="/images/navbartexture.png"
                                                alt=""
                                                width={1600}
                                                height={200}
                                                className="w-full h-auto object-center translate-y-10"
                                            />
                                        </div>
                                    ),
                                    zIndex: 1,
                                    mixBlendMode: 'multiply',
                                },
                            ]}
                        />
                    </div>

                    <div className="relative z-10 flex w-full items-center text-[1.5rem] pb-1">
                        <Link
                            href="/"
                            className="-skew-x-6 cursor-pointer text-black font-semibold uppercase tracking-wide"
                        >
                            Home
                        </Link>

                        <div className="ml-auto flex items-center gap-12 text-black font-semibold uppercase tracking-wide">
                            <a
                                href="#about-us"
                                className="-skew-x-6 cursor-pointer"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const smoother = ScrollSmoother.get();
                                    if (smoother) {
                                        smoother.scrollTo('#about-us', true);
                                    } else {
                                        document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                About Us
                            </a>
                            {/* Tickets Dropdown */}
                            <div
                                ref={ticketsRef}
                                className="relative pb-[18px] -mb-[18px]"
                                onMouseEnter={() => setTicketsOpen(true)}
                                onMouseLeave={() => setTicketsOpen(false)}
                            >
                                <span
                                    className="-skew-x-6 cursor-pointer flex items-center gap-1"
                                    onClick={() => setTicketsOpen(prev => !prev)}
                                >
                                    Tickets
                                    <svg
                                        className={`w-4 h-4 transition-transform duration-200 ${ticketsOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>

                                {/* Desktop Dropdown Panel */}
                                <div
                                    className={`absolute top-full right-0 w-52 border-3 border-[#FF8A12] overflow-hidden transition-all duration-200 ${ticketsOpen
                                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                                        : 'opacity-0 -translate-y-2 pointer-events-none'
                                        }`}
                                    style={{ zIndex: 9999 }}
                                >
                                    {/* Dropdown background */}
                                    <div className="absolute inset-0">
                                        <div className="absolute inset-0 bg-[#FFD120]" />
                                        <div
                                            className="absolute inset-0 mix-blend-multiply"
                                            style={{
                                                backgroundImage: `url('/images/navbartexture.png')`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                            }}
                                        />
                                    </div>
                                    {/* Dropdown items */}
                                    <div className="relative z-10 flex flex-col py-2">
                                        {TICKET_ITEMS.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="px-5 py-2.5 text-[1.1rem] text-black font-semibold uppercase tracking-wide -skew-x-6 hover:text-[#FF8A12] hover:bg-black/5 transition-colors text-center whitespace-normal"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Date — centered on mobile, right on desktop */}
                <div className="flex-1 md:flex-none flex items-center justify-center md:justify-end">
                    <div className="flex flex-col leading-none text-center md:text-right text-[#FFD120] font-black uppercase font-akira-expanded">
                        <div className="flex items-center justify-center md:justify-between text-[1.5rem] tracking-[0.18em] gap-1 md:gap-0">
                            <span>{eventStartDay}</span>
                            <span>.</span>
                            <span>{eventEndDay}</span>
                        </div>
                        <div className="mt-1 flex items-center justify-center md:justify-between text-[20px] sm:text-[26px] md:text-[30px] tracking-[0.18em] gap-1 md:gap-0">
                            <span>{eventMonth[0]}</span>
                            <span>{eventMonth[1]}</span>
                            <span>{eventMonth[2]}</span>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Button — right side */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex items-center justify-center w-[46px] h-[46px] relative ml-2 flex-shrink-0"
                    aria-label="Toggle menu"
                >
                    <div className="flex flex-col items-center justify-center gap-[6px]">
                        <span
                            className={`block w-[28px] h-[3.5px] bg-[#FFD120] rounded-sm transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[9.5px]' : ''
                                }`}
                        />
                        <span
                            className={`block w-[28px] h-[3.5px] bg-[#FFD120] rounded-sm transition-all duration-300 ${menuOpen ? 'opacity-0' : ''
                                }`}
                        />
                        <span
                            className={`block w-[28px] h-[3.5px] bg-[#FFD120] rounded-sm transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[9.5px]' : ''
                                }`}
                        />
                    </div>
                </button>

            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`md:hidden fixed inset-0 top-[120px] z-[999] transition-all duration-400 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={closeMenu}
                />

                {/* Menu Panel */}
                <div
                    className={`relative mx-4 sm:mx-6 mt-2 border-3 border-[#FF8A12] overflow-hidden transition-all duration-400 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                        }`}
                >
                    {/* Background with texture */}
                    <div className="absolute inset-0">
                        <LayeredImage
                            aspectRatio="full"
                            className="h-full w-full"
                            layers={[
                                { content: <div className="absolute inset-0 bg-[#FFD120]" />, zIndex: 0 },
                                {
                                    content: (
                                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                                            <Image
                                                src="/images/navbartexture.png"
                                                alt=""
                                                width={1600}
                                                height={200}
                                                className="w-full h-auto object-center scale-150"
                                            />
                                        </div>
                                    ),
                                    zIndex: 1,
                                    mixBlendMode: 'multiply',
                                },
                            ]}
                        />
                    </div>

                    {/* Links */}
                    <div className="relative z-10 flex flex-col items-center py-8 gap-6 text-[1.8rem] text-black font-semibold uppercase tracking-wide">
                        <Link
                            href="/"
                            className="-skew-x-6 cursor-pointer hover:text-[#FF8A12] transition-colors"
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                        <a
                            href="#about-us"
                            className="-skew-x-6 cursor-pointer hover:text-[#FF8A12] transition-colors"
                            onClick={(e) => {
                                e.preventDefault();
                                closeMenu();
                                const smoother = ScrollSmoother.get();
                                if (smoother) {
                                    smoother.scrollTo('#about-us', true);
                                } else {
                                    document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            About Us
                        </a>
                        {/* Mobile Tickets Accordion */}
                        <div className="flex flex-col items-center w-full">
                            <span
                                className="-skew-x-6 cursor-pointer hover:text-[#FF8A12] transition-colors flex items-center gap-2"
                                onClick={() => setMobileTicketsOpen(prev => !prev)}
                            >
                                Tickets
                                <svg
                                    className={`w-5 h-5 transition-transform duration-200 ${mobileTicketsOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                            <div
                                className={`flex flex-col items-center w-full overflow-hidden transition-all duration-300 ${mobileTicketsOpen ? 'max-h-60 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                {TICKET_ITEMS.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="py-2 px-6 text-[1.4rem] text-black/80 font-semibold uppercase tracking-wide -skew-x-6 hover:text-[#FF8A12] transition-colors text-center whitespace-normal"
                                        onClick={closeMenu}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
