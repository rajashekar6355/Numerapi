"use client"; // Ensures the component is rendered on the client side.

import React, {
  useEffect,
  useRef,
  useState,
  Suspense,
  useCallback,
} from "react";
import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";

// Lazy load Spline on interaction
const useDeferredSplineLoad = () => {
  const [Spline, setSpline] = useState<null | React.ComponentType>(null);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const hasInteracted = useRef(false);

  useEffect(() => {
    // Helper to load Spline module
    const loadSpline = async () => {
      if (!hasInteracted.current) return;
      const module = await import("@splinetool/react-spline");
      setSpline(() => module.default);
      setIsSplineLoaded(true);
    };

    // Trigger Spline load on first interaction
    const onInteraction = () => {
      if (!hasInteracted.current) {
        hasInteracted.current = true;
        loadSpline();
      }
    };

    // Add interaction listeners (scroll, mousemove)
    window.addEventListener("scroll", onInteraction, { once: true });
    window.addEventListener("mousemove", onInteraction, { once: true });

    return () => {
      window.removeEventListener("scroll", onInteraction);
      window.removeEventListener("mousemove", onInteraction);
    };
  }, []);

  return { Spline, isSplineLoaded };
};

// Custom hook to track the relative mouse position inside the referenced element (with debounce).
const useRelativeMousePosition = (ref: React.MutableRefObject<null>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = useCallback(
    (event: { clientX: number; clientY: number }) => {
      if (!ref.current) return;
      const { top, left } = ref.current.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      requestAnimationFrame(() => updateMousePosition(event));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [updateMousePosition]);

  return [mouseX, mouseY];
};

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const borderedDivRef = useRef(null);

  // Use deferred loading of Spline
  const { Spline, isSplineLoaded } = useDeferredSplineLoad();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);
  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section className="py-20 md:py-24" ref={sectionRef}>
      <div className="container">
        <motion.div
          ref={borderedDivRef}
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative group"
          style={{
            backgroundPositionY,
            backgroundImage: `url(${starsBg.src})`,
          }}
        >
          <div className="absolute inset-0">
            {/* Lazy load Spline using Suspense */}
            <Suspense fallback={<div className="loader">Loading...</div>}>
              {isSplineLoaded && Spline && (
                <Spline
                scene="https://prod.spline.design/sC2EdZodA6tnZ53j/scene.splinecode" 
                className="min-h-fit absolute z-10"
              />
              )}
            </Suspense>
          </div>

          {/* Apply mouse tracking mask effect */}
          <motion.div className="absolute inset-0" style={{ maskImage }} />

          <div className="absolute bottom-1 bg-black mb-2.5 z-20 right-4 text-white font-spaceMono px-9 py-3 rounded-lg">
            NumeraPi
          </div>

          <div className="relative"> 
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">
              NumerAPI is for everyone?
            </h2>
            <p className="text-center text-lg md:text-xl max-w-sm mx-auto text-white/70 px-4 mt-5 tracking-tight">
              Join NumerAPI today to supercharge your productivity with seamless
              GitHub integration and AI-driven features!
            </p>
            <div className="flex justify-center mt-8">
              <Button>Join Waitlist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// scene="https://prod.spline.design/sC2EdZodA6tnZ53j/scene.splinecode"
