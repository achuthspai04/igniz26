import Image from "next/image";
import Link from "next/link";

const ENTERTAINMENT_HEADING_STYLE = {
    textShadow: "0 0 20px rgba(255, 209, 32, 0.5)",
} as const;

export default function EntertainmentSection() {
    return (
        <section className="relative w-full bg-[#1A0000] py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Texture overlay like Countdown */}
            <div
                className="absolute inset-0 z-0 pointer-events-none select-none mix-blend-multiply"
                style={{
                    backgroundImage: 'url("/images/asset_texture%201.svg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            <div className="relative z-10 mx-auto max-w-6xl flex flex-col items-center">
                <div className="text-center">
                    <h2
                        className="font-akira-expanded text-3xl md:text-5xl lg:text-6xl font-semibold tracking-wide text-[#FFD120] uppercase"
                        style={{
                            ...ENTERTAINMENT_HEADING_STYLE,
                            fontFamily: 'var(--font-akira), sans-serif',
                        }}
                    >
                        Entertainment
                    </h2>
                </div>

                <div className="mt-10 w-full space-y-6 md:space-y-8">
                    <Link href="/entertainment" className="block relative w-full aspect-[1263/1200] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                        <Image
                            src="/images/Frame%20comic.svg"
                            alt="Entertainment banner"
                            fill
                            sizes="(max-width: 1024px) 100vw, 900px"
                            className="object-contain"
                        />
                    </Link>
                </div>

                <Link href="/entertainment">
                    <div className="relative w-64 h-20 md:w-80 md:h-24 cursor-pointer hover:opacity-80 transition-opacity">
                        <Image
                            src="/events/eventpages/register.webp"
                            alt="Register"
                            fill
                            className="object-contain"
                        />
                    </div>
                </Link>
            </div>
        </section>
    );
}
