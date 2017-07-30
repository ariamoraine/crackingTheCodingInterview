module.exports = function oneAway(str1, str2){
  let letters = str1.concat(str2).split('')
  letters = letters.filter((letter, i) => {
    return letters.indexOf(letter) === i && str1.indexOf(letter) > -1 && str2.indexOf(letter) > -1
  })
  return str1.length - letters.length <= 1 && str2.length - letters.length <= 1
}
