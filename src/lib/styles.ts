export const card = [
  'rounded-xl border border-white/[0.06] [border-top-color:rgba(255,255,255,0.12)] bg-white/[0.02]',
  'backdrop-blur-[8px]',
  'p-5 flex flex-col gap-3',
  'transition-all duration-200 ease-out',
  'hover:-translate-y-0.5 hover:border-white/[0.20] hover:[border-top-color:rgba(255,255,255,0.22)] hover:bg-white/[0.07]',
  'hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_4px_24px_rgba(0,0,0,0.5)]',
].join(' ')

export const linkCard = `${card} cursor-pointer group`

export const label = 'font-mono text-[10px] text-white/40 uppercase tracking-widest'

export const chip = 'font-mono text-[10px] px-2 py-1 rounded-md bg-white/[0.05] text-white/70 border border-white/[0.08] hover:bg-white/[0.10] transition-colors cursor-default'
