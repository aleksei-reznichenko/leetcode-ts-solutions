/**
 * Finds the longest common prefix of a given array of strings.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param strings the array of strings
 * @returns the longest common prefix, or an empty string if no common prefix exists
 */
export function longestCommonPrefix(strings: string[]): string {
  let result = ''

  if (strings.length) {
    const length = Math.min(...strings.map((w) => w.length))
    const template = strings.pop() as string

    for (let index = 0; index < length; index++) {
      const char = template[index]
      if (strings.some((w) => w[index] !== char)) {
        break
      }
      result += char
    }
  }

  return result
}
