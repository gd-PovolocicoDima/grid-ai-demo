export default function SuccessStories() {
  return (
    <section className="relative w-full min-h-[800px] md:min-h-[1000px] lg:min-h-[1040px] px-4 md:px-8 lg:px-[100px] py-8 md:py-12 lg:py-[100px] flex flex-col gap-8 md:gap-12 lg:gap-[60px]">
      <div className="flex flex-row items-center gap-2 md:gap-[15px] self-end">
        <div className="text-gray text-lg md:text-xl lg:text-2xl font-normal leading-[130%]">(05)</div>
        <h2 className="text-gray text-lg md:text-xl lg:text-2xl font-normal leading-[130%] tracking-[0.1em] uppercase">SUCCESS STORIES</h2>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-[30px] items-center w-full max-w-[2153px]">
        <div className="w-full lg:w-[624px] h-[300px] md:h-[400px] lg:h-[736px] border-[3px] border-border-gray rounded-[30px] bg-cover bg-center" 
             style={{backgroundImage: 'url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)'}}></div>
        <div className="w-full lg:w-[846px] h-[600px] md:h-[700px] lg:h-[1000px] rounded-[30px] p-4 md:p-6 lg:p-[30px] flex flex-col gap-4 md:gap-6 lg:gap-[30px]" 
             style={{background: 'radial-gradient(94.34% 94.34% at 3.47% 97.81%, #080A1D 0%, #1E2BD4 50.96%, #C8C8F9 100%)'}}>
          <div className="w-full lg:w-[721px] h-[200px] md:h-[250px] lg:h-[384px] bg-cover bg-center rounded-[30px]" 
               style={{backgroundImage: 'url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'}}></div>
          <h3 className="text-white text-xl md:text-2xl lg:text-[48px] font-normal leading-tight tracking-[-0.02em] m-0">
            The E-Commerce AI-First Digital Transformation Journey at Brighter Corp: Legacy to Leader in Under a Year
          </h3>
          <div className="text-white text-lg md:text-xl lg:text-[32px] font-normal leading-[140%] m-0">— Brighter Corp.</div>
          <div className="flex flex-wrap gap-2 md:gap-[15px]">
            <span className="px-3 py-2 md:px-[20px] md:py-[10px] bg-gradient-to-r from-white/25 to-transparent rounded-full text-white text-sm md:text-base font-normal">AI Transformation Consulting</span>
            <span className="px-3 py-2 md:px-[20px] md:py-[10px] bg-gradient-to-r from-white/25 to-transparent rounded-full text-white text-sm md:text-base font-normal">Retail</span>
          </div>
        </div>
        <div className="w-full lg:w-[448px] h-[300px] md:h-[400px] lg:h-[616px] bg-cover bg-center rounded-[30px] lg:rounded-r-[30px]" 
             style={{backgroundImage: 'url(https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80)'}}></div>
      </div>
      
      <div className="flex flex-row items-center justify-center gap-2 md:gap-[15px]">
        <div className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] bg-gray rounded-full"></div>
        <div className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] bg-gray rounded-full"></div>
        <div className="w-[20px] h-[8px] md:w-[30px] md:h-[10px] bg-dark rounded-full"></div>
        <div className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] bg-gray rounded-full"></div>
        <div className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] bg-gray rounded-full"></div>
      </div>
    </section>
  );
}
