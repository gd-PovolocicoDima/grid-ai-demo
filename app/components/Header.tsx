import { NavbarSection } from "../types";
import Navigation from "./Navigation";

export default function Header({ navbar }: { navbar: NavbarSection }) {
  return (
    <header className="relative w-full min-h-screen">
      {/* Navigation - fixed at top */}
      <Navigation navbar={navbar} />

      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(100% 316.05% at 100% 97.64%, #081319 0%, rgba(8, 19, 25, 0) 100%), url(/cf1d33eaeae67aa8f6670e70d21deaa092c3e9ad.jpg)",
        }}>
        {/* Hero Overlay */}
        <div
          className="absolute w-full md:w-1/2 lg:w-2/3 h-full right-0 top-0"
          style={{
            background:
              "radial-gradient(100% 240.94% at 100% 100%, rgba(8, 19, 25, 0.75) 0%, rgba(8, 19, 25, 0) 100%)",
          }}></div>

        {/* Main Content Container */}
        <div className="relative z-10 w-full px-4 md:px-6 lg:px-[100px] flex flex-col items-start gap-6 md:gap-8 lg:gap-12">
          {/* Intro Header */}
          <div className="w-full">
            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal leading-tight tracking-tight m-0">
              AI Automation solutions for European SMBs
            </h1>
          </div>

          {/* Top-Tier Engineering Talent */}
          <div className="w-full flex justify-end">
            <p className="text-white text-lg md:text-2xl lg:text-3xl xl:text-4xl font-normal leading-tight tracking-[0.05em] uppercase text-right max-w-2xl">
              Top-Tier Engineering Talent
            </p>
          </div>

          {/* Main CTA */}
          <div className="w-full flex justify-start">
            <button className="flex flex-row justify-center items-center px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 gap-2 md:gap-3 bg-accent border-none rounded-full text-dark text-sm md:text-base lg:text-lg xl:text-xl font-normal leading-tight cursor-pointer hover:bg-accent/90 transition-all">
              Get Your Custom Solution
            </button>
          </div>

          {/* Intro Paragraph */}
          <div className="w-full flex justify-end">
            <p className="text-white text-base md:text-lg lg:text-xl xl:text-2xl font-normal leading-relaxed text-right max-w-2xl">
              We help European SMBs boost revenue and maximize operational
              efficiency by providing custom AI solutions and expert engineering
              teams.
            </p>
          </div>
        </div>

        {/* Dynamic Block - Carousel in bottom right */}
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-4xl h-80 gap-0 hidden xl:flex">
          {/* Services Slider */}
          <div className="w-1/3 h-full bg-primary rounded-l-3xl p-6 lg:p-8 flex flex-col justify-center gap-6">
            <div className="w-16 h-16 lg:w-20 lg:h-20 relative">
              <div className="w-full h-full bg-dark rounded-full"></div>
            </div>
            <h3 className="text-dark text-xl lg:text-2xl xl:text-3xl font-normal leading-tight m-0">
              Extend Your Engineering Team
            </h3>
            <div className="flex flex-row items-center gap-3">
              <div className="w-6 h-3 bg-dark rounded-full"></div>
              <div className="w-2 h-2 bg-gray rounded-full"></div>
              <div className="w-2 h-2 bg-gray rounded-full"></div>
              <div className="w-2 h-2 bg-gray rounded-full"></div>
            </div>
          </div>

          {/* Testimonial Block */}
          <div className="w-1/3 h-full bg-primary p-6 lg:p-8 flex flex-col justify-center gap-6">
            <div
              className="w-16 h-16 lg:w-20 lg:h-20 bg-cover bg-center rounded-full"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80)",
              }}></div>
            <p className="text-dark text-lg lg:text-xl xl:text-2xl font-normal leading-relaxed m-0">
              "Grid Dynamics brought our org ahead quicker than any firm we've
              ever worked with. Period."
            </p>
            <div className="flex flex-col gap-2">
              <div className="text-dark text-lg lg:text-xl font-medium leading-tight">
                John Wayne
              </div>
              <div className="text-text-dark text-sm lg:text-base font-normal leading-tight">
                CTO, MegaCorp
              </div>
            </div>
          </div>

          {/* Photo */}
          <div
            className="w-1/3 h-full bg-cover bg-center rounded-r-3xl"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)",
            }}></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute left-4 md:left-8 lg:left-12 top-1/2 transform -translate-y-1/2 -rotate-90 hidden lg:block">
          <div className="w-6 h-6 md:w-7 md:h-7 bg-gradient-to-r from-white/25 to-transparent rounded-full"></div>
        </div>
      </section>
    </header>
  );
}
