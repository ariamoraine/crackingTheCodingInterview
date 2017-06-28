class Stack {

  constructor () {
    this.top = null
    this.min = []
  }

  myPop () {
    if (this.top) {
      const nodeToReturn = this.top
      this.top = this.top.next
      if (nodeToReturn.value == this.findMin()) {
        this.min.pop()
      }
      return nodeToReturn
    }
    return false
  }

  peek () {
    return this.top.value
  }

  myPush (value) {
    const newNode = new Node (value)
    newNode.next = this.top
    this.top = newNode
    if (this.min.length === 0) {
      this.min.push(value)
    } else {
      if (value <= this.min[this.min.length -1]) {
        this.min.push(value)
      }
    }
  }

  findMin () {
    return this.min[this.min.length -1]
  }

}

class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}
