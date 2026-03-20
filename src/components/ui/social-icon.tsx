"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const socialCards = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/nandann_shetye/",
    image: "/social/instagram_card.png",
    glowColor: "rgba(225, 48, 108, 0.45)",
    glowColorHover: "rgba(225, 48, 108, 0.7)",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nandann-shetye/",
    image: "/social/linkedin_card.png",
    glowColor: "rgba(10, 102, 194, 0.45)",
    glowColorHover: "rgba(10, 102, 194, 0.7)",
  },
];

const SocialIcons = () => {
  return (
    <div className="flex items-center justify-center gap-6 flex-wrap">
      {socialCards.map((card) => (
        <motion.a
          key={card.name}
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={card.name}
          className="block rounded-2xl cursor-pointer"
          initial={{ opacity: 0, y: 20, rotate: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotate: [0, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            transition: { 
              duration: 0.8, 
              ease: "easeOut",
              rotate: { delay: 0.3, duration: 0.5, ease: "easeInOut" }
            },
          }}
          viewport={{ once: true, margin: "-50px" }}
          /* Shake + glow on hover */
          whileHover={{
            rotate: [0, -1.5, 1.5, -1, 1, -0.5, 0.5, 0],
            boxShadow: `0 0 15px ${card.glowColorHover}, 0 0 25px ${card.glowColor}`,
            scale: 1.04,
            transition: {
              rotate: { duration: 0.5, ease: "easeInOut" },
              boxShadow: { duration: 0.3 },
              scale: { duration: 0.3 },
            },
          }}
          style={{
            boxShadow: `0 0 8px ${card.glowColor}`,
          }}
        >
          <Image
            src={card.image}
            alt={`${card.name} card`}
            width={640}
            height={360}
            className="w-48 sm:w-56 md:w-72 h-auto object-contain rounded-2xl"
            priority
          />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
