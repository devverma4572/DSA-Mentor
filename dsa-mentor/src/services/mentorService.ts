import type { MentorMode } from '../types'

export async function askMentor(question: string, mode: MentorMode): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 700))
  if (mode === 'Solution Mode') return 'Start by mapping each value to its index as you scan the array. For each number, check whether target - number has already been seen.'
  if (question.toLowerCase().includes('complex')) return 'The nested-loop approach is O(n²). A lookup table can reduce the search for a complement to O(1) on average.'
  if (mode === 'Hint Mode') return 'Try writing down what information you wish you had available when you reach the second number in a pair.'
  return 'Good instinct. Before coding, describe what you would store after visiting each number and why that helps the next lookup.'
}
