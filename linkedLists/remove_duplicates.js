/*
  Remove Dups:
  Write code to remove duplicates from an unsorted linked list.
*/

function removeDups(list){

  if(!list) return list

  let arr = [], node = list
  arr.push(node.val)
  while(node.next){
    if(arr.indexOf(node.next.val) > -1) node.next = node.next.next
    // make sure to check the node.next.val !!
    else{
      arr.push(node.next.val)
      node = node.next
    }
  }
  return list
}


