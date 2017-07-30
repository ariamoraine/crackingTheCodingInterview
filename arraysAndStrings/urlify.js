module.exports = function encodeSpaces(url) {
  if (!url || url.length === 0) return url

  let spaceCount = 0
  for(let i = 0; i < url.length; i++){
    if(url[i] === ' ') spaceCount ++
  }

  // for every space character, we're adding 2 extra characters
  let newLength = url.length-1 + 2*spaceCount, newUrl = url.split('')

  for(let i = url.length-1, j = newLength; i >= 0, j > i; i--, j--){
    // console.log(i, j)
    // i = 11, j = 15
    if(url[i] === ' '){  // index 5
      newUrl[j] = '0'   // index 9
      newUrl[--j] = '2' // index 8
      newUrl[--j] = '%' // index 7
    }
    else newUrl[j] = url[i]
  }
  return newUrl.join('')
}
