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

//this recursive function will take an array and return a tree that has a minimal height
function makeMinimalTree (array) {
  const middleOfArray = Math.floor(array.length / 2)
  //we find the middle of the array and make a tree out of it.
  let newTree = new Tree(array[middleOfArray])
  //our base case, if the array only has one element in it. than make a new tree and return it
  if (array.length === 1) {
    const bottomTree = new Tree(array[0])
    return bottomTree
  }
  //the next two lines will call insert with the results from the recursive call on each half the array
  newTree.insert(makeMinimalTree(array.slice(0, middleOfArray)))
  newTree.insert(makeMinimalTree(array.slice(middleOfArray + 1)))
  return newTree
}

let myTree = makeMinimalTree([3, 4, 5, 10, 17, 19, 20])
console.log(myTree) //this console log will return the following tree
/* ->
  Tree {
    value: 10,
    left: Tree {
            value: 4,
            left: Tree { value: 3 },
            right: Tree { value: 5 } },
    right: Tree {
            value: 19,
            left: Tree { value: 17 },
            right: Tree { value: 20 } } }
*/
console.log(myTree.left.left) // -> Tree { value: 3}
/*
The input array
[3, 4, 5, 10, 17, 19, 20]
the returned tree
            10
           /  \
          4    19
        /  \   / \
       3    5 17  20
*/
