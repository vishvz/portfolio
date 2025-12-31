import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const typeColors: Record<Project['type'], string> = {
  healthcare: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  iot: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  enterprise: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
};

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`border border-[#2A2D35] bg-[#12141A] p-6 sm:p-8 hover:border-[#C7B9A6]/30 transition-colors ${
        featured ? 'xl:col-span-2' : ''
      }`}
    >
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div className="flex items-center gap-3">
            <span className="text-[#C7B9A6] font-mono text-sm">
              {String(project.order).padStart(2, '0')}
            </span>
            <h3 className={`font-semibold text-[#EDEDED] ${featured ? 'text-2xl' : 'text-xl'}`}>
              {project.name}
            </h3>
          </div>
          <span className={`text-xs uppercase tracking-wider shrink-0 mt-1 px-2 py-0.5 border ${typeColors[project.type]}`}>
            {project.type}
          </span>
        </div>
        <p className={`text-[#A1A1A6] ${featured ? 'text-lg' : ''}`}>{project.tagline}</p>
      </div>

      {/* Role */}
      <p className="text-sm text-[#C7B9A6] mb-4">{project.role}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 bg-[#1A1D24] text-[#A1A1A6] border border-[#2A2D35]"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Highlights - 2 columns on featured card in xl screens */}
      <ul className={`space-y-2 ${featured ? 'xl:grid xl:grid-cols-2 xl:gap-x-6 xl:gap-y-2 xl:space-y-0' : ''}`}>
        {project.highlights.map((highlight, index) => (
          <li key={index} className="text-sm text-[#A1A1A6] leading-relaxed pl-4 relative">
            <span className="absolute left-0 text-[#6B6B70]">—</span>
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  );
}
