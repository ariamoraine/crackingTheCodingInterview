function rotateMatrix(array){
  let finalizedArr = [], outer = array.length - 1, m = 0;
  for(let i = 0; i < array.length; i++){
    finalizedArr.push([])
  }

  while(outer >= 0){
    for(let i = 0; i < array[outer].length; i++){
      let currLetter = array[outer][i];
      finalizedArr[i][outer] = array[m][i]
    }
    m++;
    outer--;
  }
  return finalizedArr;
}

/*
Time complexity O(n^2)
Space: O(n)
*/


console.log(rotateMatrix([[1, 2, 3, 4], [0, 1, 2, 3], [0, 0, 1, 2], [1, 0, 0, 1]]))
console.log(rotateMatrix([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]))
