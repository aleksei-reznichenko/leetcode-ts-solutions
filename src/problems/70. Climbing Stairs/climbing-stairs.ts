/**
 * Calculates the number of distinct ways to climb n stairs, where each step
 * can be either 1 or 2 stairs.
 *
 * Time complexity: O(2^n)
 * Space complexity: O(n)
 *
 * @param n The number of stairs to climb.
 * @returns The number of distinct ways to climb n stairs.
 */
function climbStairs(n: number): number {
  if (n < 4) return n

  let a = 1
  let b = 2

  for (let i = 2; i < n; i++) {
    const c = a
    a = b
    b = c + b
  }

  return b
}

export { climbStairs }
