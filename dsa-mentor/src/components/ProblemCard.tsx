import { Check, ChevronRight, Clock3 } from 'lucide-react'
import type { Problem } from '../types'

const difficultyStyles = { Easy: 'border-[#55d6be]/25 bg-[#55d6be]/10 text-[#71e0cb]', Medium: 'border-[#f1b962]/25 bg-[#f1b962]/10 text-[#f1c978]', Hard: 'border-[#f26d78]/25 bg-[#f26d78]/10 text-[#f58b94]' }

export function ProblemCard({ problem, onSelect }: { problem: Problem; onSelect: () => void }) {
  return <article className="group flex min-h-[220px] flex-col rounded-2xl border border-white/[0.08] bg-[#101722] p-5 transition hover:-translate-y-0.5 hover:border-[#55d6be]/30 hover:bg-[#131d2a]">
    <div className="flex items-start justify-between gap-3"><div><span className={`inline-flex rounded-md border px-2 py-1 text-[11px] font-bold uppercase tracking-wider ${difficultyStyles[problem.difficulty]}`}>{problem.difficulty}</span><span className="ml-2 text-xs text-slate-500">{problem.topic}</span></div>{problem.completed && <span className="grid size-6 place-items-center rounded-full bg-[#55d6be]/10 text-[#55d6be]" title="Completed"><Check size={14} /></span>}</div>
    <h3 className="mt-4 text-lg font-semibold text-white">{problem.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-400">{problem.description}</p>
    <div className="mt-auto flex items-center justify-between pt-5"><span className="flex items-center gap-1.5 text-xs text-slate-500"><Clock3 size={14} />15 min estimate</span><button onClick={onSelect} className="flex items-center gap-1 text-sm font-semibold text-[#8de8d7] transition group-hover:text-[#b5f5eb]">Solve <ChevronRight size={16} /></button></div>
  </article>
}
