import type { TestResult } from '../types'

export async function runCode(): Promise<TestResult[]> {
  await new Promise((resolve) => setTimeout(resolve, 900))
  return [{ passed: true, title: 'Test Case 1 Passed', input: '[2, 7, 11, 15], 9', expected: '[0, 1]', output: '[0, 1]' }, { passed: true, title: 'Test Case 2 Passed', input: '[3, 2, 4], 6', expected: '[1, 2]', output: '[1, 2]' }]
}
