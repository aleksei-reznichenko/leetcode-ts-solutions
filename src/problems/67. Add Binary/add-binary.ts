/**
 * Returns the sum of two binary strings.
 *
 * @param {string} a - binary string.
 * @param {string} b - binary string.
 * @return {string} sum of a and b.
 */
function addBinary(a: string, b: string): string {
  let pos = -1
  let result = ''
  let carry = 0
  const la = -a.length
  const lb = -b.length

  while (true) {
    if (!carry) {
      if (pos < la && pos < lb) return result
      if (pos < la) return b.slice(0, pos + 1) + result
      if (pos < lb) return a.slice(0, pos + 1) + result
    }

    const sum = +(a.at(pos) ?? 0) + +(b.at(pos) ?? 0) + carry
    carry = +(sum > 1)
    result = (sum % 2) + result
    pos--
  }
}

export { addBinary }
