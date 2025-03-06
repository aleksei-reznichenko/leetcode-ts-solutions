/**
 * Returns the length of the last word in a given string.
 *
 * The function trims any trailing spaces and calculates the length
 * of the last word by iterating backwards through the string.
 *
 * @param s The input string.
 * @returns The length of the last word. If there are no words,
 * returns 0.
 */

function lengthOfLastWord(s: string): number {
  let start = s.length - 1

  while (s[start] === ' ') {
    start--
  }

  for (let i = start; i >= 0; i--) {
    if (s[i] === ' ') {
      return start - i
    }
  }

  return start + 1
}

export { lengthOfLastWord }
