'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LayeredImage from './LayeredImage';

const Navbar = () => {
    const eventStartDay = '26';
    const eventEndDay = '27';
    const eventMonth = 'FEB';
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);
    const closeMenu = useCallback(() => setMenuOpen(false), []);

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
                    <Image
                        src="/images/navbarlogo.svg"
                        alt="IGNIS logo"
                        width={120}
                        height={90}
                        className="h-[72px] md:h-[80px] w-auto"
                        priority
                    />
                </div>

                {/* Center Navbar — Desktop */}
                <nav className="hidden md:flex flex-1 h-[63px] border-3 border-[#FF8A12] box-border items-center mx-4 pl-10 pr-10 relative overflow-hidden">
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
                            <Link href="/about" className="-skew-x-6 cursor-pointer">
                                About Us
                            </Link>
                            <span className="-skew-x-6 cursor-pointer">Tickets</span>
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
                            className={`block w-[28px] h-[3.5px] bg-[#FFD120] rounded-sm transition-all duration-300 ${
                                menuOpen ? 'rotate-45 translate-y-[9.5px]' : ''
                            }`}
                        />
                        <span
                            className={`block w-[28px] h-[3.5px] bg-[#FFD120] rounded-sm transition-all duration-300 ${
                                menuOpen ? 'opacity-0' : ''
                            }`}
                        />
                        <span
                            className={`block w-[28px] h-[3.5px] bg-[#FFD120] rounded-sm transition-all duration-300 ${
                                menuOpen ? '-rotate-45 -translate-y-[9.5px]' : ''
                            }`}
                        />
                    </div>
                </button>

            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`md:hidden fixed inset-0 top-[120px] z-[999] transition-all duration-400 ${
                    menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={closeMenu}
                />

                {/* Menu Panel */}
                <div
                    className={`relative mx-4 sm:mx-6 mt-2 border-3 border-[#FF8A12] overflow-hidden transition-all duration-400 ${
                        menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
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
                        <Link
                            href="/about"
                            className="-skew-x-6 cursor-pointer hover:text-[#FF8A12] transition-colors"
                            onClick={closeMenu}
                        >
                            About Us
                        </Link>
                        <span
                            className="-skew-x-6 cursor-pointer hover:text-[#FF8A12] transition-colors"
                            onClick={closeMenu}
                        >
                            Tickets
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
