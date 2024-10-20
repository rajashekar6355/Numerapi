"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
  image: StaticImageData | string; // Update type to accept StaticImageData
};

export const OurTeam = ({
  items = [], // Accept items as props
  offset,
  scaleFactor,
}: {
  items?: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        if (prevCards.length === 0) return prevCards; // Handle empty state
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div id="OurTeam" className="flex flex-col items-center">
      <div className="py-3 m-4 flex flex-col justify-center">
        <h2 className="m-auto text-2xl font-bold text-gray-900 dark:text-white">
          {" "}
          {/* Title Styles */}
          Our Team
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 flex text-center py-3 m-auto w-9/12">
          {" "}
          {/* Paragraph Styles */}
          Our dedicated team combines diverse expertise and innovative thinking to drive excellence, ensuring our projects succeed and deliver exceptional value to our clients and users.
        </p>
      </div>

      <div className="relative h-60 w-60 md:h-60 md:w-96">
        {cards.map((card, index) => {
          if (!card) return null; // Prevent accessing undefined card

          return (
            <motion.div
              key={card.id}
              className="absolute h-60 w-60 md:h-60 md:w-96 rounded-3xl shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                zIndex: cards.length - index, // decrease z-index for the cards that are behind
              }}
            >
              {/* Overlay for text */}
              <div className="relative flex flex-col justify-end h-full p-4 bg-black rounded-3xl">
                {" "}
                {/* Increased opacity */}
                <Image
                  src={card.image} // Use Image component from Next.js
                  alt={card.name} // Set alt text for accessibility
                  layout="fill" // Fill the parent element
                  className="rounded-3xl object-cover" // Make image slightly transparent
                />
                <div className="text-black z-10">
                  {" "}
                  {/* Changed text color to black */}
                  <p className="text-xl font-semibold">{card.name}</p>
                  <p className="text-sm font-medium text-black">
                    {" "}
                    {/* Adjusted for better contrast */}
                    {card.designation}
                  </p>
                  <p className="mt-2 text-sm text-black font-light">
                    {card.content}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
