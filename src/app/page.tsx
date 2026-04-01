import Navbar from "@/components/Navbar";
import FixedCanvas from "@/components/FixedCanvas";
import SidebarName from "@/components/SidebarName";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Philosophy from "@/components/Philosophy";
import Pricing from "@/components/Pricing";
import BusinessOwners from "@/components/BusinessOwners";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black" suppressHydrationWarning={true}>
      {/* Sticky Navigation Bar */}
      <Navbar />
      
      <SidebarName />
      {/* 
        FixedCanvas acts as the absolute background for the entire page, 
        tracking window scroll to scrub the images.
      */}
      <FixedCanvas />
      
      <div className="relative z-10 w-full flex flex-col">
        {/* Hero Section */}
        <Hero />
        
        {/* Marquee Ticker - transitions into About */}
        <MarqueeStrip />
        
        {/* About + Stats Strip */}
        <About />
        
        {/* How We Work Together */}
        <HowItWorks />
        
        {/* Services / What I Do */}
        <Expertise />
        
        {/* Testimonials / Social Proof */}
        <Testimonials />
        
        {/* For Business Owners CTA Banner */}
        <BusinessOwners />

        {/* Pricing Plans */}
        <Pricing />
        
        {/* Philosophy / Systems Thinking */}
        <Philosophy />
        
        {/* Projects / Case Studies */}
        <Projects />
        
        {/* Contact Form */}
        <ContactForm />
        
        {/* Full Footer */}
        <Footer />
      </div>
    </main>
  );
}
