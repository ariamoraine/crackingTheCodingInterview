module.exports = function anagrams(str1, str2){
  let s1 = str1.split('').sort().join('');
  let s2 = str2.split('').sort().join('');
  return s1 == s2 ? true : false;
}

/*
  Time: O()
  Space: O()
*/

/* Another, less pretty, way */
function anagrams(str1, str2){
  if(str1.length !== str2.length) return false;

  const map = str1.split('').concat(str2.split('')).reduce((alph, char) => {
    if(alph.get(char)){ alph.set(char, alph.get(char) + 1) }
    else{ alph.set(char, 1) }
    return alph;
  }, new Map());

  for (let count of map.values()){
    if(count%2) return false;
  }
  return true;
}
