import Image from "next/image";
import { Button } from "@/components/ui/button";

const socials = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/5BhtyA8oT2cbYiIkoSZjHE?si=-Wf6MKUYRIuvq9hk4qmZgg",
    icon: "/social/spotify_new.png",
    glowColor: "hover:shadow-[0_0_20px_rgba(30,215,96,0.4)]",
  },
  {
    name: "Apple Music",
    href: "https://music.apple.com/us/artist/n-sparxz/1834647878",
    icon: "/social/apple_music_new.png",
    glowColor: "hover:shadow-[0_0_20px_rgba(252,60,68,0.4)]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nandann_shetye/",
    icon: "/social/instagram_new.png",
    glowColor: "hover:shadow-[0_0_20px_rgba(225,48,108,0.4)]",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61584299857212",
    icon: "/social/facebook_new.png",
    glowColor: "hover:shadow-[0_0_20px_rgba(66,103,178,0.4)]",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nandann-shetye/",
    icon: "/social/linkedin_new.png",
    glowColor: "hover:shadow-[0_0_20px_rgba(10,102,194,0.4)]",
  },
];

const SocialIcons = () => {
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
        >
          <Button
            variant="outline"
            type="button"
            className={`rounded-xl border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300 cursor-pointer h-12 w-12 p-0 ${social.glowColor}`}
          >
            <Image
              src={social.icon}
              alt={`${social.name} icon`}
              width={24}
              height={24}
              className="object-contain"
            />
          </Button>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
