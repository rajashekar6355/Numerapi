import LogoIcon from "@/assets/logo.svg"; // Importing the logo icon from local assets
import MenuIcon from "@/assets/icon-menu.svg"; // Importing the menu icon from local assets (likely used for mobile menu)
import { Button } from "@/components/Button"; // Importing a reusable Button component from the components directory

export const Header = () => {
  return (
    <header id="Header" className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      {/* Header with padding, border, and sticky positioning on top of the page, with a z-index of 10 to stay above other content */}

      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      {/* Adds a blurred background effect only on mobile (hidden on md screens and above) */}

      <div className="container mx-auto">
        {/* Container to center the content horizontally on the page */}

        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
          {/* Main header content area with flexbox to arrange items horizontally and space between them, centered within a 2xl max-width container */}

          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          {/* Adds a blurred background effect for desktop (hidden on mobile) */}

          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex items-center justify-center border-white/15">
              <LogoIcon className="h-8 w-8" />
              {/* Logo icon container with centered alignment, rounded corners, and a border */}
            </div>
          </div>

          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a
                href="/"
                className="text-white/70 hover:text-white transition"
                aria-label="Home"
              >
                Home
              </a>
              <a
                href="#features"
                className="text-white/70 hover:text-white transition"
                aria-label="Features"
              >
                Features
              </a>
              <a
                href="#OurServices"
                className="text-white/70 hover:text-white transition"
                aria-label=" What You get"
              >
                What You get?
              </a>
              <a
                href="#OurTeam"
                className="text-white/70 hover:text-white transition"
                aria-label="AboutUs"
              >
                AboutUs
              </a>
              {/* Navigation links that are hidden on mobile and displayed on desktop with hover effect */}
            </nav>
          </div>
          <a href="#JoinWaitlistform">
          <div className="flex gap-4 items-center">
            <Button>Join Waitlist</Button>
            {/* A button prompting users to join the waitlist */}

            <MenuIcon className="md:hidden" aria-label="Menu" />
            {/* Menu icon only visible on mobile (hidden on md screens and above) */}
          </div>
          </a>
        </div>
      </div>
    </header>
  );
};
