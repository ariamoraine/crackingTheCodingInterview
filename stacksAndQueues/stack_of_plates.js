class SetOfStacks {
  constructor(){
    this.currStack = null
    this.nextStack = null
  }

  myPush(val){
    if(!this.currStack){
      this.currStack = new Stack()
      this.currStack.top = new Node(val)
    }
    else if(this.currStack.size >= 3){
      let newStack = new Stack()
      newStack.top = new Node(val, this.currStack.top)
      this.nextStack = this.currStack
      this.currStack = newStack
    }
    else{
      this.currStack.top = new Node(val, this.currStack.top)
    }
    this.currStack.size++
  }

  myPop(){
    let curr;
    if(this.currStack.size === 1){
      // we would need to move pointers for currstack/next stack\
      curr = this.currStack.top // the current node we want to pop and return
      this.currStack = this.nextStack
      this.nextStack = this.nextStack.nextStack
    }
    else{
      // just pop the value off
      curr = this.currStack.top
      this.currStack.top = this.currStack.top.next
      this.currStack.size--
    }
    return curr.val
  }

}

class Stack {
  constructor(){
    this.top = null
    this.size = 0
  }
}



class Node {
  constructor(value, prevNode){
    this.val = value;
    this.next = prevNode;
  }
}



const mySetOfStacks = new SetOfStacks()

mySetOfStacks.myPush('a');

console.log('----------------------')
console.log('after a', mySetOfStacks)

mySetOfStacks.myPush('b');
console.log('----------------------')
console.log('after b', mySetOfStacks)

mySetOfStacks.myPush('c')
console.log('----------------------')
console.log('after c', mySetOfStacks)

mySetOfStacks.myPush('d')
console.log('----------------------')
console.log('after d', mySetOfStacks)

mySetOfStacks.myPush('e')
console.log('----------------------')
console.log('after e', mySetOfStacks)

mySetOfStacks.myPush('f')
console.log('----------------------')
console.log('after f', mySetOfStacks)

mySetOfStacks.myPop()
console.log('----------------------')
console.log('after pop', mySetOfStacks)
