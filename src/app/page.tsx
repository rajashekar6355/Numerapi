import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Features } from "@/sections/Features";
import { LanchingSoonBadge } from "@/sections/LanchingSoonBadge";
import { Suspense, lazy } from "react";
import VideoPlayer from "@/sections/VideoSection";
import JoinWaitlistForm from "@/sections/JoinWaitlist";
import AryuemaanImage from "@/assets/teamimages/Aryuemaan.jpeg"; // Import your first image
import rajashekar from "@/assets/teamimages/Rajashekar.jpeg"; // Import your first image
import NarenderImage from "@/assets/teamimages/NaranderaChowdhary.jpg"; // Import your second image


// Lazy load the components
const OurTeam = lazy(() =>
  import("@/sections/OurTeam").then((module) => ({ default: module.OurTeam }))
);
const OurServices = lazy(() =>
  import("@/sections/OurServices").then((module) => ({
    default: module.OurServices,
  }))
);
const CallToAction = lazy(() =>
  import("@/sections/CallToAction").then((module) => ({
    default: module.CallToAction,
  }))
);

export default function Home() {
  return (
    <>
      <Header />
      <div style={{ position: "relative" }}>
        <LanchingSoonBadge text={"We are launching soon"} />
        <Hero />
      </div>
      
      <VideoPlayer />
      <Features />

      {/* Load OurServices first */}
      <Suspense fallback={<div>Loading Our Services...</div>}>
        <OurServices />
      </Suspense>

      {/* Load OurTeam next */}
      <Suspense fallback={<div>Loading Team...</div>}>
        <OurTeam
          items={[
            {
              id: 1,
              name: "Aryuemaan Kumar Chowdhury",
              designation: "CEO",
              content:
                "Leading the company with a focus on innovation and strategic growth.",
              image: AryuemaanImage, // Use imported image
            },
            {
              id: 2,
              name: "Narender Chowdhary",
              designation: "Director",
              content:
                "Driving product development and enhancing user experience to deliver world-class solutions.",
              image: NarenderImage, // Use imported image
            },
            {
              id: 3,
              name: "MudholkerRajashekar",
              designation: "Web Developer",
              content:
                "Specializing in building scalable, efficient, and user-friendly web interfaces.",
              image: rajashekar,
            },
          ]}
        />
      </Suspense>

      {/* Load CallToAction last */}
      <Suspense fallback={<div>Loading Call to Action...</div>}>
        <CallToAction />
      </Suspense>
      <div className="flex my-4 justify-center items-center">
        <JoinWaitlistForm />
      </div>
      <Footer />
    </>
  );
}
