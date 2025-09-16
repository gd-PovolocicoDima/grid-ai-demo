interface IndustryCardProps {
  title: string;
  description: string;
  isGradient?: boolean;
}

export default function IndustryCard({ title, description, isGradient = false }: IndustryCardProps) {
  return (
    <div 
      className={`w-full min-w-[350px] min-h-[500px] md:min-h-[600px] lg:min-h-[700px] rounded-3xl p-4 md:p-6 lg:p-8 flex flex-col gap-4 md:gap-6 lg:gap-8 ${
        isGradient 
          ? '' 
          : 'bg-white/10 border-2 md:border-3 border-white'
      }`}
      style={isGradient ? {background: 'radial-gradient(94.34% 94.34% at 3.47% 97.81%, #080A1D 0%, #1E2BD4 50.96%, #C8C8F9 100%)'} : {}}
    >
      <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white rounded-full self-start flex-shrink-0"></div>
      
      <h4 className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal leading-tight tracking-tight m-0">
        {title}
      </h4>
      
      <p className="text-light-gray text-sm md:text-base lg:text-lg font-normal leading-relaxed m-0 flex-grow">
        {description}
      </p>
      
      <button className="flex flex-row justify-center items-center px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 gap-2 md:gap-3 bg-gradient-to-r from-white/25 to-transparent border-none rounded-full text-white text-sm md:text-base font-normal tracking-wider cursor-pointer self-start hover:bg-white/30 transition-all">
        LEARN MORE
        <div className="w-3 h-3 md:w-4 md:h-4 border border-white rounded-sm rotate-45"></div>
      </button>
    </div>
  );
}
