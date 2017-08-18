/*
you are implementing a binary tree class from scratch which, in addition to insert, find, and delete has a method getRandomNode() which returns a random node from the tree. All nodes should be equally likely to be chosen. Design and implement an algorithm for get RandomNode and eplain how you would implement the rest of the methods
*/
class Tree {
  constructor (value) {
    this.value = value
    this.size = 1
  }

  insert (value) {
    this.size++
    let dir = this.value > value ? "left" : "right"
    if (!this[dir]) {
      this[dir] = new Tree(value)
    }
    else {
      this[dir].insert(value)}
  }

  bfs (num) {
    let queue = [this]

    while (num > 0) {
      let node = queue.shift()
      if (num === 1) return node
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
      num--
    }
  }

  getRandomNode () {
    const randomNumber = Math.floor(Math.random() * this.size)
    let results = this.bfs(randomNumber)
    return results
  }
}

let myTree = new Tree(5)

myTree.insert(3)
myTree.insert(2)
myTree.insert(7)
myTree.insert(4)
myTree.insert(9)


console.log(myTree.getRandomNode())

