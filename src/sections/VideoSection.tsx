"use client"; // For Next.js 13+ client components

import React, { useEffect, useRef } from "react";

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null); // Explicitly type the ref

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play(); // Now TypeScript knows videoRef.current is an HTMLVideoElement
      }
    }, 7000); // 5000 ms = 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div>
     
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-4xl aspect-w-16 aspect-h-9">
          <video
            ref={videoRef} // Attach the ref to the video element
            className="w-full h-full"
            muted
            playsInline
            controls // Ensures the video plays inline without fullscreen on mobile devices
          >
            <source src="/assets/aboutnumerapi.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
