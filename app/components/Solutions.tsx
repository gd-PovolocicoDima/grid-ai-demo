export default function Solutions() {
  return (
    <section className="relative w-full min-h-screen px-4 md:px-6 lg:px-[100px] py-12 md:py-16 lg:py-20 flex flex-col gap-8 md:gap-12 lg:gap-16">
      <div className="flex flex-row items-center gap-3 md:gap-4 self-end">
        <div className="text-gray text-base md:text-lg lg:text-xl font-normal leading-relaxed">(02)</div>
        <h2 className="text-gray text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-wider uppercase">SOLUTIONS FOR ACCELERATED GROWTH</h2>
      </div>
      
      <p className="text-dark text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal leading-relaxed tracking-tight m-0 max-w-5xl">
        Our mission is to help small and medium-sized businesses innovate and scale. We combine top engineering talent with cutting-edge AI technology to build robust solutions that solve your biggest challenges, reduce costs, and unlock new revenue streams.
      </p>
      
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-start">
        <div className="w-full lg:w-1/2 aspect-video lg:aspect-square bg-cover bg-center rounded-3xl" 
             style={{backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'}}></div>
        
        <div className="flex-1 flex flex-col gap-6 md:gap-8 lg:gap-12">
          <div className="flex flex-col gap-3 md:gap-4">
            <h3 className="text-dark text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal leading-tight tracking-tight m-0">Engineering Team Extension</h3>
            <div className="w-full h-0.5 md:h-1 bg-dark"></div>
          </div>
          <p className="text-gray text-base md:text-lg lg:text-xl font-normal leading-relaxed m-0">
            Seamlessly scale your team with AI-trained engineers. Get access to a vetted pool of top-tier talent with deep domain expertise and a cultural fit for your business. We provide reliable, long-term talent with minimal attrition risk, helping you accelerate your projects and maintain continuous, best-in-class performance.
          </p>
          
          <div className="flex flex-col gap-3 md:gap-4">
            <h3 className="text-border-gray text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal leading-tight tracking-tight m-0">Engineering Teams Deployment</h3>
            <div className="w-full h-0.5 md:h-1 bg-border-gray"></div>
          </div>
          
          <div className="flex flex-col gap-3 md:gap-4">
            <h3 className="text-border-gray text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal leading-tight tracking-tight m-0">AI Transformation Consulting</h3>
            <div className="w-full h-0.5 md:h-1 bg-border-gray"></div>
          </div>
          
          <div className="flex flex-col gap-3 md:gap-4">
            <h3 className="text-border-gray text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal leading-tight tracking-tight m-0">AI Engineering</h3>
            <div className="w-full h-0.5 md:h-1 bg-border-gray"></div>
          </div>
          
          <p className="text-dark text-lg md:text-xl lg:text-2xl font-normal leading-relaxed m-0">
            Whether you need to augment your team or deploy a complete solution, we deliver the expertise you need to succeed.
          </p>
          
          <button className="flex flex-row justify-center items-center px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 gap-2 md:gap-3 border-2 md:border-3 border-dark rounded-full bg-transparent text-dark text-sm md:text-base lg:text-lg font-normal tracking-wider cursor-pointer self-start hover:bg-dark hover:text-white transition-all">
            LEARN MORE
            <div className="w-3 h-3 md:w-4 md:h-4 border border-dark rounded-sm rotate-45"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
