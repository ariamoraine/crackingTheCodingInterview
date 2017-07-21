class Node {
  constructor (value, type) {
    this.value = value
    this.type = type
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }

  enqueue (value, type) {
    const newNode = new Node(value, type)

    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
  }

  dequeueAny () {
    const oldHead = this.head
    this.head = this.head.next
    return oldHead
  }

  dequeueDogOrCat (animalType) {
    let currentNode = this.head
    let prevNode = null

    while (currentNode) {
      if (currentNode.type === animalType) { //if we have found the first cat or dog
        const foundAnimal = currentNode //store the animal node

        if (foundAnimal !== this.head && foundAnimal !== this.tail) {
          prevNode.next = foundAnimal.next
        }
        if (foundAnimal === this.head) {
          this.head = this.head.next
        }
        if (foundAnimal === this.tail) {
          this.tail = prevNode
        }

        return foundAnimal.value
      }
      prevNode = currentNode
      currentNode = currentNode.next
    }
  }
}

let animalLinkedList = new LinkedList()

animalLinkedList.enqueue("Pepper", "cat") //Put a cat in our list
animalLinkedList.enqueue("Mr Salt", "dog") //Put a dog in our list
animalLinkedList.enqueue("Oliver", "cat") //Put a cat in our list
console.log(animalLinkedList.dequeueAny()) //Take the first animal out of the queue
console.log(animalLinkedList.dequeueDogOrCat('dog')) //Dequeue the oldest dog
console.log(animalLinkedList) //our linked list should look like LinkedList {
//  head: Node { value: 'Oliver', type: 'cat', next: null },
//  tail: Node { value: 'Oliver', type: 'cat', next: null } }
