export const ROUTES = {
  home: '/',
  projects: '/projects',
  projectsTrudge: '/projects/trudge',
  projectsSupportDesk: '/projects/support-desk-mcp',
  projectsWorksurface: '/projects/worksurface-ui',
  projectsAgentEvalHarness: '/projects/agent-eval-harness',
  projectsTemporalCaseflow: '/projects/temporal-caseflow',
  projectsFreedomListSync: '/projects/freedom-list-sync',
  about: '/about',
} as const

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES]
