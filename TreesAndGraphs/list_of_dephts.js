/*

  List of Depth
   -----------
  Given a binary tree, design an algorithm which creates a linked list  of all the nodes at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).


 questions to ask interviewer: Pre-Order? Post-Order? In-Order?
 how would you want the lists returned?

*/
function LinkedList (value) {
  this.value = value
  this.next = null
}

function treeList(tree){
// first: get the depth -- how many buckets?
  // start at root, put value into first bucket
  // start at first bucket and iterate through values in bucket,
    // find value in tree,
    // inset that tree's children into next bucket
  // move on to next bucket when done iterating
    // repeat 21 + 22
  // make linked lists out of each bucket
  // return array of linked lists
  const depth = findDepth(tree)
  const resultsArr = new Array(depth) // [ __ , __ , __ ]
  resultsArr[0] = [tree.value]

  for(let i = 0; i < depth; i++){

    let next = resultsArr[i] // [ 10 ]
      , children = null


    for(let j = 0; j < next.length; j++){

      console.log("I", i)
      console.log("J", j)

      let curr = resultsArr[i][j] // 10

      // console.log("CURR", curr)

      children = findCurrChildren(tree, curr) // [ 4, 19 ]
      resultsArr[i+1] = children
      children = null
      // console.log("RESULTS ARR", resultsArr)
      // console.log("CHILDREN", children)
    }

  }


}

function findCurrChildren(tree, val){

  let queue = [tree]

  while(queue.length){
    let curr = queue.shift()
    if(curr.value === val) {
       return [curr.left.value, curr.right.value]
    }
    else if(curr.left) queue.push(curr.left)
    else if(curr.right) queue.push(curr.right)
  }
}


function findDepth(tree, curr=0){
  if(!tree) return curr
  curr++
  let leftResults = findDepth(tree.left, curr)
  let rightResults = findDepth(tree.right, curr)
  return leftResults > rightResults ? leftResults : rightResults
}


/*
  {
    1   :     [10]
    2   :     [4, 19]
    3   :     [3, 5, 17, 20]
  }
*/


let myTree = {
    value: 10,
    left: { value: 4,
            left: { value: 3 },
            right: { value: 5 } },
    right:{ value: 19,
       left: { value: 17 },
       right: { value: 20 } } };

/*
            10
           /  \
          4    19
        /  \   / \
       3    5 17  20
*/

console.log(treeList(myTree))
// [ { val: 10, next: null}, { val: 4, next: { val: 19, next: null}}, { val: 3, next: { val: 5, next: { val: 17, next: {val: 20, next: null }}}} ]






    // let currTree = queue.shift()
    // let currSet
    // if(!currTree) return
    // else if(currTree.length === 1){
    //   currSet = [currTree[0].left, currTree[0].right]
    // }
    // else{
    //   currTree.forEach(node => {
    //     currTree.push(node.left)
    //     currTree.push(node.right)
    //   })
    // }
    // groups.push(currSet)
    // currSet = []
