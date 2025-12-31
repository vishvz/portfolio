import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  return (
    <section id="projects" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Two-column layout on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Section label - left column on desktop */}
          <div className="lg:col-span-3">
            <h2 className="text-sm text-[#C7B9A6] font-medium tracking-wide uppercase lg:sticky lg:top-24">
              Projects
            </h2>
          </div>

          {/* Content - right column on desktop */}
          <div className="lg:col-span-9">
            {/* 2-column grid on extra large screens */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {sortedProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  featured={index === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
