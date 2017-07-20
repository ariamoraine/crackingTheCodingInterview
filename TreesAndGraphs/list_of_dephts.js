/*

  List of Depth
   -----------
  Given a binary tree, design an algorithm which creates a linked list  of all the nodes at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).


 questions to ask interviewer: Pre-Order? Post-Order? In-Order?
 how would you want the lists returned?

*/

function Node(val){
  this.value = val
  this.next = null
}

class LinkedList {
  constructor(){
    this.head = null
    this.tail = null
  }

  addToTail(val){
    let x = new Node(val)
    if(!this.head){
      this.head = x
      this.tail = x
    }
    else{
      let currTail = this.tail
      currTail.next = x
      this.tail = x
    }
  }
}

function treeList(tree){
  const depth = findDepth(tree)
  const resultsArr = new Array(depth) // [ __ , __ , __ ]
  const linkedListArr = []

  for(let i = 0; i < depth; i++){
    if(i === 0){
      resultsArr[i] = [tree.value]
    }
    else {
      resultsArr[i] = []
    }
  }


  for(let i = 0; i < depth; i++){
    let currSubArr = resultsArr[i] // [ 10 ]
      , children = null

    for(let j = 0; j < currSubArr.length; j++){
      let currNumber = resultsArr[i][j] // 10

      children = findCurrChildren(tree, currNumber) // [ 4, 19 ]
      if(resultsArr[i+1]){
        resultsArr[i+1] = resultsArr[i+1].concat(children)
      }
      children = null
    }
  }

  for(let i = 0; i < resultsArr.length; i++){
    linkedListArr[i] = new LinkedList()
    linkedListArr[i].addToTail(resultsArr[i][0])

    for(let j = 1; j < resultsArr[i].length; j++){
      linkedListArr[i].addToTail(resultsArr[i][j])
    }
  }
  return linkedListArr
}

function findCurrChildren(tree, val){
  let queue = [tree]

  while(queue.length){
    let curr = queue.shift()
    if(curr.value === val) {
      if(curr.left && curr.right){
       return [curr.left.value, curr.right.value]
      }
      if(curr.left && !curr.right){
        return [curr.left.value]
      }
      if(!curr.left && curr.right){
        return [curr.right.value]
      }
    }
    if(curr.left) queue.push(curr.left)
    if(curr.right) queue.push(curr.right)
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
