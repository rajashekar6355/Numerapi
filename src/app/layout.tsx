"use client"; // Ensure client-side rendering

import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Inter } from "next/font/google";
import { useTransform } from "framer-motion";
import starsBg from "@/assets/stars.png";
import { ConvexClientProvider } from "./ConvexClientProvider";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { scrollYProgress } = useScroll();
  const progressWheel = useRef<SVGCircleElement>(null);
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const borderedDivRef = useRef<HTMLDivElement>(null);
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  useEffect(() => {
    return scrollYProgress.onChange((latestProgress) => {
      if (progressWheel.current) {
        const offset = circumference - latestProgress * circumference;
        progressWheel.current.style.strokeDasharray = `${circumference} ${circumference}`;
        progressWheel.current.style.strokeDashoffset = `${offset}`;
      }
    });
  }, [scrollYProgress, circumference]);

  // Lazy load data example (replace with actual data)
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    // Simulate loading of heavy items
    const loadData = async () => {
      // Simulating a delay for loading
      setTimeout(() => {
        setItems(Array.from({ length: 1000 }, (_, index) => index + 1)); // Lazy loading 1000 items
      }, 2000);
    };
    loadData();
  }, []);

  return (
    <html lang="en">
      <body
        className={twMerge(inter.className, "bg-black text-white antialiased")}
      >
        <motion.div
          ref={borderedDivRef}
          className="border border-white/15 rounded-xl overflow-hidden relative group"
          animate={{
            backgroundPositionX: starsBg.width,
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          style={{
            backgroundPositionY,
            backgroundImage: `url(${starsBg.src})`,
          }}
        >

<ConvexClientProvider>{children}</ConvexClientProvider>

          {/* Example SVG progress wheel */}
          <motion.svg
            className="fixed top-5 right-5 w-12 h-12"
            viewBox="0 0 100 100"
          >
            <circle
              ref={progressWheel}
              cx="50"
              cy="50"
              r="45"
              stroke="purple"
              strokeWidth="10"
              fill="transparent"
              className="transform -rotate-90 origin-center z-50"
            />
          </motion.svg>
        </motion.div>
      </body>
    </html>
  );
}
