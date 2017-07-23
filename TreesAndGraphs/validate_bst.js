/* Implement a function to check if a binary tree is a binary search tree.

  Assumptions: - no duplicate values
                  - if there are, this can be refactored to keep track of depth
               - left child < parent < right child


------- psuedo code -------
all values  on the left should be less than root

all values on the right should be greater than root.

call func with root,
  if it has left, recurse with left child
  if it has right, recurse with right child

  else put current value in array and hand array back up

  with results from recursive call from both left side and right side, needs to check
    - if each value in returned array is less than current root (if left)
    - same but for right side.

  if true,  pass up all values again
  else pass up false (which will end up returning false)

  if we get to end and start equals our tree's root, return true.
*/


function validateBst(tree, start=0){
  if(!start) start = tree.value

  let leftResults = [], rightResults = []

  if(!tree.left && !tree.right) return [tree.value]

  if(tree.left) leftResults = leftResults.concat(validateBst(tree.left, start))
  if(tree.right) rightResults = rightResults.concat(validateBst(tree.right, start))

  if(!leftResults || !rightResults) return false

  if(leftResults.filter(num => num > tree.value).length) return false

  if(rightResults.filter(num => num < tree.value).length) return false

  if(start === tree.value) return true
  return leftResults.concat(tree.value, rightResults)

}


let yesBst = {
    value: 10,
    left: { value: 4,
            left: { value: 3 },
            right: { value: 5 } },
    right:{ value: 19,
       left: { value: 17 },
       right: { value: 20 } } };

let noBst = {
    value: 10,
    left: { value: 4,
            left: { value: 3 },
            right: { value: 17 } },
    right:{ value: 19,
       left: { value: 5 },
       right: { value: 20 } } };


console.log(validateBst(yesBst))
console.log(validateBst(noBst))

/*

        // yesBst                  // noBst
            10                        10
           /  \                      /  \
          4    19                   4    19
        /  \   / \                 / \   / \
       3    5 17  20              3  17 5   20


*/
