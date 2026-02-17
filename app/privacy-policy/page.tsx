import Navbar from "@/components/Navbar";
import Image from "next/image"
import ScrollToTop from "@/components/ScrollToTop";

export default function PrivacyPolicy() {
  return (
    <div className="relative w-full min-h-screen bg-[#2B0000]">
      <ScrollToTop />
      <Navbar />

      {/* texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-repeat opacity-10"
        style={{
          backgroundImage: "url('/svg/tncOverlay.svg')",
        }}
      />

      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        <div className="flex justify-center">
          <Image
            src="/svg/privacyText.svg"
            width={800}
            height={800}
            alt="Privacy Policy"
            className="w-full max-w-md sm:max-w-lg h-auto"
          />
        </div>

        <p
          className="mt-10 text-[#FFD120] text-base sm:text-lg md:text-xl leading-relaxed sm:leading-8 md:leading-9"
          style={{
            fontFamily: "Quanta Grotesk Pro",
          }}
        >
          To run IGNIZ smoothly, SSET collects basic participant details for
          coordination, communication, certificates, prizes, and safety. Event photos
          and videos may be used for highlights and promotions. Your data is handled
          responsibly: used only for legitimate event purposes, and never sold to third
          parties.
        </p>
      </main>
    </div>
  );
}
