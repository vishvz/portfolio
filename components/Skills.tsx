import { skillGroups } from '@/data/projects';

export default function Skills() {
  const sortedSkillGroups = [...skillGroups].sort((a, b) => a.order - b.order);

  return (
    <section id="skills" className="py-24 lg:py-32 px-6 lg:px-12 bg-[#12141A]">
      <div className="max-w-6xl mx-auto">
        {/* Two-column layout on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Section label - left column on desktop */}
          <div className="lg:col-span-3">
            <h2 className="text-sm text-[#C7B9A6] font-medium tracking-wide uppercase lg:sticky lg:top-24">
              Skills
            </h2>
          </div>

          {/* Content - right column on desktop */}
          <div className="lg:col-span-9">
            {/* 4-column grid on large screens, 2 on tablet, 1 on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-12">
              {sortedSkillGroups.map((group) => (
                <div key={group.label}>
                  <h3 className="text-sm font-medium text-[#6B6B70] uppercase tracking-wider mb-4 pb-2 border-b border-[#2A2D35] flex items-center gap-3">
                    <span className="text-[#C7B9A6] font-mono text-xs">
                      {String(group.order).padStart(2, '0')}
                    </span>
                    {group.label}
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((skill) => (
                      <li key={skill} className="text-[#EDEDED]">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
