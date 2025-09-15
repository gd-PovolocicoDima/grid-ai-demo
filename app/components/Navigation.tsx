export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full h-[80px] md:h-[120px] lg:h-[171px] bg-gradient-to-b from-dark to-transparent z-50 flex items-center justify-center">
      <div className="flex flex-row justify-between items-center px-4 md:px-8 lg:px-[100px] pb-4 md:pb-8 lg:pb-[100px] pt-4 md:pt-6 lg:pt-[30px] gap-4 md:gap-8 lg:gap-[380px] w-full max-w-[1920px]">
        <div className="flex items-center gap-2 md:gap-[10px]">
          <div className="w-6 h-6 md:w-8 md:h-8 lg:w-[38px] lg:h-[38px] bg-white rounded"></div>
          <div className="text-white text-sm md:text-lg lg:text-2xl font-normal">Grid Dynamics</div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-row items-center gap-[60px]">
          <a href="#services" className="text-white text-base font-normal no-underline tracking-[0.05em] uppercase hover:text-accent transition-colors">SERVICES</a>
          <a href="#clients" className="text-white text-base font-normal no-underline tracking-[0.05em] uppercase hover:text-accent transition-colors">CLIENTS</a>
          <a href="#industry" className="text-white text-base font-normal no-underline tracking-[0.05em] uppercase hover:text-accent transition-colors">INDUSTRY SOLUTIONS</a>
          <a href="#stories" className="text-white text-base font-normal no-underline tracking-[0.05em] uppercase hover:text-accent transition-colors">SUCCESS STORIES</a>
        </div>
        
        {/* Mobile Navigation Button */}
        <button className="lg:hidden flex flex-row justify-center items-center px-3 py-2 gap-1 bg-gradient-to-r from-white/25 to-transparent border-none rounded-full text-white text-xs font-normal tracking-[0.05em] cursor-pointer hover:bg-white/30 transition-all">
          MENU
          <div className="w-2 h-2 border border-white rounded-sm rotate-45"></div>
        </button>
        
        {/* Desktop CTA Button */}
        <button className="hidden lg:flex flex-row justify-center items-center px-[25px] py-[10px] gap-[5px] bg-gradient-to-r from-white/25 to-transparent border-none rounded-full text-white text-base font-normal tracking-[0.05em] cursor-pointer hover:bg-white/30 transition-all">
          LET'S TALK
          <div className="w-3 h-3 border border-white rounded-sm rotate-45"></div>
        </button>
      </div>
    </nav>
  );
}
