import Image from "next/image";
import Link from "next/link";

const WORKSHOP_IMAGES = Object.freeze({
  event1: "/images/event-1-red.svg",
  event2: "/images/event-2.svg",
} as const);

const WORKSHOP_HEADING_STYLE = {
  textShadow: "0 0 20px rgba(255, 209, 32, 0.5)",
} as const;

export default function WorkshopsSection() {
  return (
    <section className="relative w-full bg-[#1A0000] py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <div className="relative z-10 mx-auto max-w-6xl flex flex-col items-center">
        <div className="text-center">
          <h2
            className="font-akira-expanded text-3xl md:text-5xl lg:text-6xl font-semibold tracking-wide text-[#FFD120] uppercase"
            style={{
              ...WORKSHOP_HEADING_STYLE,
              fontFamily: 'var(--font-akira), sans-serif',
            }}
          >
            <span className="block md:inline">Technical</span>{" "}
            <span className="block md:inline">Workshops</span>
          </h2>
        </div>

        <div className="mt-10 w-full max-w-5xl space-y-6 md:space-y-8">
          <Link href="/workshops" className="block relative w-full aspect-[1263/369] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
            <Image
              src={WORKSHOP_IMAGES.event1}
              alt="Hack the Igniz workshop banner"
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-contain"
            />
          </Link>

          <Link href="/workshops" className="block relative w-full aspect-[1263/369] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
            <Image
              src={WORKSHOP_IMAGES.event2}
              alt="Pythe Quest workshop banner"
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-contain"
            />
          </Link>
        </div>

        <Link href="/workshops">
          <div className="relative w-48 h-14 md:w-56 md:h-16 cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center p-3">
            <div
              className="w-full h-full bg-[#FFD120]"
              style={{
                maskImage: 'url("/images/next.png")',
                WebkitMaskImage: 'url("/images/next.png")',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center'
              }}
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
