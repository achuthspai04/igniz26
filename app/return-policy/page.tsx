import Navbar from "@/components/Navbar";
import Image from "next/image"
import ScrollToTop from "@/components/ScrollToTop";

export default function ReturnPolicy() {
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
            src="/svg/returnText.svg"
            width={800}
            height={800}
            alt="Return Policy"
            className="w-full max-w-md sm:max-w-lg h-auto"
          />
        </div>

        <p
          className="mt-10 text-[#FFD120] text-base sm:text-lg md:text-xl leading-relaxed sm:leading-8 md:leading-9"
          style={{
            fontFamily: "Quanta Grotesk Pro",
          }}
        >
          Registrations are final. Fees are refunded only if an event is officially cancelled
          by the organizers. If an event is rescheduled, your registration remains valid.
          Absence, late arrival, or withdrawal does not qualify for a refund.
        </p>
      </main>
    </div>
  );
}
