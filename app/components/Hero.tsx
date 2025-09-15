export default function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[800px] lg:h-[1080px] bg-cover bg-center flex items-center justify-center" 
             style={{backgroundImage: 'radial-gradient(100% 316.05% at 100% 97.64%, #081319 0%, rgba(8, 19, 25, 0) 100%), url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'}}>
      <div className="absolute w-full md:w-[800px] lg:w-[1237px] h-full right-0 top-0 bg-gradient-to-l from-dark/75 to-transparent"></div>
      
      <div className="relative z-10 w-full max-w-[1920px] px-4 md:px-8 lg:px-[100px] flex flex-col items-start gap-4 md:gap-6 lg:gap-10">
        <h1 className="text-white text-4xl md:text-6xl lg:text-8xl xl:text-[140px] font-normal leading-[100%] tracking-[-0.02em] m-0 max-w-[1720px]">
          Fuel Your Business Growth
        </h1>
        
        <div className="mt-4 md:mt-6 lg:mt-10">
          <button className="flex flex-row justify-center items-center px-4 py-2 md:px-6 md:py-3 lg:px-[30px] lg:py-[15px] gap-2 md:gap-[10px] bg-accent border-none rounded-full text-dark text-sm md:text-lg lg:text-[32px] font-normal leading-tight cursor-pointer hover:bg-accent/90 transition-all">
            Start Accelerating Your Growth
          </button>
        </div>
        
        <p className="text-white text-sm md:text-lg lg:text-2xl font-normal leading-[140%] max-w-[553px] m-0">
          Technology innovation that scales. AI-driven business efficiency that pays.
        </p>
        
        {/* Dynamic Block - Hidden on mobile, visible on larger screens */}
        <div className="hidden lg:flex absolute w-[1820px] h-[549px] left-[100px] top-[835px] gap-0">
          <div className="w-[413px] h-[549px] bg-primary rounded-l-[30px] p-[30px] flex flex-col justify-center gap-[30px]">
            <div className="w-[80px] h-[80px] relative">
              <div className="w-[80px] h-[80px] bg-dark rounded-full"></div>
            </div>
            <h3 className="text-dark text-4xl font-normal leading-[43px] m-0">Extend Your Engineering Team</h3>
            <div className="flex flex-row items-center gap-[15px]">
              <div className="w-[30px] h-[10px] bg-dark rounded-full"></div>
              <div className="w-[10px] h-[10px] bg-gray rounded-full"></div>
              <div className="w-[10px] h-[10px] bg-gray rounded-full"></div>
              <div className="w-[10px] h-[10px] bg-gray rounded-full"></div>
            </div>
          </div>
          
          <div className="w-[413px] h-[549px] bg-primary p-[30px] flex flex-col justify-center gap-[30px]">
            <div className="w-[80px] h-[80px] bg-cover bg-center rounded-full" 
                 style={{backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80)'}}></div>
            <p className="text-dark text-[32px] font-normal leading-[38px] m-0">
              "Grid Dynamics brought our org ahead quicker than any firm we've ever worked with. Period."
            </p>
            <div className="flex flex-col gap-[7px]">
              <div className="text-dark text-2xl font-medium leading-[29px]">John Wayne</div>
              <div className="text-text-dark text-base font-normal leading-[19px]">CTO, MegaCorp</div>
            </div>
          </div>
          
          <div className="w-[411px] h-[549px] bg-cover bg-center" 
               style={{backgroundImage: 'url(https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)'}}></div>
        </div>
      </div>
    </section>
  );
}
