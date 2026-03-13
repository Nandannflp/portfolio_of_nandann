import React from 'react';
import Image from 'next/image';

const builds = [
  "AI-powered websites",
  "High converting landing pages",
  "Digital marketing funnels",
  "Automated lead generation systems",
  "Business tools powered by AI",
  "Visual assets for creators and brands",
  "Modern digital infrastructures",
  "AI Visual Designer",
  "AI Music Producer"
];

export default function Projects() {
  return (
    <section className="relative z-20 py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white border-l-4 border-cyan-500 pl-6">
            What I <span className="font-alex-brush text-cyan-400 font-normal lowercase tracking-normal text-7xl md:text-9xl px-1">build.</span>
          </h2>
          
          <div className="flex items-center gap-4">
            <a href="https://open.spotify.com/artist/5BhtyA8oT2cbYiIkoSZjHE?si=-Wf6MKUYRIuvq9hk4qmZgg" target="_blank" rel="noopener noreferrer" className="block relative w-12 h-12 hover:-translate-y-2 hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]">
               <Image src="/social/spotify_new.png" alt="Spotify" fill className="object-contain" />
            </a>
            <a href="https://music.apple.com/us/artist/n-sparxz/1834647878" target="_blank" rel="noopener noreferrer" className="block relative w-12 h-12 hover:-translate-y-2 hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]">
               <Image src="/social/apple_music_new.png" alt="Apple Music" fill className="object-contain" />
            </a>
            <a href="https://www.instagram.com/nandann_shetye/" target="_blank" rel="noopener noreferrer" className="block relative w-12 h-12 hover:-translate-y-2 hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(217,70,239,0.4)]">
               <Image src="/social/instagram_new.png" alt="Instagram" fill className="object-contain" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61584299857212" target="_blank" rel="noopener noreferrer" className="block relative w-12 h-12 hover:-translate-y-2 hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">
               <Image src="/social/facebook_new.png" alt="Facebook" fill className="object-contain" />
            </a>
            <a href="https://www.linkedin.com/in/nandann-shetye/" target="_blank" rel="noopener noreferrer" className="block relative w-12 h-12 hover:-translate-y-2 hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(14,165,233,0.4)]">
               <Image src="/social/linkedin_new.png" alt="LinkedIn" fill className="object-contain" />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {builds.map((title, i) => (
            <div 
              key={i} 
              className="glass-card group p-8 relative overflow-hidden transition-all duration-500 border-white/10 bg-black/40 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-black/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] cursor-default flex flex-col justify-center min-h-[200px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
              
              <div className="relative z-10 text-center">
                <span className="block text-4xl mb-4 text-cyan-500/20 group-hover:text-cyan-400 transition-colors duration-300">✦</span>
                <h3 className="text-xl md:text-2xl font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
