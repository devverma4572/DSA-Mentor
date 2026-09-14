import type { Problem, Progress } from '../types'

export const problems: Problem[] = [
  {
    id: 1, title: 'Two Sum', difficulty: 'Easy', topic: 'Arrays', completed: true,
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    examples: [{ input: 'nums = [2,7,11,15], target = 9', output: '[0,1]', explanation: 'nums[0] + nums[1] == 9.' }],
    constraints: ['2 <= nums.length <= 10⁴', '-10⁹ <= nums[i] <= 10⁹', 'Only one valid answer exists.'],
    starterCode: 'function twoSum(nums, target) {\n  // Write your solution here\n}',
    hints: ['Think about how you could remember numbers you have already seen.', 'What data structure allows fast lookup?', 'Consider using a HashMap.'],
  },
  {
    id: 2, title: 'Valid Parentheses', difficulty: 'Easy', topic: 'Stack',
    description: 'Given a string s containing brackets, determine if the input string is valid.',
    examples: [{ input: 's = "()[]{}"', output: 'true', explanation: 'Every opening bracket is closed in the correct order.' }],
    constraints: ['1 <= s.length <= 10⁴', 's consists of parentheses only.'], starterCode: 'function isValid(s) {\n  // Write your solution here\n}', hints: ['A stack can remember the most recent unmatched opening bracket.', 'Pair each closing bracket with the top of the stack.'],
  },
  {
    id: 3, title: 'Binary Search', difficulty: 'Easy', topic: 'Binary Search',
    description: 'Given a sorted array of integers nums and a target value, return the index of target or -1 if it is not found.',
    examples: [{ input: 'nums = [-1,0,3,5,9,12], target = 9', output: '4', explanation: '9 exists at index 4.' }],
    constraints: ['1 <= nums.length <= 10⁴', 'All values are unique.', 'nums is sorted in ascending order.'], starterCode: 'function search(nums, target) {\n  // Write your solution here\n}', hints: ['What does the sorted order tell you after comparing the middle value?', 'Keep track of the search interval with two pointers.'],
  },
  {
    id: 4, title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', topic: 'Arrays',
    description: 'Find the maximum profit from buying one day and selling on a later day.', examples: [{ input: 'prices = [7,1,5,3,6,4]', output: '5', explanation: 'Buy at 1 and sell at 6.' }], constraints: ['1 <= prices.length <= 10⁵', '0 <= prices[i] <= 10⁴'], starterCode: 'function maxProfit(prices) {\n  // Write your solution here\n}', hints: ['Track the cheapest price seen so far.', 'At each day, ask what profit selling today would produce.'],
  },
  {
    id: 5, title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', topic: 'Strings',
    description: 'Find the length of the longest substring without duplicate characters.', examples: [{ input: 's = "abcabcbb"', output: '3', explanation: 'The answer is "abc", with length 3.' }], constraints: ['0 <= s.length <= 5 * 10⁴', 's contains English letters, digits, symbols and spaces.'], starterCode: 'function lengthOfLongestSubstring(s) {\n  // Write your solution here\n}', hints: ['A sliding window can represent the current valid substring.', 'Move the left edge when a duplicate enters the window.'],
  },
  {
    id: 6, title: 'Merge Intervals', difficulty: 'Medium', topic: 'Arrays', description: 'Merge all overlapping intervals and return an array of the non-overlapping intervals.', examples: [{ input: 'intervals = [[1,3],[2,6],[8,10]]', output: '[[1,6],[8,10]]', explanation: 'The first two intervals overlap.' }], constraints: ['1 <= intervals.length <= 10⁴', 'intervals[i].length == 2'], starterCode: 'function merge(intervals) {\n  // Write your solution here\n}', hints: ['Sort intervals by their starting point.', 'Compare each interval with the end of the last merged interval.'],
  },
  {
    id: 7, title: 'Number of Islands', difficulty: 'Medium', topic: 'Graphs', description: 'Count the number of islands in a 2D grid of land and water cells.', examples: [{ input: 'grid = [["1","1","0"],["0","1","0"]]', output: '1', explanation: 'Adjacent land cells form one island.' }], constraints: ['1 <= rows, columns <= 300', 'grid contains 1s and 0s.'], starterCode: 'function numIslands(grid) {\n  // Write your solution here\n}', hints: ['Explore connected land cells as one component.', 'DFS or BFS can visit the four neighboring cells.'],
  },
  {
    id: 8, title: 'House Robber', difficulty: 'Medium', topic: 'Dynamic Programming', description: 'Determine the maximum amount of money you can rob without robbing adjacent houses.', examples: [{ input: 'nums = [2,7,9,3,1]', output: '12', explanation: 'Rob houses 1, 3, and 5.' }], constraints: ['1 <= nums.length <= 100', '0 <= nums[i] <= 400'], starterCode: 'function rob(nums) {\n  // Write your solution here\n}', hints: ['At each house, choose between robbing it or skipping it.', 'The best result only needs the previous two decisions.'],
  },
  {
    id: 9, title: 'Coin Change', difficulty: 'Medium', topic: 'Dynamic Programming', description: 'Return the fewest number of coins needed to make up a given amount.', examples: [{ input: 'coins = [1,2,5], amount = 11', output: '3', explanation: '11 = 5 + 5 + 1.' }], constraints: ['1 <= coins.length <= 12', '0 <= amount <= 10⁴'], starterCode: 'function coinChange(coins, amount) {\n  // Write your solution here\n}', hints: ['Define the answer for every amount from 0 to the target.', 'For each coin, build on the answer for a smaller amount.'],
  },
  {
    id: 10, title: 'Binary Tree Level Order Traversal', difficulty: 'Medium', topic: 'Trees', description: 'Return the level order traversal of a binary tree’s node values.', examples: [{ input: 'root = [3,9,20,null,null,15,7]', output: '[[3],[9,20],[15,7]]', explanation: 'Values are grouped by depth.' }], constraints: ['The number of nodes is in [0, 2000].', '-1000 <= Node.val <= 1000'], starterCode: 'function levelOrder(root) {\n  // Write your solution here\n}', hints: ['A queue naturally processes nodes in arrival order.', 'Capture the queue length before processing each level.'],
  },
]

export const progress: Progress = {
  solved: 12, total: 50, streak: 4, accuracy: 78,
  difficulty: [{ label: 'Easy', count: 8, color: '#55d6be' }, { label: 'Medium', count: 4, color: '#f1b962' }, { label: 'Hard', count: 0, color: '#f26d78' }],
  topics: [{ name: 'Arrays', percent: 80, solved: 8, total: 10 }, { name: 'Strings', percent: 60, solved: 3, total: 5 }, { name: 'Trees', percent: 30, solved: 2, total: 7 }, { name: 'Dynamic Programming', percent: 20, solved: 1, total: 5 }, { name: 'Graphs', percent: 30, solved: 1, total: 4 }],
}
