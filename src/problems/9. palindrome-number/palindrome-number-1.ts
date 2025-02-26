/**
 * Checks if a given number is a palindrome.
 *
 * Time complexity: O(log n)
 * Space complexity: O(log n)
 *
 * @param x the number to check
 * @returns true if the number is a palindrome, false otherwise
 */
export function isPalindrome1(x: number) {
  if (x < 0) return false
  if (x < 10) return true

  const digits: number[] = []

  while (x > 0) {
    digits.push(x % 10)
    x = Math.floor(x / 10)
    console.log(x)
  }

  for (let i = 0; i < digits.length / 2; i++) {
    if (digits[i] !== digits[digits.length - 1 - i]) return false
  }

  return true
}
