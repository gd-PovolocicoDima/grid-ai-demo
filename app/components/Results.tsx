import ResultCard from './ResultCard';

export default function Results() {
  const results = [
    {
      number: "50+",
      description: "Fortune-1000 customers with AI solutions delivered",
      isGradient: false
    },
    {
      icon: true,
      description: "We work with major hyperscalers (Google, AWS, Azure) and platforms (DataBricks, Vercel, Nvidia Agentic)",
      isGradient: true
    },
    {
      number: "400+",
      description: "Architects, Data Scientists, AI & ML Engineers and Big Data Engineers",
      isGradient: false
    },
    {
      icon: true,
      description: "Enabled by a well-defined framework for AI Transformation Enablement and end-to-end AI solutions implementation",
      isGradient: true
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-dark flex flex-col items-center px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 gap-8 md:gap-12 lg:gap-16">
      <div className="flex flex-row items-center gap-3 md:gap-4 self-end">
        <div className="text-gray text-base md:text-lg lg:text-xl font-normal leading-relaxed">(01)</div>
        <h2 className="text-gray text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-wider uppercase">RESULTS</h2>
      </div>
      
      <h3 className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight text-center m-0 max-w-4xl">
        Driving Results for Our Clients
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full max-w-7xl mx-auto">
        {results.map((result, index) => (
          <ResultCard
            key={index}
            number={result.number}
            icon={result.icon}
            description={result.description}
            isGradient={result.isGradient}
          />
        ))}
      </div>
    </section>
  );
}
