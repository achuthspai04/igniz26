import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    const navLinks = [
        {
            src:"mailUs.svg",
            href:"mailto:info@igniz.live",
            alt:"Mail Us"
        },
        {
            src:"contactUs.svg",
            href:"https://wa.me/919645097445",
            alt:"Contact Us"
        },
        {
            src:"locateUs.svg",
            href:"https://maps.app.goo.gl/eGQX1PSKMRP9UNq96",
            alt:"Locate Us"
        }
    ]
  return (
    <footer 
        className={`relative bg-[#2B0000] overflow-hidden h-[32rem]`}
        style={{
            borderTop: "12px solid transparent",
            borderImage:"url('/svg/footerBorderLine.svg') 30 round",
            fontFamily: '"Akira Expanded", "Sans-serif',
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
                fontFamily: '"Akira Expanded", "Sans-serif',
                fontWeight: 900,
            }}
        >
        {/* top links */}
        <ul className="flex justify-center gap-16 items-center w-full">
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
                            className="absolute -top-22 w-[1000rem] opacity-0 scale-90 transition-all duration-300 pointer-events-none group-hover:opacity-100 group-hover:scale-150 group-focus-visible:opacity-100 group-focus-visible:scale-150"
                        />

                        {/* icon */}
                        <Image
                            src={`/svg/${link.src}`}
                            width={250}
                            height={250}
                            alt={link.alt}
                            className={link.alt === "Mail Us" ? "scale-75" : ""}
                        />
                    </Link>
                </li>
            ))}
        </ul>

        <div className="mt-4 w-full flex items-center justify-center">
            <Image
                src="/images/IGNIZ1.svg"
                alt="IGNIZ logo"
                width={900}
                height={900}
                className="w-auto h-48"
            />
        </div>

        <div className="mt-0 text-sm text-white/90 flex flex-col items-center">
            {/* <Image
                src="/svg/arr.svg"
                width={600}
                height={600}
                alt="IGNIZ26 ALL RIGHTS RESERVED"
            /> */}
            <p className="text-3xl font-bold font-akira-expanded">IGNIZ'26 ALL RIGHTS RESERVED</p>
          <div className="flex justify-center gap-2 mt-2 text-3xl text-white">
            <span className="cursor-pointer">
                <Image
                    src="/svg/ig-icon.svg"
                    width={40}
                    height={40}
                    alt="Instagram"
                />
            </span>
            <span className="cursor-pointer">
                <Image
                    src="/svg/fb-icon.svg"
                    width={40}
                    height={40}
                    alt="facebook"
                />            
            </span>
          </div>
          <div className="mt-4 text-white/50 space-y-1 flex flex-col items-center justify-center font-akira-expanded">
            <Link 
                href="/tandc" 
                className="hover:scale-110 duration-400 text-md"
                style={{
                    fontFamily: '"Akira Expanded Demo"',
                }}
            >
                {/* <Image
                    src="/svg/termsAndConditions.svg"
                    width={250}
                    height={250}
                    alt="Terms and Conditions"
                /> */}
                <p className="uppercase font-akira-expanded font-bold text-white/50">Terms and Conditions</p>
            </Link>
            <Link href="/return-policy" className="hover:scale-110 duration-400 text-md">
                 {/* <Image
                    src="/svg/ReturnPolicy.svg"
                    width={150}
                    height={150}
                    alt="Terms and Conditions"
                /> */}
                <p className="uppercase font-akira-expanded font-bold text-white/50">Return Policy</p>
            </Link>
            <Link href="/privacy-policy" className="hover:scale-110 duration-400 text-md">
                {/* <Image
                    src="/svg/PrivacyPolicy.svg"
                    width={150}
                    height={150}
                    alt="Privacy Policy"
                /> */}
                <p className="uppercase font-akira-expanded font-bold text-white/50">Privacy Policy</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
