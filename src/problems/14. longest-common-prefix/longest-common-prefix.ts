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
