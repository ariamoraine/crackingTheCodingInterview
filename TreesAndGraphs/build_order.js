/*

You are given a list of projects and a list of dependencies (which is a list of pairs in projects, where the first project is dependent  on the second project). All of a project's depenedencies must be built before the project is. Find a build order that will allow the projects to be built. If there is no valid build order, return an error.

Example:
  Input: projects: a, b, c, d, e, f
         dependencies: (d,a), (b,f), (d,b), (a,f), (c,d)
  Output: f, e, a, b, d, c

*/

function makeAdjList(p, d) {
  let myAdjList = p.reduce((dict, char) => {
    dict[char] = []
    return dict
  }, {})
  d.forEach(subArr => {
    myAdjList[subArr[0]] = myAdjList[subArr[0]].concat(subArr.slice(1))
  })
  return myAdjList
}


function buildOrder(projects, dependencies){

  const myList = makeAdjList(projects, dependencies)

  const visited = {}
  const order = []
  const queue = []

  for(let key in myList){
    if(!myList[key].length) {
      visited[key] = 1
      order.push(key)
    }
    else queue.push(key)
  }

  while(queue.length){
    let curr = queue.shift()
    if(visited[curr]) visited[curr] += 1
    else visited[curr] = 1

    if(visited[curr] > projects.length) throw new Error("ERROR")

    let x = myAdjList[curr].every(edge => {
      return order.indexOf(edge) > -1
    })

    if(x) order.push(curr)
    else queue.push(curr)
  }

  return order
}

console.log(buildOrder(['a', 'b', 'c', 'd', 'e', 'f'], [['d','a'], ['b', 'f'], ['d', 'b'], ['a', 'f'], ['c', 'd']]))
