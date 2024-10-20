"use client";
import avatar1 from "@/assets/avatar-1.png"; // Importing avatar images
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image"; // Importing Next.js Image component for optimized images
import { motion } from "framer-motion";

// Array of testimonials, each containing text, name, title, and avatar image
const testimonials = [
  {
    text: "“NumerAPI has drastically improved how we manage our codebase. The seamless integration with GitHub and high-speed GPUs has made our workflow faster and more efficient.”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“Thanks to NumerAPI's AI-driven environment, we’ve seen a significant boost in productivity. It’s like having an extra team member optimizing every step of our development process!”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The interface of NumerAPI is intuitive and smooth. It has allowed us to run GPU-intensive tasks without any hiccups, helping us meet deadlines faster.”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“NumerAPI is a game-changer. The AI tools integrated into the platform have improved how our team works with large datasets and models, saving hours of manual effort.”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

// Testimonials functional component
export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      {" "}
      {/* Vertical padding for the section */}
      <div className="container">
        {" "}
        {/* Centers the content */}
        {/* Main heading */}
        <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">
          Beyond Expectations.
        </h2>
        {/* Subheading with description */}
        <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm mx-auto">
          NumerAPI offers innovative features that enhance productivity and streamline workflows, exceeding user expectations.
        </p>
        {/* Overflow hidden container for testimonials */}
        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          {/* Flex container for the testimonials */}
          <motion.div
            initial={{
              translateX: "-50%",
            }}
            animate={{
              translateX: "0",
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
            className="flex gap-5 pr-5 flex-none"
          >
            {[...testimonials, ...testimonials].map((testimonial) => (
              <div
                key={testimonial.name} // Unique key for each testimonial
                className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,#7A1CAC,black)] max-w-xs md:max-w-md flex-none"
              >
                {/* Testimonial text */}
                <div className="text-lg tracking-tight md:text-2xl">
                  {testimonial.text}
                </div>

                {/* User info section */}
                <div className="flex items-center gap-3 mt-5">
                  <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[#4F1787] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                    <Image
                      src={testimonial.avatarImg} // Avatar image for the testimonial
                      alt={`Avatar for ${testimonial.name}`} // Alt text for accessibility
                      className="h-11 w-11 rounded-lg grayscale"
                    />
                  </div>
                  <div>
                    <div>{testimonial.name}</div>{" "}
                    {/* Name of the testimonial giver */}
                    <div className="text-white/50 text-sm">
                      {testimonial.title} {/* Title of the testimonial giver */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
