function linkListFlip (ll) {
  let current = ll
  let num = []

  while (current) {
    num.push(current.value)
    current = current.next
  }
  return Number(num.reverse().join(''))
}

function numFlip (num) {
  let strNum = '' + num
  console.log("TO STRING NUM", strNum)
  let arr = strNum.split('')
  let head = null
  let tail = null

  while (arr.length) {
    let node = {
      value: arr.pop(),
      next: null
    }
    if (!head) head = node
    if (tail) tail.next = node
    tail = node
  }
  return head
}

function sumList (ll1, ll2) {
  let num1 = linkListFlip(ll1)
  let num2 = linkListFlip(ll2)
  let sum = num1 + num2
  return numFlip(sum)
}

let ll1 = {value: 1, next: { value: 2, next: { value: 3, next: null}}}
let ll2 = {value: 4, next: { value: 5, next: { value: 6, next: null}}}

sumList(ll1, ll2)
