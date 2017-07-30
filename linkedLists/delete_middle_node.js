/*
Implement an algorithm to delete a node in the middle
(i.e. any node except the first and last node, not necessarily the exact middle)
of singly linked list, given only access to that node

EXAMPLE:
  input: the node c from the linked list a-> b -> c -> d -> e -> f
  output: nothing is returned, but the new linked list looks like a-> b -> d -> e -> f
*/

module.exports = function deleteMiddle(list, target){
  // if the nodes value === target, then delete it (rearrange the next node it's pointing to)
  /* APPROACH:
    1. traverse linkedList
    2. compare each node's value to the target, act accordingly
  */
  let current = list.head, prev = null
  while(current){
    if(current.value === target) {
      prev.next = current.next
    }
    prev = current
    current = current.next
  }
}
