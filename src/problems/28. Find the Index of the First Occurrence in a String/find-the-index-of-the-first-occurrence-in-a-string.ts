/**
 * Finds the index of the first occurrence of the substring `needle` in the string `haystack`.
 *
 * If `needle` is an empty string, the function returns 0.
 * If `needle` is not found in `haystack`, the function returns -1.
 *
 * Time complexity: O(n * m) where n is the length of `haystack` and m is the length of `needle`
 * Space complexity: O(1)
 *
 * @param haystack The string in which to search for the substring.
 * @param needle The substring to search for.
 * @returns The index of the first occurrence of `needle` in `haystack`, or -1 if `needle` is not part of `haystack`.
 */
function strStr(haystack: string, needle: string): number {
  if (!needle) return 0

  if (haystack && haystack.length >= needle.length) {
    for (let j = 0, k = 0; j < haystack.length; j++) {
      const l = j - k
      if (haystack[j] === needle[l]) {
        if (l === needle.length - 1) return k
      } else {
        j = k
        k = j + 1
      }
    }
  }

  return -1
}

export { strStr }
