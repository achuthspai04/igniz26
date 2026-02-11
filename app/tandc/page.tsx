import Navbar from "@/components/Navbar";
import Image from "next/image"
import ScrollToTop from "@/components/ScrollToTop";

export default function TermsAndConditions() {
  return (
    <div className="w-full px-32 py-48 bg-[#2B0000] relative h-auto">
      <ScrollToTop />
      <Navbar/>
      <Image
        src="/svg/tandc.svg"
        width={800}
        height={800}
        alt="Terms and Conditions"
      />
      <div 
        className="pointer-events-none absolute inset-0 z-[1] bg-repeat opacity-2" 
        style={{
            backgroundImage: "url('/svg/tncOverlay.svg')",
        }} 
      />
      <p className="px-8 text-[#FFD120] text-2xl leading-[3rem]" 
        style={{
          fontFamily: "Quanta Grotesk Pro",
        }}
      >
        By joining IGNIZ. you agree to follow event rules. venue regulations. and
        organizer instructions at all times. Entry is valid only with approved
        registration and required ID. Any misconduct. rule-breaking, or unfair practice
        can lead to immediate disqualification.
        <br />
        You keep ownership of your creations. but SSET may showcase event work
        and capture photos or videos for promotional and academic use with proper
        credit. Participation is voluntary and at your own risk: organizers are not
        responsible for personal injury, loss, theft. or technical disruptions
        Schedules, formats, or activities may change if required. All matters are
        subject to the laws of India.
      </p>
    </div>
  );
}
