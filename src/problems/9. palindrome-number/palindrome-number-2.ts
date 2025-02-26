/**
 * Determines if a given number is a palindrome.
 *
 * A number is a palindrome if it reads the same from left to right and right to left.
 * Negative numbers are not considered palindromes.
 *
 * Time complexity: O(log n)
 * Space complexity: O(1)
 *
 * @param n The number to check.
 * @returns True if the number is a palindrome, false otherwise.
 */

export function isPalindrome2(n: number): boolean {
  if (n < 0) return false

  let num = n
  let size = Math.floor(Math.log10(num))

  while (size > 0) {
    const divisor = Math.pow(10, size)
    const leftDigit = Math.floor(num / divisor)
    const rightDigit = num % 10

    if (leftDigit !== rightDigit) {
      return false
    }

    num = Math.floor((num - leftDigit * divisor) / 10)
    size -= 2
  }
  return true
}
