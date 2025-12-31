import { siteConfig } from '@/data/projects';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 lg:px-12 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main content - takes 8 columns on desktop */}
          <div className="lg:col-span-8">
            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#EDEDED] mb-4 lg:mb-6">
              {siteConfig.name}
            </h1>

            {/* Title */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-[#A1A1A6] font-medium mb-6 lg:mb-8">
              {siteConfig.title}
            </p>

            {/* Tagline */}
            <p className="text-lg lg:text-xl text-[#6B6B70] max-w-2xl mb-8 lg:mb-10 leading-relaxed">
              {siteConfig.tagline}
            </p>

            {/* Location & Status */}
            <div className="flex flex-wrap items-center gap-4 text-sm lg:text-base text-[#6B6B70]">
              <span>{siteConfig.location}</span>
              {siteConfig.openToWork && (
                <>
                  <span className="text-[#2A2D35]">/</span>
                  <span className="text-[#C7B9A6]">Open to opportunities</span>
                </>
              )}
            </div>
          </div>

          {/* Right side spacer / decorative element area - takes 4 columns on desktop */}
          <div className="hidden lg:flex lg:col-span-4 justify-end items-end h-full">
            {/* Subtle visual element */}
            <div className="text-right">
              <div className="text-[#1A1D24] text-9xl font-bold select-none" aria-hidden="true">
                &lt;/&gt;
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 md:mt-20 lg:mt-24">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-sm text-[#6B6B70] hover:text-[#A1A1A6] transition-colors"
          >
            <span>Scroll to explore</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M8 3v10M4 9l4 4 4-4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
