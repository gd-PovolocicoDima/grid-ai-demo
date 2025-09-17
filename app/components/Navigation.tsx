import Image from "next/image";
import { NavbarSection } from "../types";

export default function Navigation({ navbar }: { navbar: NavbarSection }) {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 md:h-20 lg:h-24 bg-gradient-to-b from-dark to-transparent z-50 flex items-center justify-center">
      <div className="w-full px-4 md:px-6 lg:px-[100px] flex flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="text-white text-sm md:text-base lg:text-lg font-normal whitespace-nowrap">
            <Image
              alt={navbar.__component}
              width={200}
              height={50}
              src={navbar.logo.url}
            />
          </div>
        </div>

        {/* Desktop Navigation - Always visible on desktop */}
        <div className="hidden md:flex flex-row items-center gap-4 lg:gap-6 xl:gap-8">
          {navbar.items.map(({ id, label, url }) => (
            <a
              key={id}
              href={url}
              className="text-white text-xs lg:text-sm font-normal no-underline tracking-[0.05em] uppercase hover:text-accent transition-colors whitespace-nowrap">
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <button className="md:hidden flex flex-row justify-center items-center px-3 py-2 gap-1 bg-gradient-to-r from-white/25 to-transparent border-none rounded-full text-white text-xs font-normal tracking-[0.05em] cursor-pointer hover:bg-white/30 transition-all">
          MENU
          <div className="w-2 h-2 border border-white rounded-sm rotate-45"></div>
        </button>

        {navbar.buttons.map((el) => (
          <a
            key={el.id}
            href={el.url}
            className="hidden md:flex flex-row justify-center items-center px-3 lg:px-4 xl:px-6 py-2 gap-1 lg:gap-2 bg-gradient-to-r from-white/25 to-transparent border-none rounded-full text-white text-xs lg:text-sm font-normal tracking-[0.05em] cursor-pointer hover:bg-white/30 transition-all whitespace-nowrap">
            {el.label}
            <div className="w-2 h-2 lg:w-3 lg:h-3 border border-white rounded-sm rotate-45"></div>
          </a>
        ))}
      </div>
    </nav>
  );
}
