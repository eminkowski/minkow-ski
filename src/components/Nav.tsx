import { Link } from '@tanstack/react-router'

const links = [
  { to: '/', label: 'home' },
  { to: '/projects', label: 'projects' },
  { to: '/about', label: 'about' },
] as const

export function Nav() {
  return (
    <nav className="fixed top-5 right-6 z-50 flex gap-5">
      {links.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className="font-mono text-xs text-white/50 hover:text-white/90 transition-colors duration-200"
          activeProps={{ className: 'font-mono text-xs text-white' }}
          activeOptions={{ exact: to === '/' }}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
