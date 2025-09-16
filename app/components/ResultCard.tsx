interface ResultCardProps {
  number?: string;
  icon?: boolean;
  description: string;
  isGradient?: boolean;
}

export default function ResultCard({ number, icon = false, description, isGradient = false }: ResultCardProps) {
  return (
    <div 
      className={`w-full aspect-square rounded-3xl p-4 md:p-6 lg:p-8 flex flex-col justify-center items-start text-left gap-4 md:gap-6 ${
        isGradient 
          ? '' 
          : 'bg-gradient-to-r from-white/25 to-transparent'
      }`}
      style={isGradient ? {background: 'radial-gradient(94.34% 94.34% at 3.47% 97.81%, #080A1D 0%, #1E2BD4 50.96%, #C8C8F9 100%)'} : {}}
    >
      {number && (
        <div className="text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-none">
          {number}
        </div>
      )}
      
      {icon && (
        <div className="w-8 h-6 md:w-10 md:h-8 lg:w-12 lg:h-9 bg-accent rounded"></div>
      )}
      
      <p className="text-white text-sm md:text-base lg:text-lg xl:text-xl font-normal leading-relaxed m-0">
        {description}
      </p>
    </div>
  );
}
