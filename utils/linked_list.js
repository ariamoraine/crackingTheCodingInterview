class LinkedList {
  constructor(){
    this.head = null
  }

  insert (val) {
    const node = new Node(val)
    if(!this.head) this.head = node
    else{
      let current = this.head
      while(current.next){
        current = current.next
      }
      current.next = node
    }
  }
}

class Node{
  constructor(val){
    this.value = val
    this.next = null
  }
}



module.exports = {LinkedList, Node}
