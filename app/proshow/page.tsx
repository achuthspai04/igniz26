import Navbar from "@/components/Navbar";
import ProshowSection from "@/components/ProshowSection";

export default function ProshowPage() {
  return (
    <div className="relative w-full overflow-x-hidden bg-black min-h-screen">
      <Navbar />
      <ProshowSection />
    </div>
  );
}
