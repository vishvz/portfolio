import { siteConfig } from '@/data/projects';

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 px-6 lg:px-12 bg-[#12141A]">
      <div className="max-w-6xl mx-auto">
        {/* Two-column layout on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Section label - left column on desktop */}
          <div className="lg:col-span-3">
            <h2 className="text-sm text-[#C7B9A6] font-medium tracking-wide uppercase lg:sticky lg:top-24">
              Contact
            </h2>
          </div>

          {/* Content - right column on desktop */}
          <div className="lg:col-span-9">
            {/* Heading */}
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#EDEDED] mb-6">
              Let&apos;s work together
            </p>

            <p className="text-[#A1A1A6] text-lg mb-10 max-w-xl">
              I&apos;m open to discussing backend engineering roles, consulting opportunities,
              or interesting technical challenges.
            </p>

            {/* Links - horizontal on desktop */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12">
              {/* Resume */}
              <a
                href={siteConfig.resumePath}
                download
                className="inline-flex items-center justify-center px-8 py-4 bg-[#EDEDED] text-[#0B0D10] font-medium hover:bg-[#D4D4D4] transition-colors"
              >
                Download Resume
              </a>

              {/* Email */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center px-8 py-4 border border-[#2A2D35] text-[#EDEDED] font-medium hover:border-[#C7B9A6] hover:text-[#C7B9A6] transition-colors"
              >
                Email Me
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-8 text-sm">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B6B70] hover:text-[#EDEDED] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B6B70] hover:text-[#EDEDED] transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
