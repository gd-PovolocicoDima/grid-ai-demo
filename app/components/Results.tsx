export default function Results() {
  return (
    <section className="relative w-full min-h-[800px] md:min-h-[1000px] lg:h-[1342px] bg-dark flex flex-col items-center px-4 md:px-8 lg:px-[100px] py-8 md:py-12 lg:py-[100px] gap-8 md:gap-12 lg:gap-[60px]">
      <div className="flex flex-row items-center gap-2 md:gap-[15px] self-end">
        <div className="text-gray text-lg md:text-xl lg:text-2xl font-normal leading-[130%]">(01)</div>
        <h2 className="text-gray text-lg md:text-xl lg:text-2xl font-normal leading-[130%] tracking-[0.1em] uppercase">RESULTS</h2>
      </div>
      
      <h3 className="text-white text-3xl md:text-5xl lg:text-[68px] font-normal leading-[100%] tracking-[-0.03em] text-center m-0">
        Driving Results for Our Clients
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-[30px] w-full max-w-[1720px]">
        <div className="w-full h-[300px] md:h-[350px] lg:h-[450px] bg-gradient-to-r from-white/25 to-transparent rounded-[30px] p-4 md:p-6 lg:p-[30px] flex flex-col justify-center items-center text-center gap-4 md:gap-6 lg:gap-[20px]">
          <div className="text-white text-6xl md:text-8xl lg:text-[120px] font-normal leading-[100%]">50+</div>
          <p className="text-white text-sm md:text-lg lg:text-[32px] font-normal leading-[120%] m-0">Fortune-1000 customers with AI solutions delivered</p>
        </div>
        
        <div className="w-full h-[300px] md:h-[350px] lg:h-[450px] rounded-[30px] p-4 md:p-6 lg:p-[30px] flex flex-col justify-center items-center text-center gap-4 md:gap-6 lg:gap-[20px]" 
             style={{background: 'radial-gradient(94.34% 94.34% at 3.47% 97.81%, #080A1D 0%, #1E2BD4 50.96%, #C8C8F9 100%)'}}>
          <div className="w-8 h-6 md:w-10 md:h-8 lg:w-[48px] lg:h-[36px] bg-accent rounded"></div>
          <p className="text-white text-sm md:text-lg lg:text-[32px] font-normal leading-[120%] m-0">We work with major hyperscalers (Google, AWS, Azure) and platforms (DataBricks, Vercel, Nvidia Agentic)</p>
        </div>
        
        <div className="w-full h-[300px] md:h-[350px] lg:h-[450px] bg-gradient-to-r from-white/25 to-transparent rounded-[30px] p-4 md:p-6 lg:p-[30px] flex flex-col justify-center items-center text-center gap-4 md:gap-6 lg:gap-[20px]">
          <div className="text-white text-6xl md:text-8xl lg:text-[120px] font-normal leading-[100%]">400+</div>
          <p className="text-white text-sm md:text-lg lg:text-[32px] font-normal leading-[120%] m-0">Architects, Data Scientists, AI & ML Engineers and Big Data Engineers</p>
        </div>
        
        <div className="w-full h-[300px] md:h-[350px] lg:h-[450px] rounded-[30px] p-4 md:p-6 lg:p-[30px] flex flex-col justify-center items-center text-center gap-4 md:gap-6 lg:gap-[20px]" 
             style={{background: 'radial-gradient(94.34% 94.34% at 3.47% 97.81%, #080A1D 0%, #1E2BD4 50.96%, #C8C8F9 100%)'}}>
          <div className="w-8 h-6 md:w-10 md:h-8 lg:w-[48px] lg:h-[36px] bg-accent rounded"></div>
          <p className="text-white text-sm md:text-lg lg:text-[32px] font-normal leading-[120%] m-0">Enabled by a well-defined framework for AI Transformation Enablement and end-to-end AI solutions implementation</p>
        </div>
      </div>
    </section>
  );
}
