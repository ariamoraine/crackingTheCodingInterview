/*
Check Balanced: Implement a function to check if a binary tree is balance. For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.

        Not balanced!
      10              10
     /  \            /  \
    4    19         8    19
   /               /       \
  3               3        20
 /               / \
2               2   4

           Balanced! :)
        10                10
       /  \              /  \
      4    19           4    19
    /  \   / \         /    /  \
   3    5 17  20      3    17   20
  /
 2

*/


function checkBalanced (tree, currDepth = 0) {
  currDepth++ //everytime we add one to the depth
  if (!tree.left && !tree.right) return currDepth //if we got down to a leaf than just return the current depth
  let leftResults, rightResults //we start the left and right results so we never run into the edgecase of them being undefined

  if (tree.left) { //if there is a left side of the tree we need to recurse down that side
    leftResults = checkBalanced(tree.left, currDepth) //adding the results of the recursive call to our results
    if (!tree.right) rightResults = currDepth //if the current tree does not have a right side then we will want to compare the current depth to whatever our recursive call to the left returns
  }

  //same logic as above but for the right side of the tree.
  if (tree.right){
    rightResults = checkBalanced(tree.right, currDepth)
    if (!tree.left) leftResults = currDepth
  }

  if (!leftResults || !rightResults) return false //if either the left or the right sides of the tree has returned us false than just return false
  if (Math.abs(leftResults - rightResults) > 1) return false //if the difference between the depths from the left side and the right side are greater than 1 that means we have found an imbalance and we will just return false

  const largerDepth = leftResults > rightResults ? leftResults : rightResults //we find the longer of the two depths and return that so that we can use that to compare to our previous call

  if (currDepth === 1) return true //if we are at the root of the tree than we don't want to return a number, we want to return true
  else return largerDepth //if we aren't at the root than we need to return the depth from the previous call to the parent so that we can use it to other side of the tree
}

let myImbalancedTree1 = {
    value: 10,
    left: { value: 4,
            left: { value: 3, left: {value: 2}}},
    right: { value: 19}}

let myImbalancedTree2 = {
  value: 10,
  left: { value: 8,
          left: { value: 3,
                  left: { value: 2},
          right: { vlaue: 4}}},
  right: { value: 19,
           right: { value: 20}}
}

let myBalancedTree1 = {
    value: 10,
    left: { value: 4,
            left: { value: 3,
                    left: { value: 2} },
            right: { value: 5 } },
    right: { value: 19,
       left: { value: 17 },
       right: { value: 20 }}}

let myBalancedTree2 = {
    value: 10,
    left: { value: 4,
            left: { value: 3}},
    right: { value: 19,
       left: { value: 17 },
       right: { value: 20 }}}

console.log(checkBalanced(myImbalancedTree1)) // -> false
console.log(checkBalanced(myImbalancedTree2)) // -> false
console.log(checkBalanced(myBalancedTree1)) // -> true
console.log(checkBalanced(myBalancedTree2)) // -> true
