module.exports = function isUnique(str){
  if(str.length > 128) return false
  for(let i = 0; i < str.length; i++){
    for(let j = i+1; j < str.length; j++){
      if(str[i] === str[j]) return false
    }
  }
  return true
}
// time complexity : O(n^2)
