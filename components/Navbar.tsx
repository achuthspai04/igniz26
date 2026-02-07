import React from 'react';
import Image from 'next/image';
import LayeredImage from './LayeredImage';

const Navbar = () => {
    const eventStartDay = '21';
    const eventEndDay = '22';
    const eventMonth = 'FEB';

    return (
        <header
            className="fixed top-0 left-0 right-0 z-1000 px-4 pt-4 sm:px-6 sm:pt-5"
            style={{ fontFamily: '"Might Makes Right BB", system-ui, sans-serif' }}
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

                {/* Center Navbar */}
                <nav className="flex-1 h-[46px] md:h-[63px] border-3 border-[#FF8A12] box-border flex items-center mx-2 sm:mx-4 pl-4 sm:pl-6 md:pl-10 pr-4 sm:pr-8 md:pr-10 relative overflow-hidden">
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
                        <span className="-skew-x-6 cursor-pointer text-black font-semibold uppercase tracking-wide">
                            Home
                        </span>

                        <div className="ml-auto flex items-center gap-6 sm:gap-8 md:gap-12 text-black font-semibold uppercase tracking-wide">
                            <span className="-skew-x-6 cursor-pointer">About Us</span>
                            <span className="-skew-x-6 cursor-pointer">Tickets</span>
                        </div>
                    </div>
                </nav>

                {/* Right: Date */}
                <div className="flex items-center">
                    <div className="flex flex-col leading-none text-right text-[#FFD120] font-black uppercase font-akira-expanded">
                        <div className="flex items-center justify-between text-[1.5rem] tracking-[0.18em]">
                            <span>{eventStartDay}</span>
                            <span>.</span>
                            <span>{eventEndDay}</span>
                        </div>
                        <div className="mt-1 flex items-center justify-between text-[20px] sm:text-[26px] md:text-[30px] tracking-[0.18em]">
                            <span>{eventMonth[0]}</span>
                            <span>{eventMonth[1]}</span>
                            <span>{eventMonth[2]}</span>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Navbar;
