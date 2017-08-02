/*

A binary search tree was created by traversing through an array from left to right and inserting each element. Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.

Input:

      2
     / \
    1   3

Output: [ 2, 1, 3 ], [ 2, 3, 1 ]

        10
       /  \
      3    17
     / \     \
    1   4     19


 [ [10, 3, 17, 1, 4, 19], [10, 17, 3, 4, 1, 19],
 [10, 3, 17, 1, 19, 4], [10, 17, 3, 4, 19, 1],
 [10, 3, 17, 4, 1, 19], [10, 17, 3, 1, 4, 19],
 [10, 3, 17, 4, 19, 1], [10, 17, 3, 1, 19, 4],
 [10, 3, 17, 19, 1, 4], [10, 17, 3, 19, 1, 4],
 [10, 3, 17, 19, 4, 1], [10, 17, 3, 19, 4, 1] ]


                    ~~~~~~~~~~ HINT ~~~~~~~~~~
break this down into subprobelms. use recursion. if you had all possible sequences for te left subtree and the right subtree, how could you create all possible sequences for the entire tree?


*/


function bstSequence(tree){
    let possibleOrders = [[tree.value]], currLevel = [tree], nextLevel = [], queue = [tree]

    if (tree.left) nextLevel.push(tree.left)
    if (tree.right) nextLevel.push(tree.right)

    while(queue.length){
        const currNode = queue.shift()

        if (currLevel.indexOf(queue[0]) > -1) { //check if next value in queue is still in currLevel
            //if it is we are still on the same level
            if (currNode.left) nextLevel.push(currNode.left)
            if (currNode.right) nextLevel.push(currNode.right)

        } else {
            console.log("CURR NODE", currNode)
            //else we need to change around nextLevel and currLevel
            let childrenPerms = findPerms(nextLevel) // helper function to give us all permutations of childrenn -> [[3, 17], [17, 3]]
            currLevel = nextLevel
            nextLevel = []

            let tempArr = []

            for(let i = 0; i < possibleOrders.length; i++){
              for(let j = 0; j < childrenPerms.length; j++){
                tempArr.push(possibleOrders[i].concat(childrenPerms[j]))
              }
            }
            possibleOrders = tempArr
            tempArr = []
            // console.log("POSSIBLE ORDERS", possibleOrders)
                //[[10, 3, 17], [10, 17, 3]] for each?
                // push array into possible Orders, take possibleOrders and add in returned permutations?

        }
        if(currNode.left) {
            queue.push(currNode.left)
        }
        if(currNode.right) {
            queue.push(currNode.right)
        }
    }

    let tempPossible = []

    for(let i = 0; i < possibleOrders.length; i++){
      let tempSubArr = []
      for(let j = 0; j < possibleOrders[i].length ; j++){
        if(possibleOrders[i][j] !== '') tempSubArr.push(possibleOrders[i][j])
      }
      tempPossible.push(tempSubArr)
      tempSubArr = []
    }

    possibleOrders = tempPossible

    return possibleOrders

}

function findPerms(arr){
    let newArr = []

    if(arr.length === 0) return ['']

    for(let i = 0; i < arr.length; i++){
      let curr = [arr[i]] // [1]
      let others = arr.slice(0, i).concat(arr.slice(i+1))
      let subPerms = findPerms(others)
      subPerms.forEach(perm => {
        if(perm === '') newArr.push(curr)
        else newArr.push(curr.concat(perm))
      })
    }
  return newArr
}


let myBalancedTree1 = {
    value: 10,
    left: { value: 4 },
    right: { value: 19}}


console.log(bstSequence(myBalancedTree1))
