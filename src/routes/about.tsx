import { card, chip, label } from '../lib/styles'

const skills = ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Next.js', 'REST APIs', 'PostgreSQL', 'Git']

export function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-3xl">

      <div className={`${card} md:col-span-2`}>
        <p className={label}>About</p>
        <p className="text-white/70 leading-relaxed text-sm">
          Software engineer focused on building thoughtful, user-centered products.
          I work primarily in the React and Node.js ecosystem and care deeply about
          clean code, good UX, and the humans on both sides of the screen.
        </p>
      </div>

      <div className={card}>
        <p className={label}>Stack</p>
        <div className="flex flex-wrap gap-1.5">
          {skills.map(s => (
            <span key={s} className={chip}>{s}</span>
          ))}
        </div>
      </div>

      <div className={card}>
        <p className={label}>Contact</p>
        <a href="mailto:eric@minkow.ski"
          className="font-mono text-sm text-white/60 hover:text-white transition-colors duration-150">
          eric@minkow.ski ↗
        </a>
        <a href="https://linkedin.com/in/eminkowski" target="_blank" rel="noopener noreferrer"
          className="font-mono text-sm text-white/60 hover:text-white transition-colors duration-150">
          linkedin ↗
        </a>
      </div>

    </div>
  )
}
