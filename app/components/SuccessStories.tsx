export default function SuccessStories() {
  return (
    <section className="relative w-full min-h-screen px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 flex flex-col gap-8 md:gap-12 lg:gap-16">
      <div className="flex flex-row items-center gap-3 md:gap-4 self-end">
        <div className="text-gray text-base md:text-lg lg:text-xl font-normal leading-relaxed">(05)</div>
        <h2 className="text-gray text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-wider uppercase">SUCCESS STORIES</h2>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-center w-full max-w-7xl mx-auto">
        <div className="w-full lg:w-1/3 aspect-video lg:aspect-square border-2 md:border-3 border-border-gray rounded-3xl bg-cover bg-center" 
             style={{backgroundImage: 'url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)'}}></div>
        
        <div className="w-full lg:w-1/3 min-h-[500px] md:min-h-[600px] lg:min-h-[700px] rounded-3xl p-4 md:p-6 lg:p-8 flex flex-col gap-4 md:gap-6 lg:gap-8" 
             style={{background: 'radial-gradient(94.34% 94.34% at 3.47% 97.81%, #080A1D 0%, #1E2BD4 50.96%, #C8C8F9 100%)'}}>
          <div className="w-full aspect-video bg-cover bg-center rounded-3xl" 
               style={{backgroundImage: 'url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'}}></div>
          <h3 className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal leading-tight tracking-tight m-0">
            The E-Commerce AI-First Digital Transformation Journey at Brighter Corp: Legacy to Leader in Under a Year
          </h3>
          <div className="text-white text-base md:text-lg lg:text-xl font-normal leading-relaxed m-0">— Brighter Corp.</div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            <span className="px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-white/25 to-transparent rounded-full text-white text-sm md:text-base font-normal">AI Transformation Consulting</span>
            <span className="px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-white/25 to-transparent rounded-full text-white text-sm md:text-base font-normal">Retail</span>
          </div>
        </div>
        
        <div className="w-full lg:w-1/3 aspect-video lg:aspect-square bg-cover bg-center rounded-3xl lg:rounded-r-3xl" 
             style={{backgroundImage: 'url(https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80)'}}></div>
      </div>
      
      <div className="flex flex-row items-center justify-center gap-2 md:gap-3">
        <div className="w-2 h-2 md:w-3 md:h-3 bg-gray rounded-full"></div>
        <div className="w-2 h-2 md:w-3 md:h-3 bg-gray rounded-full"></div>
        <div className="w-6 h-2 md:w-8 md:h-3 bg-dark rounded-full"></div>
        <div className="w-2 h-2 md:w-3 md:h-3 bg-gray rounded-full"></div>
        <div className="w-2 h-2 md:w-3 md:h-3 bg-gray rounded-full"></div>
      </div>
    </section>
  );
}
