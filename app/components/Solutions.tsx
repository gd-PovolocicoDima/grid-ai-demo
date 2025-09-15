export default function Solutions() {
  return (
    <section className="relative w-full min-h-[800px] md:min-h-[1000px] lg:min-h-[1442px] px-4 md:px-8 lg:px-[100px] py-8 md:py-12 lg:py-[100px] flex flex-col gap-8 md:gap-12 lg:gap-[60px]">
      <div className="flex flex-row items-center gap-2 md:gap-[15px] self-end">
        <div className="text-gray text-lg md:text-xl lg:text-2xl font-normal leading-[130%]">(02)</div>
        <h2 className="text-gray text-lg md:text-xl lg:text-2xl font-normal leading-[130%] tracking-[0.1em] uppercase">SOLUTIONS FOR ACCELERATED GROWTH</h2>
      </div>
      
      <p className="text-dark text-2xl md:text-4xl lg:text-[68px] font-normal leading-[120%] tracking-[-0.03em] m-0 max-w-[1720px]">
        Our mission is to help small and medium-sized businesses innovate and scale. We combine top engineering talent with cutting-edge AI technology to build robust solutions that solve your biggest challenges, reduce costs, and unlock new revenue streams.
      </p>
      
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-[30px] items-start">
        <div className="w-full lg:w-[799px] h-[300px] md:h-[400px] lg:h-[800px] bg-cover bg-center rounded-[30px] lg:rounded-r-[30px]" 
             style={{backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'}}></div>
        
        <div className="flex-1 flex flex-col gap-6 md:gap-8 lg:gap-[60px]">
          <div className="flex flex-col gap-2 md:gap-[15px]">
            <h3 className="text-dark text-2xl md:text-3xl lg:text-[48px] font-normal leading-tight tracking-[-0.02em] m-0">Engineering Team Extension</h3>
            <div className="w-full h-[2px] md:h-[3px] bg-dark"></div>
          </div>
          <p className="text-gray text-sm md:text-lg lg:text-xl font-normal leading-[140%] m-0">
            Seamlessly scale your team with AI-trained engineers. Get access to a vetted pool of top-tier talent with deep domain expertise and a cultural fit for your business. We provide reliable, long-term talent with minimal attrition risk, helping you accelerate your projects and maintain continuous, best-in-class performance.
          </p>
          
          <div className="flex flex-col gap-2 md:gap-[15px]">
            <h3 className="text-border-gray text-2xl md:text-3xl lg:text-[48px] font-normal leading-tight tracking-[-0.02em] m-0">Engineering Teams Deployment</h3>
            <div className="w-full h-[2px] md:h-[3px] bg-border-gray"></div>
          </div>
          
          <div className="flex flex-col gap-2 md:gap-[15px]">
            <h3 className="text-border-gray text-2xl md:text-3xl lg:text-[48px] font-normal leading-tight tracking-[-0.02em] m-0">AI Transformation Consulting</h3>
            <div className="w-full h-[2px] md:h-[3px] bg-border-gray"></div>
          </div>
          
          <div className="flex flex-col gap-2 md:gap-[15px]">
            <h3 className="text-border-gray text-2xl md:text-3xl lg:text-[48px] font-normal leading-tight tracking-[-0.02em] m-0">AI Engineering</h3>
            <div className="w-full h-[2px] md:h-[3px] bg-border-gray"></div>
          </div>
          
          <p className="text-dark text-lg md:text-xl lg:text-[28px] font-normal leading-[140%] m-0">
            Whether you need to augment your team or deploy a complete solution, we deliver the expertise you need to succeed.
          </p>
          
          <button className="flex flex-row justify-center items-center px-4 py-2 md:px-6 md:py-3 lg:px-[25px] lg:py-[10px] gap-1 md:gap-[5px] border-2 md:border-[3px] border-dark rounded-full bg-transparent text-dark text-sm md:text-base font-normal tracking-[0.05em] cursor-pointer self-start hover:bg-dark hover:text-white transition-all">
            LEARN MORE
            <div className="w-2 h-2 md:w-3 md:h-3 border border-dark rounded-sm rotate-45"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
