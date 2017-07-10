class Graph {
  constructor(){
    this.nodeArr = {}
  }

  insert(val, edge){
    this.nodeArr[val] = [...edge]
  }
}

let newGraph = new Graph()
newGraph.insert('a', ['b'])
newGraph.insert('b', ['c'])
newGraph.insert('c', ['d'])


/*
{
  a: ['b'],
  b: ['c', 'd'],
  c: [],
  d: ['c', 'a']
 }
*/

function breadthFirst(graph, start, target){
  let visited = [], queue = [start];

  while(queue.length > 0){
    let curr = queue.shift()
    if(curr === target) return true
    if(graph.nodeArr[curr] && visited.indexOf(curr) === -1){
      queue.push(...graph.nodeArr[curr])
      visited.push(curr)
    }
  }
  return false;
}
console.log(breadthFirst(newGraph, 'a', 'd')) // true
console.log(breadthFirst(newGraph, 'a', 'z')) // false


function depthFirst(graph, curr, target, visited){

  if(curr === target) return true
  if(!graph.nodeArr[curr]) return false
  visited.push(curr)

  for(let i = 0; i < graph.nodeArr[curr].length; i++){
    return depthFirst(graph, graph.nodeArr[curr][i], target, visited)
  }
}

let visited = []
console.log(depthFirst(newGraph, 'a', 'd', visited)) // true
console.log(depthFirst(newGraph, 'a', 'z', visited)) // false
