export type Difficulty = 'Easy' | 'Medium' | 'Hard'
export type MentorMode = 'Guided' | 'Hint Mode' | 'Solution Mode'

export interface Example {
  input: string
  output: string
  explanation: string
}

export interface Problem {
  id: number
  title: string
  difficulty: Difficulty
  topic: string
  description: string
  examples: Example[]
  constraints: string[]
  starterCode: string
  hints: string[]
  completed?: boolean
}

export interface ChatMessage {
  id: string
  role: 'mentor' | 'user'
  content: string
  timestamp: string
}

export interface Feedback {
  correctness: string
  timeComplexity: string
  spaceComplexity: string
  codeQuality: string
  improvement: string
  nextStep: string
}

export interface TestResult {
  passed: boolean
  title: string
  input: string
  expected: string
  output: string
}

export interface Progress {
  solved: number
  total: number
  streak: number
  accuracy: number
  difficulty: { label: Difficulty; count: number; color: string }[]
  topics: { name: string; percent: number; solved: number; total: number }[]
}
