import Image from "next/image";

export default function About() {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about/Mask group.svg"
          alt=""
          fill
          className="object-cover opacity-80 mix-blend-screen"
          priority
        />
      </div>

      {/* Decorative Triangles */}
      <div className="absolute top-0 left-0 w-full h-48 bg-[#2B0000] z-0 pointer-events-none" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
      <div className="absolute bottom-0 right-0 w-full h-48 bg-[#2B0000] z-0 pointer-events-none" style={{ clipPath: 'polygon(100% 100%, 100% 0, 0 100%)' }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-24 max-w-5xl flex flex-col justify-center min-h-screen">
        <div className="grid gap-16">
          {/* ABOUT SSET */}
          <section className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-akira-expanded text-[#FFD120] uppercase tracking-wide">
              ABOUT SSET
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed md:leading-loose text-justify font-sans">
              The SCMS School of Engineering and Technology (SSET) is envisioned as a premier institution providing exceptional technology-related education. SSET focuses on the holistic development of students, emphasizing ethical values and preparing them to meet the evolving diverse needs of the industry and the challenges posed by society. The institution fosters innovation, critical thinking, and interdisciplinary learning to nurture competent professionals and responsible global citizens.
            </p>
          </section>

          {/* ABOUT IGNIZ */}
          <section className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-akira-expanded text-[#FFD120] uppercase tracking-wide">
              ABOUT IGNIZ
            </h2>
            <div className="space-y-6 text-white/90 text-sm md:text-base leading-relaxed md:leading-loose text-justify font-sans">
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
