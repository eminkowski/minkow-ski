import { Outlet } from '@tanstack/react-router'
import { Nav } from '../components/Nav'

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`

export function Root() {
  return (
    <div className="relative min-h-screen flex flex-col">

      {/* Void background */}
      <div className="fixed inset-0 z-0 bg-[#020202]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,#1e1e3f,transparent_70%)] opacity-80" />
      </div>

      {/* Grain overlay */}
      <div
        className="fixed inset-0 z-[5] pointer-events-none"
        style={{ backgroundImage: NOISE_SVG, backgroundSize: '300px 300px', opacity: 0.02 }}
      />

      <Nav />

      <main className="relative z-10 flex-1 flex items-center justify-center pt-20 px-6 pb-12">
        <Outlet />
      </main>
    </div>
  )
}
