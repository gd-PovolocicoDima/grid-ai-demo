import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative w-full bg-dark py-12 md:py-16 lg:py-20">
      <div className="w-full px-4 md:px-6 lg:px-[100px] flex flex-col">
        
        {/* Top Block - 60/40 split */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8">
          {/* Left side - 60% */}
          <div className="flex-1 lg:w-3/5">
            <h3 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight tracking-[-0.02em] m-0 pt-[94px] lg:pt-[86px]">
              Technology innovation that scales.<br />
              AI-driven business efficiency that pays.
            </h3>
          </div>
          
          {/* Right side - 40% */}
          <div className="flex justify-end lg:w-2/5">
            <button className="flex flex-row justify-center items-center px-6 py-3 md:px-8 md:py-4 lg:px-8 lg:py-4 gap-2 md:gap-3 bg-accent border-none rounded-full text-dark text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal leading-tight cursor-pointer hover:bg-accent/90 transition-all whitespace-nowrap">
              Start Accelerating Your Growth
            </button>
          </div>
        </div>
        
        {/* Contact Information Block */}
        <div className="pt-8 md:pt-12 lg:pt-16 flex flex-col gap-4 md:gap-6">
          <div className="flex items-start gap-3 md:gap-4">
            <Image 
              src="/location.svg" 
              alt="Location" 
              width={14}
              height={18}
              className="w-[14px] h-[18px] flex-shrink-0 mt-1"
            />
            <p className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal leading-[140%] m-0">
              Oberallmendstrasse 18, 6300 Zug, Switzerland
            </p>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <Image 
              src="/phone.svg" 
              alt="Phone" 
              width={14}
              height={18}
              className="w-[14px] h-[18px] flex-shrink-0"
            />
            <a href="tel:+31753020011" className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal leading-[140%] no-underline hover:text-accent transition-colors">
              +31753020011
            </a>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <Image 
              src="/phone.svg" 
              alt="Email" 
              width={14}
              height={18}
              className="w-[14px] h-[18px] flex-shrink-0"
            />
            <a href="mailto:contact@newbrand.com" className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal leading-[140%] no-underline hover:text-accent transition-colors">
              contact@newbrand.com
            </a>
          </div>
        </div>
        
        {/* Social Links Block */}
        <div className="pt-[160px]">
          <div className="flex flex-row items-center gap-6 md:gap-8 lg:gap-12">
            <a href="#" className="text-white text-lg md:text-xl lg:text-2xl font-normal leading-[140%] no-underline hover:text-accent transition-colors">
              Facebook
            </a>
            <a href="#" className="text-white text-lg md:text-xl lg:text-2xl font-normal leading-[140%] no-underline hover:text-accent transition-colors">
              Linkedin
            </a>
            <a href="#" className="text-white text-lg md:text-xl lg:text-2xl font-normal leading-[140%] no-underline hover:text-accent transition-colors">
              Instagram
            </a>
            <a href="#" className="text-white text-lg md:text-xl lg:text-2xl font-normal leading-[140%] no-underline hover:text-accent transition-colors">
              Youtube
            </a>
          </div>
        </div>
        
        {/* Legal Links and Copyright Block */}
        <div className="pt-[30px]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-8">
            {/* Left side - Legal links */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-6">
              <a href="#" className="text-gray text-xs font-normal leading-[130%] tracking-[0.02em] uppercase no-underline hover:text-white transition-colors">
                Responsible Disclosure Policy
              </a>
              <a href="#" className="text-gray text-xs font-normal leading-[130%] tracking-[0.02em] uppercase no-underline hover:text-white transition-colors">
                Accessibility Statement
              </a>
              <a href="#" className="text-gray text-xs font-normal leading-[130%] tracking-[0.02em] uppercase no-underline hover:text-white transition-colors">
                DO not sell or share my personal information
              </a>
            </div>
            
            {/* Right side - Copyright */}
            <div className="text-gray text-xs font-normal leading-[130%] tracking-[0.02em] uppercase text-left lg:text-right">
              Copyright © 2025 Grid Dynamics Holdings, Inc. All rights reserved.
            </div>
          </div>
        </div>
        
        {/* Horizontal Line */}
        <div className="pt-[15px]">
          <div className="w-full h-0 border-t border-white/25" style={{background: 'linear-gradient(270deg, rgba(255, 255, 255, 0.25) 0%, rgba(122, 147, 182, 0) 100%)', transform: 'rotate(-180deg)'}}></div>
        </div>
        
        {/* Bottom Block - Logo and Website */}
        <div className="pt-[30px]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-8">
            {/* Left side - Grid Dynamics Logo */}
            <div className="flex items-center gap-3 md:gap-4">
              <Image 
                src="/grid_dynamics.svg" 
                alt="Grid Dynamics" 
                width={38}
                height={38}
                className="w-[38px] h-[38px]"
              />
              <div className="text-white text-lg md:text-xl font-normal leading-tight">
                Grid Dynamics
              </div>
            </div>
            
            {/* Right side - Website */}
            <div className="text-white text-base md:text-lg font-normal leading-tight">
              griddynamics.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
