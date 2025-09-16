export default function Testimonials() {
  return (
    <section className="relative w-full min-h-screen bg-dark px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 flex items-center justify-center">
      <div className="relative w-full max-w-7xl h-full flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12">
        <div className="flex-1 flex flex-col gap-4 md:gap-6 lg:gap-8">
          <div className="text-accent text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-normal leading-none m-0">"</div>
          <p className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal leading-relaxed tracking-tight m-0 max-w-4xl">
            Their entire AI first approach brought clarity and consistency to our whole organization.
          </p>
          <div className="text-white text-base md:text-lg lg:text-xl font-normal leading-relaxed m-0">— Erin K. Olson, CEO, Brighter Corp.</div>
        </div>
        <div className="w-full lg:w-1/2 aspect-video lg:aspect-square bg-cover bg-center rounded-3xl lg:rounded-l-3xl relative" 
             style={{backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80)'}}>
          <div className="absolute w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-cover bg-center rounded-full -bottom-8 md:-bottom-10 lg:left-1/2 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2" 
               style={{backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80)'}}></div>
        </div>
      </div>
    </section>
  );
}
