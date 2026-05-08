import { card, chip, label } from '../lib/styles'

interface Project {
  name: string
  description: string
  tags: string[]
  url?: string
  repo?: string
}

const projects: Project[] = []

export function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-3xl">

      <div className={`${card} md:col-span-2`}>
        <p className={label}>Projects</p>
        <p className="text-sm text-white/40">Coming soon.</p>
      </div>

      {projects.map(project => (
        <div key={project.name} className={`${card} hover:border-white/[0.18] transition-all duration-200`}>
          <div className="flex items-start justify-between gap-4">
            <p className={label}>Project</p>
            <div className="flex gap-3">
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer"
                  className="font-mono text-xs text-white/30 hover:text-white transition-colors">
                  live ↗
                </a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noopener noreferrer"
                  className="font-mono text-xs text-white/30 hover:text-white transition-colors">
                  code ↗
                </a>
              )}
            </div>
          </div>
          <p className="text-white font-medium">{project.name}</p>
          <p className="text-sm text-white/50 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map(tag => (
              <span key={tag} className={chip}>{tag}</span>
            ))}
          </div>
        </div>
      ))}

    </div>
  )
}
