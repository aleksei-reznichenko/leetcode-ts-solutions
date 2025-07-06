const map = {
  // biome-ignore lint/style/useNamingConvention: mute linter
  I: 1,
  // biome-ignore lint/style/useNamingConvention: mute linter
  V: 5,
  // biome-ignore lint/style/useNamingConvention: mute linter
  X: 10,
  // biome-ignore lint/style/useNamingConvention: mute linter
  L: 50,
  // biome-ignore lint/style/useNamingConvention: mute linter
  C: 100,
  // biome-ignore lint/style/useNamingConvention: mute linter
  D: 500,
  // biome-ignore lint/style/useNamingConvention: mute linter
  M: 1000,
} as const

type Keys = keyof typeof map

/**
 * Converts a given Roman numeral string to a number.
 *
 * Throws an error if the input string is empty or contains invalid characters.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param s The Roman numeral string to convert.
 * @returns The converted number.
 */
export function romanToInt(s: string): number {
  if (!s) {
    throw new Error('invalid input')
  }

  let sum = 0
  let lastDigit = 0

  for (const char of s) {
    if (char in map === false) {
      throw new Error('invalid input')
    }

    const currentDigit = map[char as Keys]
    sum += currentDigit

    if (lastDigit < currentDigit) {
      sum -= lastDigit * 2
    }

    lastDigit = currentDigit
  }

  return sum
}
