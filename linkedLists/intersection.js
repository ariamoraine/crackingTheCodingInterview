function intersection(list1, list2){

  let ll1 = list1, ll1couarnt = 0, ll2 = list2, ll2count = 0, tail1, tail2, pointer1 = ll1, pointer2 = ll2

  while(ll1){
    ll1count+=1
    if(!ll1.next){
      tail1 = ll1
    }
    ll1 = ll1.next
  }

  while(ll2){
    ll2count+=1
    if(!ll2.next){
      tail2 = ll2
    }
    ll2 = ll2.next
  }
  if(tail1 !== tail2) return false

  let longer = ll1count > ll2count ? list1 : list2
    , shorter = ll1count > ll2count ? list2 : list1
    , difference = Math.abs(ll1count - ll2count)

  while(longer.next){
    if(difference <= 0){
      if(longer === shorter){
        return longer
      }
      shorter = shorter.next
    }
    difference -= 1
    longer = longer.next
  }
  return false
}



function LinkedList(value) {
  this.value = value;
  this.next = null;
};

const a = new LinkedList('a')
const b = new LinkedList('b')
const c = new LinkedList('c')
const d = new LinkedList('d')
const e = new LinkedList('e')
const f = new LinkedList('f')
const g = new LinkedList('g')
const h = new LinkedList('h')

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
f.next = g
g.next = h

const a1 = new LinkedList('a1')
const b1 = new LinkedList('b1')
const c1 = new LinkedList('c1')

a1.next = c1
c1.next = d

console.log(intersection(a, a1))


/*
Time complexity: O(n+m)
Space complexity: O() ---- TBD

*/
