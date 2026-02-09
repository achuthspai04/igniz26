import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    const navLinks = [
        {
            src:"mailUs.svg",
            href:"/",
            alt:"Mail Us"
        },
        {
            src:"contactUs.svg",
            href:"/",
            alt:"Contact Us"
        },
        {
            src:"locateUs.svg",
            href:"/",
            alt:"Locate Us"
        }
    ]
  return (
    <footer 
        className={`relative bg-[#2B0000] overflow-hidden`}
        style={{
            borderTop: "12px solid transparent",
            borderImage:"url('/svg/footerBorderLine.svg') 30 round"
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
            className="relative z-10 max-w-7xl mx-auto px-8 py-16 text-center" 
            style={{
                fontFamily: '"Akira Expanded", "Sans-serif',
                fontWeight: 900,
            }}
        >
        {/* top links */}
        <ul className="flex justify-between items-center w-full">
            {navLinks.map((link, index) => (
                <li key={index}>
                    <Link
                        href={link.href}
                        key={index}
                        className="relative inline-block group focus:outline-none"
                    >
                        {/* selector circle */}
                        <Image
                            src="/svg/footerSelector.png"
                            alt=""
                            width={1000}
                            height={1000}
                            className="absolute -top-24 w-[1000rem] opacity-0 scale-90 transition-all duration-300 pointer-events-none group-hover:opacity-100 group-hover:scale-150 group-focus-visible:opacity-100 group-focus-visible:scale-150"
                        />

                        {/* icon */}
                        <Image
                            src={`/svg/${link.src}`}
                            width={300}
                            height={300}
                            alt={link.alt}
                            className={link.alt === "Mail Us" ? "scale-75" : ""}
                        />
                    </Link>
                </li>
            ))}
        </ul>

        <div className="mt-16 w-full flex items-center justify-center">
            <Image
                src="/images/IGNIZ1.svg"
                alt="IGNIZ logo"
                width={900}
                height={900}
                className="w-auto h-48"
            />
        </div>

        <div className="mt-10 text-sm text-white/90">
          <p className="text-2xl">IGNIZ26. ALL RIGHTS RESERVED</p>
          <div className="flex justify-center gap-2 mt-2 text-3xl text-white">
            <span className="cursor-pointer">
                <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span className="cursor-pointer">
                <FontAwesomeIcon icon={faFacebook}/>
            </span>
          </div>
          <div className="mt-4 text-white/50 space-y-0 flex flex-col items-center justify-center">
            <Link href="/" className="hover:scale-110 duration-400 text-md">TERMS AND CONDITIONS</Link>
            <Link href="/" className="hover:scale-110 duration-400 text-md">RETURN POLICY</Link>
            <Link href="/" className="hover:scale-110 duration-400 text-md">PRIVACY POLICY</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
