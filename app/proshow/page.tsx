"use client";

import Navbar from "@/components/Navbar";
import ProshowSection from "@/components/ProshowSection";
import PageLoader from "@/components/PageLoader";

const PRELOAD_ASSETS = [
  "/proShow/proshow cta (1).svg",
  "/proShow/pic.png",
  "/proShow/PRO%20SHOW.png",
  "/proShow/ProShowLogo.png",
  "/proShow/PRO SHOW OUTLINE.png",
  "/images/asset_texture%201.svg",
];

export default function ProshowPage() {
  return (
    <PageLoader assets={PRELOAD_ASSETS}>
      <div className="relative w-full overflow-x-hidden bg-black min-h-screen">
        <Navbar />
        <ProshowSection />
      </div>
    </PageLoader>
  );
}
