import Image from "next/image";
import { chunkArray } from "../chunkArray";
import { PartnersSection } from "../types";

export default function TrustSignals({
  partners,
}: {
  partners: PartnersSection;
}) {
  const logoChunks = chunkArray(partners.logos, 6);

  return (
    <section className="relative w-full min-h-screen px-4 md:px-6 lg:px-[100px] py-12 md:py-16 lg:py-20 flex flex-col items-center gap-8 md:gap-12 lg:gap-16">
      <div className="flex flex-row items-center gap-3 md:gap-4 self-end">
        <div className="text-gray text-base md:text-lg lg:text-xl font-normal leading-relaxed">
          (03)
        </div>
        <h2 className="text-gray text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-wider uppercase">
          TRUST SIGNALS
        </h2>
      </div>

      <h3 className="text-dark text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal leading-tight tracking-tight text-center m-0 max-w-5xl">
        We believe in building more than just technology — we build long-lasting
        partnerships.
      </h3>

      <p className="text-dark text-base md:text-lg lg:text-xl font-normal leading-relaxed text-center m-0 max-w-4xl">
        From startups to established enterprises, we&apos;ve helped businesses
        like yours accelerate, innovate, scale, and thrive.
      </p>

      <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full">
        {logoChunks.map((chunk, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center gap-4 md:gap-6">
            {chunk.map((logo) => (
              <Image
                width={219}
                height={38}
                key={logo.id}
                src={logo.url}
                alt={logo.alternativeText || logo.name}
                className="w-full h-10 md:h-12 lg:h-16 object-contain"
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
