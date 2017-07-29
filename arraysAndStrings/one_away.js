module.exports = function oneAway(str1, str2){
  const unique = new Set(str1.split('').concat(str2.split('')))
  return Math.abs(str1.length - unique.size) + Math.abs(str2.length - unique.size) <= 1
}
