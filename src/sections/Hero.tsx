"use client";

import starsBg from "@/assets/stars.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export const Hero = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <motion.section
      ref={sectionRef}
      className="h-[492px] md:h-[800px] flex items-center justify-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundPositionY,
        backgroundColor: "#0E0024",
      }}
    >
      {/* Planet (AI core) */}
      <motion.div
        className="absolute h-80 w-80 md:h-[400px] md:w-[400px] bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-900 rounded-full top-1/2 left-1/2 shadow-[0_0_60px_20px_rgba(140,69,255,0.6),0_0_100px_40px_rgba(0,0,0,0.9)]"
        initial={{ x: "-150%", y: "-150%" }}
        animate={{ x: "-50%", y: "-50%", scale: [0.95, 1.05, 1], rotate: [0, 10, -10, 0] }}
        transition={{
          duration: 5, // 5 seconds for the planet animation
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {/* Glow Effect */}
        <motion.div
          className="absolute h-full w-full rounded-full"
          style={{
            boxShadow: '0 0 100px 40px rgba(140, 69, 255, 0.6), 0 0 200px 80px rgba(0, 0, 0, 0.9)',
          }}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Rotating rings (unchanged) */}
      {/* Rotating ring 1 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="hidden md:block absolute h-[344px] w-[344px] md:h-[550px] md:w-[550px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </motion.div>

      {/* Rotating ring 2 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </motion.div>

      {/* Rotating ring 3 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 left-full bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>

      {/* Main content (starts appearing while the planet moves) */}
      <motion.div
        className="container relative mt-16"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2.5, // The text appears in sync with the planet's movement
          ease: "easeInOut",
          delay: 2, // Appears after 2 seconds, before the planet fully stops
        }}
      >
        {/* Heading */}
        <motion.h1
          className="text-6xl md:text-[130px] md:leading-none font-semibold tracking-tighter bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text text-center"
        >
          NUMERAPi
        </motion.h1>
        {/* Description */}
        <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
        Unlock seamless development with NumerAPI: connect GitHub, run AI-driven code analysis, optimize, and deploy—all in a high-performance cloud environment.
        </p>
      </motion.div>
    </motion.section>
  );
};
