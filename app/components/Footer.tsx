export default function Footer() {
  return (
    <footer className="relative w-full min-h-[600px] md:min-h-[700px] lg:h-[780px] bg-dark flex items-center justify-center">
      <div className="w-full max-w-[1920px] px-4 md:px-8 lg:px-[100px] flex flex-col gap-6 md:gap-8 lg:gap-[40px]">
        <h3 className="text-white text-2xl md:text-3xl lg:text-[48px] font-normal leading-tight tracking-[-0.02em] m-0 max-w-[992px]">
          Technology innovation that scales. AI-driven business efficiency that pays.
        </h3>
        
        <div className="self-end">
          <button className="flex flex-row justify-center items-center px-4 py-2 md:px-6 md:py-3 lg:px-[30px] lg:py-[15px] gap-2 md:gap-[10px] bg-accent border-none rounded-full text-dark text-sm md:text-lg lg:text-[32px] font-normal leading-tight cursor-pointer hover:bg-accent/90 transition-all">
            Start Accelerating Your Growth
          </button>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-6 md:gap-8 lg:gap-0">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-[20px]">
            <div className="flex items-center gap-2 md:gap-[15px]">
              <div className="w-3 h-4 md:w-[14px] md:h-[18px] bg-accent rounded-sm"></div>
              <p className="text-white text-sm md:text-lg lg:text-[28px] font-normal leading-[140%] m-0">5000 Executive Parkway, Suite 520, San Ramon, CA 94583</p>
            </div>
            <div className="flex items-center gap-2 md:gap-[15px]">
              <div className="w-3 h-4 md:w-[14px] md:h-[18px] bg-accent rounded-sm"></div>
              <p className="text-white text-sm md:text-lg lg:text-[28px] font-normal leading-[140%] m-0">+1 (650) 523-5000</p>
            </div>
          </div>
          
          <div className="flex flex-row items-center gap-4 md:gap-6 lg:gap-[30px]">
            <a href="#" className="text-white text-sm md:text-lg lg:text-xl font-normal leading-[140%] no-underline hover:text-accent transition-colors">Facebook</a>
            <a href="#" className="text-white text-sm md:text-lg lg:text-xl font-normal leading-[140%] no-underline hover:text-accent transition-colors">Linkedin</a>
            <a href="#" className="text-white text-sm md:text-lg lg:text-xl font-normal leading-[140%] no-underline hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="text-white text-sm md:text-lg lg:text-xl font-normal leading-[140%] no-underline hover:text-accent transition-colors">Youtube</a>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-4 md:gap-6 lg:gap-0">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-[20px]">
            <a href="#" className="text-gray text-xs font-normal leading-[130%] tracking-[0.02em] uppercase no-underline hover:text-white transition-colors">Responsible Disclosure Policy</a>
            <a href="#" className="text-gray text-xs font-normal leading-[130%] tracking-[0.02em] uppercase no-underline hover:text-white transition-colors">Accessibility Statement</a>
            <a href="#" className="text-gray text-xs font-normal leading-[130%] tracking-[0.02em] uppercase no-underline hover:text-white transition-colors">DO not sell or share my personal information</a>
          </div>
          <div className="flex items-center gap-2 md:gap-[10px]">
            <div className="w-6 h-6 md:w-8 md:h-8 lg:w-[38px] lg:h-[38px] bg-white rounded"></div>
            <div className="text-white text-sm md:text-base font-normal leading-[19px]">griddynamics.com</div>
          </div>
          <div className="text-gray text-xs font-normal leading-[130%] tracking-[0.02em] uppercase text-left lg:text-right">
            Copyright © 2025 Grid Dynamics Holdings, Inc. All rights reserved.
          </div>
        </div>
        
        <div className="w-full h-[1px] bg-gradient-to-r from-white/25 to-transparent"></div>
      </div>
    </footer>
  );
}
