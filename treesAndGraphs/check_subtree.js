function checkSubtree(t1, t2){
  let queue=[t1]
  while(queue.length){
    let curr = queue.shift()
    if(curr.value === t2.value){
      if(depthCheck(curr, t2)) return true
    }
    if(curr.left) queue.push(curr.left)
    if(curr.right) queue.push(curr.right)
  }
  return false
}

function depthCheck(t1, t2){
  if(t1.left && t2.left) return depthCheck(t1.left, t2.left)
  if(t1.right && t2.right) return depthCheck(t1.right, t2.right)
  if(!t1.left && !t2.left && !t1.right && !t2.right && t1=== t2) return true
  return false
}


let subTree = {
    value: 4,
    left: { value: 3},
    right: { value: 5}}

let tree1 = {
    value: 10,
    left: {
      value: 4,
      left: { value: 3},
      right: { value: 5}},
    right:{ value: 19,
       left: { value: 17 },
       right: { value: 20 } } };


console.log(checkSubtree(tree1, subTree))
