import Navbar from "@/components/Navbar";
import Image from "next/image"

export default function ReturnPolicy() {
  return (
    <div className="w-full px-32 py-48 bg-[#2B0000] relative h-auto">
      <Navbar/>
      <Image
        src="/svg/returnText.svg"
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
      <p className="px-16 text-[#FFD120] text-2xl leading-[3rem]" 
        style={{
          fontFamily: "Quanta Grotesk Pro",
        }}
      >
        Registrations are final. Fees are refunded only if an event is officially cancelled
        by the organizers. If an event is rescheduled. your registration remains valid.
        Absence. late arrival. or withdrawval does not qualify for a refund.
      </p>
    </div>
  );
}
