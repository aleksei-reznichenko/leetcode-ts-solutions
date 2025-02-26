const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
} as const

type Keys = keyof typeof map

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
