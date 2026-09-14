import { BarChart3, BrainCircuit, Code2, Menu, X } from 'lucide-react'
import { useState } from 'react'

interface NavbarProps {
  view: 'problems' | 'progress' | 'problem'
  onNavigate: (view: 'problems' | 'progress') => void
}

export function Navbar({ view, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const navigate = (nextView: 'problems' | 'progress') => { onNavigate(nextView); setOpen(false) }
  return <header className="sticky top-0 z-20 border-b border-white/[0.08] bg-[#080b11]/90 backdrop-blur-xl">
    <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 lg:px-8">
      <button onClick={() => navigate('problems')} className="flex items-center gap-3 text-left" aria-label="Go to problems">
        <span className="grid size-9 place-items-center rounded-xl bg-[#55d6be] text-[#071016]"><BrainCircuit size={20} /></span>
        <span><span className="block text-sm font-bold tracking-tight text-white">DSA Mentor</span><span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#55d6be]"><span className="size-1.5 rounded-full bg-[#55d6be]" /> AI powered</span></span>
      </button>
      <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
        <button onClick={() => navigate('problems')} className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${view !== 'progress' ? 'bg-white/[0.08] text-white' : 'text-slate-400 hover:text-white'}`}><Code2 size={16} />Problems</button>
        <button onClick={() => navigate('progress')} className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${view === 'progress' ? 'bg-white/[0.08] text-white' : 'text-slate-400 hover:text-white'}`}><BarChart3 size={16} />Progress</button>
      </nav>
      <div className="hidden items-center gap-4 md:flex"><span className="flex items-center gap-2 text-xs font-medium text-slate-400"><span className="size-2 rounded-full bg-[#55d6be] shadow-[0_0_12px_#55d6be]" />Mentor online</span><span className="grid size-8 place-items-center rounded-full border border-[#2a3444] bg-[#18212d] text-xs font-bold text-[#8de8d7]">JD</span></div>
      <button className="text-slate-300 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="border-t border-white/[0.08] px-5 py-3 md:hidden"><button onClick={() => navigate('problems')} className="block w-full rounded-lg px-3 py-3 text-left text-sm text-slate-200">Problems</button><button onClick={() => navigate('progress')} className="block w-full rounded-lg px-3 py-3 text-left text-sm text-slate-200">Progress</button></nav>}
  </header>
}
