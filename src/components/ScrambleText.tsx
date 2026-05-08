import { useEffect, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&'

function useScramble(target: string, duration = 1600) {
  const [output, setOutput] = useState(() =>
    target.split('').map(c => c === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]).join('')
  )

  useEffect(() => {
    const start = performance.now()
    let rafId: number

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1)
      const revealed = Math.floor(progress * target.length)

      setOutput(
        target.split('').map((char, i) => {
          if (char === ' ') return ' '
          if (i < revealed) return char
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        }).join('')
      )

      if (progress < 1) rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [target, duration])

  return output
}

interface ScrambleTextProps {
  text: string
  duration?: number
  className?: string
}

export function ScrambleText({ text, duration, className }: ScrambleTextProps) {
  const output = useScramble(text, duration)
  return <span className={className}>{output}</span>
}
