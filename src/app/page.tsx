import FixedCanvas from "@/components/FixedCanvas";
import ComingSoon from "@/components/ComingSoon";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black" suppressHydrationWarning={true}>
      
      {/* 
        FixedCanvas acts as the absolute background for the entire page
      */}
      <FixedCanvas />
      
      {/* Coming Soon Screen Overlay */}
      <ComingSoon />

    </main>
  );
}
