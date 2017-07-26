/* Write an algorithm to find the ‘next’ node (i.e., in-order successor) of a given node in a binary search tree where each node has a link to its parent.

            10
           /  \
          4    19
         /     / \
        3     17  20
*/

function findNext (node) {
  if (node.right) {
    return findSmallest(node.right)
  } else {
    if (node.parent.value < node.value) return false
    else return node.parent
  }
}

//the following function is to find the smallest value of a given tree
function findSmallest (tree) {
  if (tree.left) return findSmallest(tree.left)
  else return tree
}

// The following code is all just to set up the binary search tree with the parent reference.
let firstTree = {
  value: 10,
  left: null,
  right: null,
  parent: null
}

let secondTree = {
  value: 4,
  left: null,
  parent: firstTree
}

firstTree.left = secondTree

let thirdTree = {
  value: 3,
  parent: secondTree
}

secondTree.left = thirdTree

let fourTree = {
  value: 19,
  left: null,
  right: null,
  parent: firstTree
}

firstTree.right = fourTree

let fiveTree = {
  value: 17,
  parent: fourTree
}

fourTree.left = fiveTree

let sixTree = {
  value: 20,
  parent: fourTree
}

fourTree.right = sixTree

/*
this is what our tree looks like

    10
   /  \
  4    19
 /     / \
3     17  20
*/

console.log(findNext(secondTree)) //passing in the node with value of 4 and will return the node with 10 as a value
console.log(findNext(sixTree)) // passing in the node with the value of 20 it will return false as there is no node after that.
console.log(findNext(firstTree)) //passing in the node with the value of 10 it will reutrn the node with the value of 17
