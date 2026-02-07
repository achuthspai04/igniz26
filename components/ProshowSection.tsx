import Image from "next/image";

const PROSHOW_IMAGES = {
  ellipse: "/proShow/Ellipse%2050.png",
  pic: "/proShow/pic.png",
  proShow: "/proShow/PRO%20SHOW.png",
  red: "/proShow/ProShowLogo.png",
  texture: "/images/asset_texture%201.svg",
};

export default function ProshowSection() {
  return (
    <section className="relative w-full min-h-screen aspect-[1708/1353] flex flex-col bg-[#1A0000] overflow-hidden isolate">
      {/* Layer 1: RED 1 – back (tinted red: mask + multiply) */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none select-none">
        <div
          className="relative w-[50vw] h-auto"
          style={{
            maskImage: `url(${PROSHOW_IMAGES.red})`,
            WebkitMaskImage: `url(${PROSHOW_IMAGES.red})`,
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
        >
          {/* Red tint layer (masked to logo shape) */}
          <div className="absolute inset-0 bg-red-600" />
          {/* Logo with multiply preserves light/dark shading as red tones */}
          <Image
            src={PROSHOW_IMAGES.red}
            alt=""
            width={380}
            height={434}
            sizes="50vw"
            className="relative w-full h-auto object-contain [mix-blend-mode:multiply]"
          />
        </div>
      </div>
      {/* Layer 2: Texture overlay (multiply) – above RED 1, below PRO SHOW */}
      <div className="absolute inset-0 z-[5] pointer-events-none select-none [mix-blend-mode:multiply]">
        <Image
          src={PROSHOW_IMAGES.texture}
          alt=""
          fill
          sizes="100vw"
          className="object-cover w-full h-full"
        />
      </div>
      {/* Layer 3: PRO SHOW – above texture */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none">
        <Image
          src={PROSHOW_IMAGES.proShow}
          alt="PRO SHOW"
          width={560}
          height={448}
          sizes="50vw"
          className="w-[50vw] h-auto object-contain"
        />
      </div>
      {/* Layer 3: Ellipse 50 – anchored to bottom */}
      <div className="absolute inset-x-0 -bottom-[15%] z-50 w-full pointer-events-none select-none">
        <Image
          src={PROSHOW_IMAGES.ellipse}
          alt=""
          width={1920}
          height={400}
          sizes="100vw"
          className="w-full h-auto object-cover object-bottom"
        />
      </div>
      {/* Layer 4: pic – anchored to bottom (front) */}
      <div className="absolute inset-x-0 bottom-0 z-30 w-full flex justify-center pointer-events-none select-none">
        <Image
          src={PROSHOW_IMAGES.pic}
          alt="Pro Show"
          width={1200}
          height={800}
          sizes="90vw"
          className="w-full max-w-4xl h-auto object-contain object-bottom"
        />
      </div>
    </section>
  );
}
