import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { problems } from './data/problems'
import { Home } from './pages/Home'
import { Problem } from './pages/Problem'
import { Progress } from './pages/Progress'
import type { Problem as ProblemType } from './types'

type View = 'problems' | 'progress' | 'problem'

function App() {
  const [view, setView] = useState<View>('problems')
  const [selectedProblem, setSelectedProblem] = useState<ProblemType>(problems[0])

  const openProblem = (problem: ProblemType) => {
    setSelectedProblem(problem)
    setView('problem')
  }

  return <div className="min-h-screen bg-[#080b11] text-slate-200"><Navbar view={view} onNavigate={setView} />{view === 'problems' && <Home onSelect={openProblem} />}{view === 'progress' && <Progress />}{view === 'problem' && <Problem problem={selectedProblem} onBack={() => setView('problems')} />}</div>
}

export default App
