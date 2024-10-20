import Logo from "@/assets/logo.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";
import { IconBrandLinkedin } from "@tabler/icons-react";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15 ">
      {/* Main container to center the content */}
      <div className="container">
        {/* Flex container to arrange logo, navigation links, and social icons */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          {/* Logo Section: Display company logo and name */}
          <a href="/">
          <div className="flex gap-2 items-center lg:flex-1">
            <Logo className="h-6 w-6" /> {/* Import SVG logo and style it */}
            <div className="font-medium">NumeraPi</div>
          </div>
          </a>

          {/* Navigation Links Section: Flexbox for responsiveness */}
          <nav className="flex flex-col w-10 lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
            {/* Each link has hover and text styling for transitions */}
            <a
              href="#features"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Features
            </a>
            <a
              href="#OurServices"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              What you get
            </a>
            <a
              href="#OurTeam"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              AboutUs
            </a>
            <a
              href="#JoinWaitlistform"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Join Waitlist
            </a>
          </nav>

          {/* Social Icons Section: Flex to align icons, same hover effect */}
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            {/* Import social icons and style them with hover transitions */}
            <a href="#" aria-label="Visit our X social media page">
              <IconBrandLinkedin className="text-white/40 hover:text-white transition" />
            </a>
            <a href="#" aria-label="Visit our Instagram page">
              <InstaSocial className="text-white/40 hover:text-white transition" />
            </a>
            <a href="#" aria-label="Visit our YouTube channel">
              <YTSocial className="text-white/40 hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
