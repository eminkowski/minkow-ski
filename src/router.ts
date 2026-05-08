import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router'
import { Root } from './routes/root'
import { Home } from './routes/home'
import { Projects } from './routes/projects'
import { About } from './routes/about'

const rootRoute = createRootRoute({ component: Root })

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: Projects,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

const routeTree = rootRoute.addChildren([homeRoute, projectsRoute, aboutRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
