"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface TextGradientOpacityProps {
  text: string;
}

const TextGradientOpacity: React.FC<TextGradientOpacityProps> = ({ text }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const characters = containerRef.current.querySelectorAll(".character");

      gsap.fromTo(
        characters,
        {
          opacity: 0.3, // Reduced initial opacity for better contrast on black background
        },
        {
          opacity: 1,
          stagger: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%', // Start animation when the top of the text is 80% from the top of the viewport
            end: 'bottom 60%',
            scrub: true,
          },
        }
      );
    }
  }, [text]);

  return (
    <div
      ref={containerRef}
      className="text-base sm:text-xl font-light leading-relaxed space-y-1 max-w-4xl mx-auto text-gray-100"
    >
      {text.split(" ").map((word, wordIndex, wordsArray) => (
        <React.Fragment key={wordIndex}>
          {word.split("").map((char, charIndex) => (
            <span
              key={`${wordIndex}-${charIndex}`}
              className="character inline-block"
            >
              {char}
            </span>
          ))}
          {wordIndex < wordsArray.length - 1 && (
            <span className="character inline-block">&nbsp;</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TextGradientOpacity;
