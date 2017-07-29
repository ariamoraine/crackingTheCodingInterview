/* Design an algoritm and write code to find the first common ancestor of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not necessarily a BST

            10
           /  \
          4    19
        /  \   / \
       3    5 17  20
      / \    \
     1   2    6

*/
function commonAncestor (tree, leftSearch, rightSearch) {
  let leftResults = findNodes(tree.left, leftSearch, rightSearch)
  let rightResults = findNodes(tree.right, leftSearch, rightSearch)

  let funcResults
  if (leftResults[0] === true && leftResults[1] === true ) {
    funcResults = commonAncestor(tree.left, leftSearch, rightSearch)
  }
  else if (rightResults[0] === true && rightResults[1] === true ) {
    funcResults = commonAncestor(tree.right, leftSearch, rightSearch)
  }
  else if ((leftResults[0] || leftResults[1]) && (rightResults[0] || rightResults[1])) return tree.value
  else funcResults = false
  return funcResults
}

function findNodes (subTree, leftSearch, rightSearch) {
  let left = false, right = false, queue = [subTree]

  while (queue.length > 0) {
    let current = queue.shift()

    if (current.value === leftSearch) left = true
    else if (current.value === rightSearch) right = true
    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }

  return [left, right]
}

let tree = {
    value: 10,
    left: { value: 4,
            left: { value: 3,
                    left: {value: 1},
                    right: {value: 2} },
            right: { value: 5,
                     right: {value: 6}} },
    right:{ value: 19,
       left: { value: 17 },
       right: { value: 20 } } }

console.log(commonAncestor(tree, 1, 5))
