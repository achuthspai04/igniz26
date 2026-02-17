import Navbar from "@/components/Navbar";
import Image from "next/image"
import ScrollToTop from "@/components/ScrollToTop";

export default function TermsAndConditions() {
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
            src="/svg/tandc.svg"
            width={800}
            height={800}
            alt="Terms and Conditions"
            className="w-full max-w-md sm:max-w-lg h-auto"
          />
        </div>

        <p
          className="mt-10 text-[#FFD120] text-base sm:text-lg md:text-xl leading-relaxed sm:leading-8 md:leading-9"
          style={{
            fontFamily: "Quanta Grotesk Pro",
          }}
        >
          By joining IGNIZ, you agree to follow event rules, venue regulations, and
          organizer instructions at all times. Entry is valid only with approved
          registration and required ID. Any misconduct, rule-breaking, or unfair practice
          can lead to immediate disqualification.
          <br />
          <br />
          You keep ownership of your creations, but SSET may showcase event work
          and capture photos or videos for promotional and academic use with proper
          credit. Participation is voluntary and at your own risk; organizers are not
          responsible for personal injury, loss, theft, or technical disruptions.
          Schedules, formats, or activities may change if required. All matters are
          subject to the laws of India.
        </p>
      </main>
    </div>
  );
}
