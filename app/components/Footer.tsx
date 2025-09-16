export default function Footer() {
  return (
    <footer className="relative w-full min-h-screen bg-dark flex items-center justify-center">
      <div className="w-full max-w-7xl px-4 md:px-6 lg:px-8 flex flex-col gap-8 md:gap-12 lg:gap-16">
        <h3 className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal leading-tight tracking-tight m-0 max-w-4xl">
          Technology innovation that scales. AI-driven business efficiency that pays.
        </h3>
        
        <div className="self-end">
          <button className="flex flex-row justify-center items-center px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 gap-2 md:gap-3 bg-accent border-none rounded-full text-dark text-sm md:text-base lg:text-lg xl:text-xl font-normal leading-tight cursor-pointer hover:bg-accent/90 transition-all">
            Start Accelerating Your Growth
          </button>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-6 md:gap-8 lg:gap-12">
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-3 h-4 md:w-4 md:h-5 bg-accent rounded-sm"></div>
              <p className="text-white text-sm md:text-base lg:text-lg font-normal leading-relaxed m-0">5000 Executive Parkway, Suite 520, San Ramon, CA 94583</p>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-3 h-4 md:w-4 md:h-5 bg-accent rounded-sm"></div>
              <p className="text-white text-sm md:text-base lg:text-lg font-normal leading-relaxed m-0">+1 (650) 523-5000</p>
            </div>
          </div>
          
          <div className="flex flex-row items-center gap-4 md:gap-6 lg:gap-8">
            <a href="#" className="text-white text-sm md:text-base lg:text-lg font-normal leading-relaxed no-underline hover:text-accent transition-colors">Facebook</a>
            <a href="#" className="text-white text-sm md:text-base lg:text-lg font-normal leading-relaxed no-underline hover:text-accent transition-colors">Linkedin</a>
            <a href="#" className="text-white text-sm md:text-base lg:text-lg font-normal leading-relaxed no-underline hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="text-white text-sm md:text-base lg:text-lg font-normal leading-relaxed no-underline hover:text-accent transition-colors">Youtube</a>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-4 md:gap-6 lg:gap-8">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-6">
            <a href="#" className="text-gray text-xs font-normal leading-relaxed tracking-wider uppercase no-underline hover:text-white transition-colors">Responsible Disclosure Policy</a>
            <a href="#" className="text-gray text-xs font-normal leading-relaxed tracking-wider uppercase no-underline hover:text-white transition-colors">Accessibility Statement</a>
            <a href="#" className="text-gray text-xs font-normal leading-relaxed tracking-wider uppercase no-underline hover:text-white transition-colors">DO not sell or share my personal information</a>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-white rounded"></div>
            <div className="text-white text-sm md:text-base font-normal leading-tight">griddynamics.com</div>
          </div>
          <div className="text-gray text-xs font-normal leading-relaxed tracking-wider uppercase text-left lg:text-right">
            Copyright © 2025 Grid Dynamics Holdings, Inc. All rights reserved.
          </div>
        </div>
        
        <div className="w-full h-px bg-gradient-to-r from-white/25 to-transparent"></div>
      </div>
    </footer>
  );
}
