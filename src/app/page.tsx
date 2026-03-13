import SidebarName from "@/components/SidebarName";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Philosophy from "@/components/Philosophy";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black" suppressHydrationWarning={true}>
      <SidebarName />
      {/* 
        FixedCanvas acts as the absolute background for the entire page, 
        tracking window scroll to scrub the images.
      */}
      <FixedCanvas />
      
      <div className="relative z-10 w-full flex flex-col">
        <Hero />
        <About />
        <Expertise />
        <Philosophy />
        <Projects />
        
        <footer className="py-12 border-t border-white/5 text-center text-gray-500 backdrop-blur-md bg-black/50">
          <p className="tracking-wide text-sm font-medium">© 2026 Nandann Shetye. <span className="text-white ml-2">Create. Deliver. Dominate.</span></p>
        </footer>
      </div>
    </main>
  );
}
