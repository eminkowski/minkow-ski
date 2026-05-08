import { Link } from '@tanstack/react-router'
import { ScrambleText } from '../components/ScrambleText'
import { card, chip, label, linkCard } from '../lib/styles'

const capabilities = [
  'Systems Architecture',
  'API Design',
  'Performance Engineering',
  'Full-Stack Development',
  'Technical Leadership',
]

// Update these with your real numbers
const metrics = [
  { value: '20', label: 'yrs exp' },
  { value: '6',  label: 'companies' },
  { value: '10', label: 'engineers led' },
]

export function Home() {
  return (
    <div className="bento grid grid-cols-1 md:grid-cols-3 gap-2.5 w-full max-w-3xl">

      {/* Hero */}
      <div className={`${card} md:col-span-2 md:row-span-2 min-h-56 justify-between`}>
        <div className="flex flex-col gap-2">
          <p className={label}>Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-none">
            <ScrambleText text="Eric Minkowski" duration={1800} />
          </h1>
        </div>
        <p className="font-mono text-sm text-white/70">
          Lead Software Engineer<span className="animate-pulse">_</span>
        </p>
      </div>

      {/* Status */}
      <div className={`${card} justify-between`}>
        <p className={label}>Status</p>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-sm text-emerald-400/90">Available for roles</span>
        </div>
      </div>

      {/* GitHub */}
      <a href="https://github.com/eminkowski" target="_blank" rel="noopener noreferrer" className={linkCard}>
        <p className={label}>GitHub</p>
        <p className="text-sm text-white/80 group-hover:text-white transition-colors">eminkowski ↗</p>
      </a>

      {/* Resume */}
      <a href="/resume" target="_blank" rel="noopener noreferrer" className={linkCard}>
        <p className={label}>Resume</p>
        <p className="text-sm text-white/80 group-hover:text-white transition-colors">View PDF ↗</p>
      </a>

      {/* Capabilities */}
      <div className={card}>
        <p className={label}>Capabilities</p>
        <div className="flex flex-wrap gap-1.5">
          {capabilities.map(c => (
            <span key={c} className={chip}>{c}</span>
          ))}
        </div>
      </div>

      {/* LinkedIn */}
      <a href="https://linkedin.com/in/eminkowski" target="_blank" rel="noopener noreferrer" className={linkCard}>
        <p className={label}>LinkedIn</p>
        <p className="text-sm text-white/80 group-hover:text-white transition-colors">eminkowski ↗</p>
      </a>

      {/* Numbers */}
      <div className={card}>
        <p className={label}>By the numbers</p>
        <div className="flex gap-6">
          {metrics.map(m => (
            <div key={m.label} className="flex flex-col gap-0.5">
              <span
                className="font-mono text-2xl font-black text-white"
                style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.2))' }}
              >{m.value}</span>
              <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest">{m.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Email */}
      <a href="mailto:eric@minkow.ski" className={linkCard}>
        <p className={label}>Email</p>
        <p className="font-mono text-sm text-white/80 group-hover:text-white transition-colors">eric@minkow.ski ↗</p>
      </a>

      {/* Projects */}
      <Link to="/projects" className={linkCard}>
        <p className={label}>Projects</p>
        <p className="text-sm text-white/80 group-hover:text-white transition-colors">View work →</p>
      </Link>

    </div>
  )
}
