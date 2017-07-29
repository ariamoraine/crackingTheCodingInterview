module.exports = function palindromePermutation(str) {
  if (!str || str.length === 0) return false

  let chars = new Set()
  for (let char of str) {
    if (char !== ' ') { // ignore spaces ; if we didnt then we would want to check (on line 17 that chars.size <= 2)
      if (chars.has(char)) chars.delete(char)
      else chars.add(char)
    }
  }
  return chars.size <= 1
}
