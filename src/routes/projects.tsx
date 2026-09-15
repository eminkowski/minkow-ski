import { PROJECTS_GITHUB_LINK, PROJECTS_INTRO, projects } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'
import { Card, ExternalLink, LinkArrow, PageGrid } from '../components/ui'
import { label, textClass } from '../lib/styles'

export function Projects() {
  return (
    <PageGrid>
      <Card className="sm:col-span-2">
        <p className={label}>Projects</p>
        <p className={`text-sm ${textClass.secondary} leading-relaxed`}>{PROJECTS_INTRO}</p>
        <ExternalLink href={PROJECTS_GITHUB_LINK.href} variant="meta" className="w-fit">
          {PROJECTS_GITHUB_LINK.label} <LinkArrow />
        </ExternalLink>
      </Card>

      {projects.map(project => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </PageGrid>
  )
}
