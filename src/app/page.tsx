import FixedCanvas from "@/components/FixedCanvas";
import CyberpunkHero from "@/components/CyberpunkHero";
import SectionScroller from "@/components/SectionScroller";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import BusinessSection from "@/components/BusinessSection";
import ContactSection from "@/components/ContactSection";
import StickyAvatar from "@/components/StickyAvatar";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black" suppressHydrationWarning={true}>
      
      {/* 
        FixedCanvas acts as the absolute background for the entire page, 
        tracking window scroll to scrub the images.
      */}
      <FixedCanvas />
      
      {/* Global Scroll Indicator */}
      <SectionScroller />
      
      <div className="relative z-10 w-full flex flex-col">
        {/* Section 1: Hero */}
        <section id="home" className="min-h-screen flex flex-col">
          <CyberpunkHero />
        </section>
        
        {/* Main Content Area with Sticky Avatar */}
        <div className="relative w-full flex flex-col lg:flex-row bg-cp-dark border-t border-white/10">
          {/* Sticky Avatar Column (Left) */}
          <div className="hidden lg:block lg:w-[45%] relative z-10 border-r border-white/10">
            {/* Cyberpunk Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20"
              style={{
                backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}
            ></div>
            
            <StickyAvatar />
          </div>

          {/* Scrolling Sections (Right) */}
          <div className="w-full lg:w-[55%] block relative z-30">
            {/* Section 2: About (Intro + Expertise HUD) */}
            <section id="about" className="relative z-10 border-b border-white/10">
              <AboutSection />
            </section>
            
            {/* Section 3: Projects (Cards) */}
            <section id="projects" className="relative z-10 border-b border-white/10">
              <ProjectsSection />
            </section>

            {/* Section 4: Services */}
            <section id="services" className="relative z-10 border-b border-white/10">
              <ServicesSection />
            </section>

            {/* Section 5: Business */}
            <section id="business" className="relative z-10 border-b border-white/10">
              <BusinessSection />
            </section>
            
            {/* Section 6: Contact (Phone Sequence) */}
            <section id="contact" className="relative z-10">
              <ContactSection />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
