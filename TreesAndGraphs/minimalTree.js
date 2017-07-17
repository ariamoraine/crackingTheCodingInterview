class Tree {
  constructor (value) {
    this.value = value
  }

  insert (tree) {
    let dir = this.value > tree.value ? "left" : "right"
    if (!this[dir]) this[dir] = tree
    else this[dir].insert(tree)
  }
}

function makeMinimalTree (array) {
  const middleOfArray = Math.floor(array.length / 2)
  let newTree = new Tree(array[middleOfArray])
  if (array.length === 1) {
    const bottomTree = new Tree(array[0])
    return bottomTree
  }

  newTree.insert(makeMinimalTree(array.slice(0, middleOfArray)))
  newTree.insert(makeMinimalTree(array.slice(middleOfArray + 1)))
  return newTree
}

let myTree = makeMinimalTree([3, 4, 5, 10, 17, 19, 20])
console.log(myTree) /* -> Tree {
                            value: 10,
                            left: Tree { value: 4, left: Tree { value: 3 }, right: Tree { value: 5 } },
                            right:
                             Tree {
                               value: 19,
                               left: Tree { value: 17 },
                               right: Tree { value: 20 } } }
*/
console.log(myTree.left.left) // -> Tree { value: 3}
/*

[3, 4, 5, 10, 17, 19, 20]

            10
           /  \
          4    19
        /  \   / \
       3    5 17  20
*/
