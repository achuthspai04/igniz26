"use client";

import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROSHOW_IMAGES = Object.freeze({
  ellipse: "/proShow/proshow cta (1).svg",
  pic: "/proShow/pic.png",
  proShow: "/proShow/PRO%20SHOW.png",
  red: "/proShow/ProShowLogo.png",
  texture: "/images/asset_texture%201.svg",
  proShowOutline: "/proShow/PRO SHOW OUTLINE.png",
} as const);

export default function ProshowSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const picRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pic = picRef.current;
    if (!section || !pic) return;

    let tl: gsap.core.Tween | null = null;
    const isMobile = window.innerWidth < 768;
    const startY = isMobile ? -300 : -700;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || tl) return;
        tl = gsap.fromTo(
          pic,
          { y: startY, force3D: true },
          {
            y: 0,
            force3D: true,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom 90%",
              scrub: 0.15,
            },
          }
        );
      },
      { rootMargin: "150% 0px", threshold: 0 }
    );
    io.observe(section);

    return () => {
      io.disconnect();
      tl?.kill();
      ScrollTrigger.getAll().forEach((s) => {
        if (s.trigger === section) s.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[60vh] md:min-h-screen aspect-[1708/1353] flex flex-col bg-[#1A0000] overflow-hidden isolate"
    >
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
      <div className="absolute inset-0 z-100 flex items-center justify-center pointer-events-none select-none">
        <Image
          src={PROSHOW_IMAGES.proShowOutline}
          alt="PRO SHOW"
          width={560}
          height={448}
          sizes="50vw"
          className="w-[50vw] h-auto object-contain translate-y-2"
        />
      </div>
      {/* Layer 3: Ellipse 50 – anchored to bottom */}
      <div
        className="ellipse-wrapper absolute inset-x-0 -bottom-[2%] sm:-bottom-[3%] md:-bottom-[8%] lg:-bottom-[5%] z-50 w-[90%] sm:w-[80%] md:w-[65%] mx-auto pointer-events-none select-none"
      >
        <Image
          src={PROSHOW_IMAGES.ellipse}
          alt=""
          width={1920}
          height={400}
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, 65vw"
          className="w-full h-auto object-contain object-bottom"
        />
      </div>
      {/* Layer 4: pic – anchored to bottom (front), GSAP scroll-in; will-change for GPU layer */}
      <div
        ref={picRef}
        className="absolute inset-x-0 bottom-0 z-30 w-full h-full flex items-end justify-center pointer-events-none select-none"
        style={{ willChange: "transform" }}
      >
        <Image
          src={PROSHOW_IMAGES.pic}
          alt="Pro Show"
          width={1200}
          height={800}
          sizes="90vw"
          className="w-[70%] md:w-full max-w-4xl max-h-full object-contain object-bottom"
        />
      </div>
    </section>
  );
}
