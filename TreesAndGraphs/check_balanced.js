/*
Check Balanced: Implement a function to check if a binary tree is balance. For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.

            10
           /  \
          4    19
         / \    \
        3   5    20
       /
      2

*/


function checkBalanced (tree) {
  const treeDepthArray = findDepth(tree)

  const minDepth = Math.min(...treeDepthArray)
  const maxDepth = Math.max(...treeDepthArray)

  if (maxDepth - minDepth > 1) return false
  else return true
}

function findDepth (tree, currDepth = 0) {
  currDepth++
  if (!tree.left && !tree.right) return [currDepth]
  let leftResults = [], rightResults = []
  if (tree.left) {
    leftResults = leftResults.concat(findDepth(tree.left, currDepth))
    if (!tree.right) rightResults = rightResults.concat([currDepth])
  }
  if (tree.right){
    rightResults = rightResults.concat(findDepth(tree.right, currDepth))
    if (!tree.left) leftResults = leftResults.concat([currDepth])
  }

  let results = leftResults.concat(rightResults)
  return results
}


let myTree = {
    value: 10,
    left: { value: 4,
            left: { value: 3, left: {value: 2} },
            right: { value: 5 } },
    right: { value: 19, right: { value: 20}}};
console.log(checkBalanced(myTree))

