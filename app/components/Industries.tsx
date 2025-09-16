import IndustryCard from './IndustryCard';

export default function Industries() {
  const industries = [
    {
      title: "Retail AI Transformation",
      description: "Transform your retail or e-commerce business with AI-powered solutions. We help you accelerate revenue and boost operational efficiency through intelligent automation, personalized customer experiences, and data-driven insights. From increasing conversion rates with AI-powered product discovery to reducing costs with inventory optimization, our solutions deliver measurable ROI from day one.",
      isGradient: false
    },
    {
      title: "FinTech Engineering",
      description: "Enhance your FinTech solutions landscape with top-tier engineering teams and enterprise-grade expertise. We provide robust solutions that streamline operations, strengthen security, and accelerate your time-to-market. Whether you need to augment your team or deploy a complete turnkey solution, our partnerships and accelerators will help you stay on the competitive edge.",
      isGradient: true
    },
    {
      title: "Energy Sector Engineering",
      description: "Modernize your energy operations with specialized engineering expertise. Our solutions are designed to help you transform grid infrastructure, accelerate clean energy adoption, and create seamless digital customer experiences. We leverage our deep domain knowledge and in-house accelerators to drive operational efficiency and measurable growth across the energy sector.",
      isGradient: false
    },
    {
      title: "AI-Powered Inventory Optimization",
      description: "Resolve costly inventory inefficiencies and unlock trapped capital in your supply chain. Our data-driven diagnostic approach pinpoints issues, while AI-enabled solutions optimize stock levels, prevent lost sales, and build a more resilient supply chain. Gain data-driven certainty and move from reactive firefighting to proactive, strategic management.",
      isGradient: true
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-dark py-12 md:py-16 lg:py-20 flex flex-col gap-8 md:gap-12 lg:gap-16">
      <div className="flex flex-row items-center gap-3 md:gap-4 self-end px-4 md:px-6 lg:px-[100px]">
        <div className="text-gray text-base md:text-lg lg:text-xl font-normal leading-relaxed">(04)</div>
        <h2 className="text-gray text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-wider uppercase">TAILORED TO YOUR INDUSTRY</h2>
      </div>
      
      <h3 className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal leading-tight tracking-tight m-0 max-w-4xl px-4 md:px-6 lg:px-[100px]">
        Every industry has its own unique challenges and opportunities for growth.
      </h3>
      
      <p className="text-white text-base md:text-lg lg:text-xl font-normal leading-relaxed m-0 max-w-3xl self-end px-4 md:px-6 lg:px-[100px]">
        We combine our expertise in AI and top-tier engineering with deep domain knowledge to deliver specialized solutions that transform your business.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full px-4 md:px-6 lg:px-[100px]">
        {industries.map((industry, index) => (
          <IndustryCard
            key={index}
            title={industry.title}
            description={industry.description}
            isGradient={industry.isGradient}
          />
        ))}
      </div>
    </section>
  );
}
