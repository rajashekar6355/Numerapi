"use client"; // Ensures the component is rendered on the client side

import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import JoinWaitlistForm from "./JoinWaitlist";

// Custom hook for mouse position
const useRlativeMousePosition = (to: React.RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePostion = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();
    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePostion);
    return () => {
      window.removeEventListener("mousemove", updateMousePostion);
    };
  }, []);

  return [mouseX, mouseY];
};

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
  const [mouseX, mouseY] = useRlativeMousePosition(borderedDivRef);
  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section className="py-20 md:py-24 relative z-10" ref={sectionRef}>
      {" "}
      {/* Section z-index fix */}
      
        <div className="container">
          <motion.div
            ref={borderedDivRef}
            className="border border-white/15 py-24 rounded-xl overflow-hidden relative group"
            style={{
              backgroundPositionY,
              backgroundImage: `url(${starsBg.src})`,
            }}
          >
            <div
              className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay 
            [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
              style={{
                backgroundImage: `url(${gridLines.src})`,
              }}
            ></div>

            <motion.div
              className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100"
              style={{
                maskImage,
                backgroundImage: `url(${gridLines.src})`,
              }}
            ></motion.div>

            <div className="relative z-20">
              {/* Ensure the form content is not blocked */}
              <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">
                Still unsure about who we are?
              </h2>
              <p className="text-center text-lg md:text-xl max-w-sm mx-auto text-white/70 px-4 mt-5 tracking-tight">
                Why wait? Join our waitlist now to experience high-performance
                computing and AI-powered code optimization!
              </p>
            </div>
            <div className="flex justify-center py-3 pt-4">
            <a href="#JoinWaitlistform">
            <Button>Join Waitlist</Button>
            </a>
            </div>
          </motion.div>
        </div>
      
    </section>
  );
};
