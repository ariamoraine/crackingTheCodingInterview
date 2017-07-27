function zeroMatrix(arr){
  let x = new Set()
  let y = new Set()
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
     if(arr[i][j] === 0){ //
       x.add(i)
       y.add(j)
     }
    }
  }
  for(let i = 0; i < arr.length; i++){
    let changeX = x.has(i) ? true : false
    for(let j = 0; j < arr[i].length; j++){
      let changeY = y.has(j) ? true : false
      if(changeX || changeY){
        arr[i][j] = 0
      }
    }
  }
  return arr
}

console.log(zeroMatrix([[0,1,2,3,0,5], [1,3,5,6,2,10], [10,3,2,0,8,9]])) // [ [0, 0, 0, 0, 0, 0], [0, 3, 5, 0, 0, 10 ], [0, 0, 0, 0, 0, 0] ]
