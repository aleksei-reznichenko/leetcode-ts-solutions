/*
69. Sqrt(x)
Given a non-negative integer x,
return the square root of x rounded down to the nearest integer.
The returned integer should be non-negative as well.
You must not use any built-in exponent function or operator.
For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

Example 1:
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

Constraints:
0 <= x <= 231 - 1
*/

/**
 * Computes the square root of a non-negative integer x, rounded down to the nearest integer.
 * This function uses a binary search algorithm to find the integer square root without using
 * built-in exponent functions or operators.
 *
 * @param x The non-negative integer for which to compute the square root.
 * @returns The integer square root of x, rounded down.
 */

function mySqrt(x: number): number {
  if (x <= 1) return x

  let left = 2
  let right = Math.floor(x / 2)

  do {
    const res = Math.floor((left + right) / 2)
    const square = res * res
    if (square === x) return res
    if (square < x) left = res + 1
    else right = res - 1
  } while (left <= right)

  return right
}

export { mySqrt }
