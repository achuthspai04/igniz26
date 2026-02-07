import Image from "next/image";

export default function Countdown() {
  return (
    <section className="relative w-full min-h-screen h-screen flex flex-col items-center justify-center bg-[#1A0000] overflow-hidden">
      {/* Texture overlay – top layer (background-image so mix-blend-multiply works) */}
      <div
        className="absolute inset-0 z-50 pointer-events-none select-none mix-blend-multiply"
        style={{
          backgroundImage: 'url("/images/asset_texture%201.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Bolt left – 58vw wide, height auto */}
      <div className="absolute left-0 top-[15vh] w-[58vw] pointer-events-none select-none z-10">
        <Image
          src="/images/bolt%20left.png"
          alt=""
          width={800}
          height={1200}
          sizes="58vw"
          className="w-full h-auto"
        />
      </div>
      {/* Bolt right – 58vw wide, height auto */}
      <div className="absolute right-0 top-[15vh] w-[58vw] pointer-events-none select-none z-10">
        <Image
          src="/images/bolt%20right.png"
          alt=""
          width={800}
          height={1200}
          sizes="58vw"
          className="w-full h-auto"
        />
      </div>

      <div className="container relative z-1 mx-auto px-4 text-center">
        <Image
          src="/images/COUNTDOWN.svg"
          alt="Countdown"
          width={640}
          height={320}
          className="mx-auto w-full max-w-2xl h-auto"
        />
      </div>
    </section>
  );
}
