module.exports = function rotateMatrix (array) {
  let finalizedArr = [], outer = array.length - 1, m = 0;
  for(let i = 0; i < array.length; i++){
    finalizedArr.push([])
  }

  while(outer >= 0){
    for(let i = 0; i < array[outer].length; i++){
      let currLetter = array[outer][i];
      finalizedArr[i][outer] = array[m][i]
    }
    m++
    outer--
  }
  return finalizedArr
}

/*
Time complexity O(n^2)
Space: O(n)
*/
