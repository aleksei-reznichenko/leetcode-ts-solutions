const A1 = '{'
const Z1 = '}'

const A2 = '['
const Z2 = ']'

const A3 = '('
const Z3 = ')'

/**
 * Determines if a string of parentheses is valid.
 *
 * A string is considered valid if all open brackets are closed by the same type
 * of brackets and in the correct order.
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
 * @param s The string containing the parentheses to validate.
 * @returns True if the string is valid, false otherwise.
 */
export function isValid(s: string): boolean {
  const stack: string[] = []

  for (const c of s) {
    switch (c) {
      case A1:
      case A2:
      case A3: {
        stack.push(c)
        continue
      }

      case Z1: {
        if (stack.pop() !== A1) return false
        break
      }

      case Z2: {
        if (stack.pop() !== A2) return false
        break
      }

      case Z3: {
        if (stack.pop() !== A3) return false
        break
      }
    }
  }

  return !stack.length
}
