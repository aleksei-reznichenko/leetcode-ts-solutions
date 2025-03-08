/**
 * Given a non-negative integer represented as a non-empty array of digits,
 * plus one to the integer.
 *
 * The digits are stored such that the most significant digit is at the head of the list,
 * and each element in the array contain a single digit.
 *
 * You may assume the integer does not contain any leading zero,
 * except the number 0 itself.
 *
 * @param digits A non-empty array of digits
 * @returns The array of digits with the value incremented by 1
 */
function plusOne(digits: number[]): number[] {
  const result = [...digits]
  for (let i = result.length - 1; i >= 0; i--) {
    if (++(result[i] as number) < 10) break
    result[i] = 0
  }
  if (!result[0]) result.unshift(1)
  return result
}

export { plusOne }
