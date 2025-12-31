export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Two-column layout on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Section label - left column on desktop */}
          <div className="lg:col-span-3">
            <h2 className="text-sm text-[#C7B9A6] font-medium tracking-wide uppercase lg:sticky lg:top-24">
              About
            </h2>
          </div>

          {/* Content - right column on desktop */}
          <div className="lg:col-span-9">
            <div className="space-y-6 text-lg lg:text-xl text-[#A1A1A6] leading-relaxed max-w-3xl">
              <p>
                I&apos;m a backend-focused software engineer with experience building systems
                that handle real-world complexity. My work spans healthcare platforms,
                IoT device management, and enterprise applications—domains where reliability,
                data integrity, and secure access control are non-negotiable.
              </p>
              <p>
                I take ownership of backend architecture from database design through
                API implementation to deployment. I&apos;ve designed microservices architectures,
                built multi-tenant systems with proper data isolation, and implemented
                transactional workflows that maintain consistency under concurrent load.
              </p>
              <p>
                I use AI-assisted tools like Cursor, Claude, and MCP servers as productivity
                enhancers—they help me work faster, not replace understanding. I believe
                in pragmatic engineering: choosing the right level of complexity for the
                problem at hand, and building systems that other developers can maintain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
