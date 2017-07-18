/*
   Implement an algorithm to find the kth to last element of a singly linked list
*/

function KthToLastLength(list, k){
  if(!list) {
    throw new Error("invalid list")
  }

  let last = list, kTh = list

  for(let i = 0; i < k; i++){
    if(!kTh.next) throw new Error('list is not long enough')
    else kTh = kTh.next
  }

  while(kTh.next){
    kTh = kTh.next
    last = last.next
  }
  return last.val
}
