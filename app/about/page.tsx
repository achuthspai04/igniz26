import Image from "next/image";

const ABOUT_HEADING_STYLE = {
  textShadow: "0 0 20px rgba(255, 209, 32, 0.5)",
} as const;

export default function About() {
  return (
    <div id="about-us" className="relative min-h-[auto] md:min-h-screen w-full bg-[#1A0000] overflow-hidden">
      {/* Background Texture */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          backgroundImage: `url('/images/asset_texture%201.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          mixBlendMode: 'screen',
          opacity: 0.15,
        }}
      />

      {/* Slanting Background Box */}
      <div
        className="absolute z-[1] -rotate-6 pointer-events-none"
        style={{
          top: '-15%',
          left: '-55%',
          width: '210%',
          height: '130%',
        }}
      >
        <div className="absolute inset-0 bg-[#3B0000]" />
        <div
          className="absolute inset-0 opacity-80 mix-blend-multiply"
          style={{
            backgroundImage: `url('/images/texture_up.webp')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Decorative Triangles */}
      <div className="absolute top-0 left-0 w-full h-24 md:h-48 bg-[#2B0000] z-0 pointer-events-none" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
      <div className="absolute bottom-0 right-0 w-full h-24 md:h-48 bg-[#2B0000] z-0 pointer-events-none" style={{ clipPath: 'polygon(100% 100%, 100% 0, 0 100%)' }}></div>

      {/* Top gradient – blends into section above */}
      <div className="absolute top-0 left-0 w-full h-32 md:h-48 z-[3] pointer-events-none bg-gradient-to-b from-[#1A0000] to-transparent" />
      {/* Bottom gradient – blends into section below */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 z-[3] pointer-events-none bg-gradient-to-t from-[#1A0000] to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 md:py-24 max-w-5xl flex flex-col justify-center min-h-screen">
        <div className="grid gap-16">
          {/* ABOUT SSET */}
          <section className="space-y-4">
            <h2
              className="text-4xl md:text-5xl font-akira-expanded text-[#FFD120] uppercase tracking-wide"
              style={ABOUT_HEADING_STYLE}
            >
              ABOUT SSET
            </h2>
            <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose text-justify" style={{ fontFamily: 'var(--font-quanta), sans-serif' }}>
              SCMS School of Engineering and Technology (SSET), Ernakulam, is a premier institution committed to academic excellence, innovation, and holistic development. With state-of-the-art infrastructure, industry-focused programs, and experienced faculty, SSET nurtures skilled engineers ready for global challenges. Driven by quality education, research, and strong industry collaboration, SSET empowers students to lead, innovate, and excel.
            </p>
          </section>

          {/* ABOUT IGNIZ */}
          <section className="space-y-4">
            <h2
              className="text-4xl md:text-5xl font-akira-expanded text-[#FFD120] uppercase tracking-wide"
              style={ABOUT_HEADING_STYLE}
            >
              ABOUT IGNIZ
            </h2>
            <div className="space-y-6 text-white/90 text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose text-justify" style={{ fontFamily: 'var(--font-quanta), sans-serif' }}>
              <p>
                IGNIZ is the flagship techno-cultural fest of SCMS School of Engineering and Technology (SSET) and one of the most awaited celebrations of the year. It is a dynamic convergence of technical innovation and cultural brilliance, brought to life on a single electrifying platform.
              </p>
              <p>
                The fest features an exciting lineup of events designed to spark creativity, sharpen skills, and inspire collaboration. Students come together to interact, compete, and form connections that go beyond classrooms and curricula. IGNIZ stands as a celebration of talent, teamwork, and the vibrant spirit that unites the entire campus.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
