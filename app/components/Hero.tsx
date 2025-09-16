export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center" 
             style={{backgroundImage: 'radial-gradient(100% 316.05% at 100% 97.64%, #081319 0%, rgba(8, 19, 25, 0) 100%), url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'}}>
      <div className="absolute w-full md:w-1/2 lg:w-2/3 h-full right-0 top-0 bg-gradient-to-l from-dark/75 to-transparent"></div>
      
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-6 lg:px-8 flex flex-col items-start gap-6 md:gap-8 lg:gap-12">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal leading-tight tracking-tight m-0">
          Fuel Your Business Growth
        </h1>
        
        <div className="mt-4 md:mt-6">
          <button className="flex flex-row justify-center items-center px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 gap-2 md:gap-3 bg-accent border-none rounded-full text-dark text-sm md:text-base lg:text-lg xl:text-xl font-normal leading-tight cursor-pointer hover:bg-accent/90 transition-all">
            Start Accelerating Your Growth
          </button>
        </div>
        
        <p className="text-white text-base md:text-lg lg:text-xl xl:text-2xl font-normal leading-relaxed max-w-2xl m-0">
          Technology innovation that scales. AI-driven business efficiency that pays.
        </p>
        
        {/* Dynamic Block - Hidden on mobile, visible on larger screens */}
        <div className="hidden xl:flex absolute bottom-8 right-8 w-4/5 max-w-5xl h-80 gap-0">
          <div className="w-1/3 h-full bg-primary rounded-l-3xl p-6 lg:p-8 flex flex-col justify-center gap-6">
            <div className="w-16 h-16 lg:w-20 lg:h-20 relative">
              <div className="w-full h-full bg-dark rounded-full"></div>
            </div>
            <h3 className="text-dark text-xl lg:text-2xl xl:text-3xl font-normal leading-tight m-0">Extend Your Engineering Team</h3>
            <div className="flex flex-row items-center gap-3">
              <div className="w-6 h-3 bg-dark rounded-full"></div>
              <div className="w-2 h-2 bg-gray rounded-full"></div>
              <div className="w-2 h-2 bg-gray rounded-full"></div>
              <div className="w-2 h-2 bg-gray rounded-full"></div>
            </div>
          </div>
          
          <div className="w-1/3 h-full bg-primary p-6 lg:p-8 flex flex-col justify-center gap-6">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-cover bg-center rounded-full" 
                 style={{backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80)'}}></div>
            <p className="text-dark text-lg lg:text-xl xl:text-2xl font-normal leading-relaxed m-0">
              "Grid Dynamics brought our org ahead quicker than any firm we've ever worked with. Period."
            </p>
            <div className="flex flex-col gap-2">
              <div className="text-dark text-lg lg:text-xl font-medium leading-tight">John Wayne</div>
              <div className="text-text-dark text-sm lg:text-base font-normal leading-tight">CTO, MegaCorp</div>
            </div>
          </div>
          
          <div className="w-1/3 h-full bg-cover bg-center rounded-r-3xl" 
               style={{backgroundImage: 'url(https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)'}}></div>
        </div>
      </div>
    </section>
  );
}
