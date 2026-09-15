import { ROUTES, type AppRoute } from '../lib/routes'
import { SITE } from '../lib/site'
import { AGENT_EVAL_HARNESS_CASE_STUDY } from './agent-eval-harness-case-study'
import { FREEDOM_LIST_SYNC_CASE_STUDY } from './freedom-list-sync-case-study'
import { SUPPORT_DESK_CASE_STUDY } from './support-desk-case-study'
import { TEMPORAL_CASEFLOW_CASE_STUDY } from './temporal-caseflow-case-study'
import { TRUDGE_CASE_STUDY } from './trudge-case-study'
import { WORKSURFACE_CASE_STUDY } from './worksurface-case-study'

export interface Project {
  name: string
  description: string
  tags: readonly string[]
  url?: string
  repo?: string
  caseStudy?: AppRoute
  /** Span the full projects grid (footer-style entries). */
  wide?: boolean
}

export const PROJECTS_INTRO =
  'Selected work with case studies that start with the problem and explain the technical approach. Some projects also include public source code on GitHub.'

export const PROJECTS_GITHUB_LINK = {
  label: 'More projects on GitHub',
  href: SITE.github,
} as const

export const projects: readonly Project[] = [
  {
    name: SUPPORT_DESK_CASE_STUDY.name,
    description: SUPPORT_DESK_CASE_STUDY.listDescription,
    tags: SUPPORT_DESK_CASE_STUDY.tags,
    repo: SITE.supportDeskRepo,
    caseStudy: ROUTES.projectsSupportDesk,
  },
  {
    name: TRUDGE_CASE_STUDY.name,
    description: TRUDGE_CASE_STUDY.listDescription,
    tags: TRUDGE_CASE_STUDY.tags,
    url: SITE.trudge,
    caseStudy: ROUTES.projectsTrudge,
  },
  {
    name: TEMPORAL_CASEFLOW_CASE_STUDY.name,
    description: TEMPORAL_CASEFLOW_CASE_STUDY.listDescription,
    tags: TEMPORAL_CASEFLOW_CASE_STUDY.tags,
    repo: SITE.temporalCaseflowRepo,
    caseStudy: ROUTES.projectsTemporalCaseflow,
  },
  {
    name: WORKSURFACE_CASE_STUDY.name,
    description: WORKSURFACE_CASE_STUDY.listDescription,
    tags: WORKSURFACE_CASE_STUDY.tags,
    repo: SITE.worksurfaceRepo,
    caseStudy: ROUTES.projectsWorksurface,
  },
  {
    name: AGENT_EVAL_HARNESS_CASE_STUDY.name,
    description: AGENT_EVAL_HARNESS_CASE_STUDY.listDescription,
    tags: AGENT_EVAL_HARNESS_CASE_STUDY.tags,
    repo: SITE.agentEvalHarnessRepo,
    caseStudy: ROUTES.projectsAgentEvalHarness,
  },
  {
    name: FREEDOM_LIST_SYNC_CASE_STUDY.name,
    description: FREEDOM_LIST_SYNC_CASE_STUDY.listDescription,
    tags: FREEDOM_LIST_SYNC_CASE_STUDY.tags,
    repo: SITE.freedomListSyncRepo,
    caseStudy: ROUTES.projectsFreedomListSync,
  },
  {
    name: SITE.domain,
    description:
      'Personal portfolio built with React, TypeScript, TanStack Router, and Tailwind CSS. Includes route-based case studies and a custom component system.',
    tags: ['React 19', 'TypeScript', 'Vite', 'TanStack Router', 'Tailwind CSS'],
    url: `https://${SITE.domain}`,
    repo: SITE.repo,
    wide: true,
  },
]
