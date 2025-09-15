export default function Industries() {
  return (
    <section className="relative w-full min-h-[1000px] md:min-h-[1500px] lg:min-h-[2370px] bg-dark px-4 md:px-8 lg:px-[100px] py-8 md:py-12 lg:py-[100px] flex flex-col gap-8 md:gap-12 lg:gap-[60px]">
      <div className="flex flex-row items-center gap-2 md:gap-[15px] self-end">
        <div className="text-gray text-lg md:text-xl lg:text-2xl font-normal leading-[130%]">(04)</div>
        <h2 className="text-gray text-lg md:text-xl lg:text-2xl font-normal leading-[130%] tracking-[0.1em] uppercase">TAILORED TO YOUR INDUSTRY</h2>
      </div>
      
      <h3 className="text-white text-2xl md:text-4xl lg:text-[68px] font-normal leading-[120%] tracking-[-0.03em] m-0 max-w-[845px]">
        Every industry has its own unique challenges and opportunities for growth.
      </h3>
      <p className="text-white text-lg md:text-xl lg:text-[28px] font-normal leading-[140%] m-0 max-w-[699px] self-end">
        We combine our expertise in AI and top-tier engineering with deep domain knowledge to deliver specialized solutions that transform your business.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-[30px] w-full max-w-[1720px]">
        <div className="w-full h-[500px] md:h-[600px] lg:h-[742px] bg-white/10 border-[3px] border-white rounded-[30px] p-4 md:p-6 lg:p-[30px] flex flex-col gap-6 md:gap-8 lg:gap-[60px]">
          <div className="w-20 h-20 md:w-32 md:h-32 lg:w-[160px] lg:h-[160px] bg-white rounded-full self-start"></div>
          <h4 className="text-white text-xl md:text-2xl lg:text-4xl font-normal leading-tight tracking-[-0.02em] m-0">Retail AI Transformation</h4>
          <p className="text-light-gray text-sm md:text-base lg:text-lg font-normal leading-[140%] m-0">
            Transform your retail or e-commerce business with AI-powered solutions. We help you accelerate revenue and boost operational efficiency through intelligent automation, personalized customer experiences, and data-driven insights. From increasing conversion rates with AI-powered product discovery to reducing costs with inventory optimization, our solutions deliver measurable ROI from day one.
          </p>
          <button className="flex flex-row justify-center items-center px-4 py-2 md:px-6 md:py-3 lg:px-[25px] lg:py-[10px] gap-1 md:gap-[5px] bg-gradient-to-r from-white/25 to-transparent border-none rounded-full text-white text-sm md:text-base font-normal tracking-[0.05em] cursor-pointer self-start hover:bg-white/30 transition-all">
            LEARN MORE
            <div className="w-2 h-2 md:w-3 md:h-3 border border-white rounded-sm rotate-45"></div>
          </button>
        </div>
        
        <div className="w-full h-[500px] md:h-[600px] lg:h-[742px] rounded-[30px] p-4 md:p-6 lg:p-[30px] flex flex-col gap-6 md:gap-8 lg:gap-[60px]" 
             style={{background: 'radial-gradient(94.34% 94.34% at 3.47% 97.81%, #080A1D 0%, #1E2BD4 50.96%, #C8C8F9 100%)'}}>
          <div className="w-20 h-20 md:w-32 md:h-32 lg:w-[160px] lg:h-[160px] bg-white rounded-full self-start"></div>
          <h4 className="text-white text-xl md:text-2xl lg:text-4xl font-normal leading-tight tracking-[-0.02em] m-0">FinTech Engineering</h4>
          <p className="text-light-gray text-sm md:text-base lg:text-lg font-normal leading-[140%] m-0">
            Enhance your FinTech solutions landscape with top-tier engineering teams and enterprise-grade expertise. We provide robust solutions that streamline operations, strengthen security, and accelerate your time-to-market. Whether you need to augment your team or deploy a complete turnkey solution, our partnerships and accelerators will help you stay on the competitive edge.
          </p>
          <button className="flex flex-row justify-center items-center px-4 py-2 md:px-6 md:py-3 lg:px-[25px] lg:py-[10px] gap-1 md:gap-[5px] bg-gradient-to-r from-white/25 to-transparent border-none rounded-full text-white text-sm md:text-base font-normal tracking-[0.05em] cursor-pointer self-start hover:bg-white/30 transition-all">
            LEARN MORE
            <div className="w-2 h-2 md:w-3 md:h-3 border border-white rounded-sm rotate-45"></div>
          </button>
        </div>
        
        <div className="w-full h-[500px] md:h-[600px] lg:h-[742px] bg-white/10 border-[3px] border-white rounded-[30px] p-4 md:p-6 lg:p-[30px] flex flex-col gap-6 md:gap-8 lg:gap-[60px]">
          <div className="w-20 h-20 md:w-32 md:h-32 lg:w-[160px] lg:h-[160px] bg-white rounded-full self-start"></div>
          <h4 className="text-white text-xl md:text-2xl lg:text-4xl font-normal leading-tight tracking-[-0.02em] m-0">Energy Sector Engineering</h4>
          <p className="text-light-gray text-sm md:text-base lg:text-lg font-normal leading-[140%] m-0">
            Modernize your energy operations with specialized engineering expertise. Our solutions are designed to help you transform grid infrastructure, accelerate clean energy adoption, and create seamless digital customer experiences. We leverage our deep domain knowledge and in-house accelerators to drive operational efficiency and measurable growth across the energy sector.
          </p>
          <button className="flex flex-row justify-center items-center px-4 py-2 md:px-6 md:py-3 lg:px-[25px] lg:py-[10px] gap-1 md:gap-[5px] bg-gradient-to-r from-white/25 to-transparent border-none rounded-full text-white text-sm md:text-base font-normal tracking-[0.05em] cursor-pointer self-start hover:bg-white/30 transition-all">
            LEARN MORE
            <div className="w-2 h-2 md:w-3 md:h-3 border border-white rounded-sm rotate-45"></div>
          </button>
        </div>
        
        <div className="w-full h-[500px] md:h-[600px] lg:h-[742px] rounded-[30px] p-4 md:p-6 lg:p-[30px] flex flex-col gap-6 md:gap-8 lg:gap-[60px]" 
             style={{background: 'radial-gradient(94.34% 94.34% at 3.47% 97.81%, #080A1D 0%, #1E2BD4 50.96%, #C8C8F9 100%)'}}>
          <div className="w-20 h-20 md:w-32 md:h-32 lg:w-[160px] lg:h-[160px] bg-white rounded-full self-start"></div>
          <h4 className="text-white text-xl md:text-2xl lg:text-4xl font-normal leading-tight tracking-[-0.02em] m-0">AI-Powered Inventory Optimization</h4>
          <p className="text-light-gray text-sm md:text-base lg:text-lg font-normal leading-[140%] m-0">
            Resolve costly inventory inefficiencies and unlock trapped capital in your supply chain. Our data-driven diagnostic approach pinpoints issues, while AI-enabled solutions optimize stock levels, prevent lost sales, and build a more resilient supply chain. Gain data-driven certainty and move from reactive firefighting to proactive, strategic management.
          </p>
          <button className="flex flex-row justify-center items-center px-4 py-2 md:px-6 md:py-3 lg:px-[25px] lg:py-[10px] gap-1 md:gap-[5px] bg-gradient-to-r from-white/25 to-transparent border-none rounded-full text-white text-sm md:text-base font-normal tracking-[0.05em] cursor-pointer self-start hover:bg-white/30 transition-all">
            LEARN MORE
            <div className="w-2 h-2 md:w-3 md:h-3 border border-white rounded-sm rotate-45"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
