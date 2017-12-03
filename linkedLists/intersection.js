module.exports = function intersection(list1, list2){
  let ll1 = list1.head,
    ll1count = 0,
    ll2 = list2.head,
    ll2count = 0,
    tail1,
    tail2,
    pointer1 = ll1,
    pointer2 = ll2;

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

  let longer = ll1count > ll2count ? list1.head : list2.head
    , shorter = ll1count > ll2count ? list2.head : list1.head
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

/*
Time complexity: O(n+m)
Space complexity: O() ---- TBD

*/
