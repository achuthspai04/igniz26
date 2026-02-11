import Navbar from "@/components/Navbar";
import Image from "next/image"
import ScrollToTop from "@/components/ScrollToTop";

export default function PrivacyPolicy() {
  return (
    <div className="w-full px-32 py-48 bg-[#2B0000] relative h-auto">
      <ScrollToTop />
      <Navbar/>
      <Image
        src="/svg/privacyText.svg"
        width={800}
        height={800}
        alt="Terms and Conditions"
        className="ml-4"
      />
      <div 
        className="pointer-events-none absolute inset-0 z-[1] bg-repeat opacity-2" 
        style={{
            backgroundImage: "url('/svg/tncOverlay.svg')",
        }} 
      />
      <p className="px-16 text-[#FFD120] text-2xl leading-[3rem]" 
        style={{
          fontFamily: "Quanta Grotesk Pro",
        }}
      >
        To run IGNIZ smoothly. SSET collects basic participant details for
        coordination. communication, certificates. prizes. and safety. Event photos
        and videos may be used for highlights and promotions. Your data is handled
        responsibly: used only for legitimate event purposes. and never sold to third
        parties
      </p>
    </div>
  );
}
