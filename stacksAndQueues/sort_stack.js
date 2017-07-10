function sortStack( startStack ){
  let sorted = false, tempStack = [], check = true, top;
  while(!sorted){
    sorted = true;
    if(check){
      top = startStack.pop()
      while(startStack.length !== 0) {// stack is empty
        if(top > startStack[startStack.length-1]){
          tempStack.push(top);
          top = startStack.pop()
        }
        else{
          tempStack.push(startStack.pop())
          sorted = false
        }
      }
    }
    else{
      top = tempStack.pop()
      while(tempStack.length !==0){
        if(top < tempStack[tempStack.length-1]){
          startStack.push(top);
          top = tempStack.pop()
        }
        else{
          startStack.push(tempStack.pop())
          sorted = false
        }
      }
    }
    check = !check;
  }
  return [startStack, tempStack]
}


let arr = [1,4,5,2,3]
console.log(sortStack(arr))

