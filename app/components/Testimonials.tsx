export default function Testimonials() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[809px] bg-dark px-4 md:px-8 lg:px-[100px] py-8 md:py-12 lg:py-[100px] flex items-center justify-center">
      <div className="relative w-full max-w-[1820px] h-full flex flex-col lg:flex-row items-center gap-4 md:gap-6 lg:gap-[30px]">
        <div className="flex-1 flex flex-col gap-4 md:gap-6 lg:gap-[20px]">
          <div className="text-accent text-6xl md:text-8xl lg:text-[200px] font-normal leading-[100%] m-0">"</div>
          <p className="text-white text-xl md:text-3xl lg:text-[68px] font-normal leading-[130%] tracking-[-0.03em] m-0 max-w-[1091px]">
            Their entire AI first approach brought clarity and consistency to our whole organization.
          </p>
          <div className="text-white text-lg md:text-xl lg:text-[32px] font-normal leading-[140%] m-0">— Erin K. Olson, CEO, Brighter Corp.</div>
        </div>
        <div className="w-full lg:w-[653px] h-[300px] md:h-[400px] lg:h-[809px] bg-cover bg-center rounded-[30px] lg:rounded-l-[30px] relative" 
             style={{backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80)'}}>
          <div className="absolute w-16 h-16 md:w-20 md:h-20 lg:w-[116px] lg:h-[116px] bg-cover bg-center rounded-full -bottom-8 md:-bottom-10 lg:left-[975px] lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2" 
               style={{backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80)'}}></div>
        </div>
      </div>
    </section>
  );
}
