// REACTO - Data Structures - Graph Traversal
// Write a function that determines if a path exists between two vertices of a directed graph.

// The graph will be represented as an object, each of whose keys represents a vertex of the graph and whose value represents
// all vertices that can be reached from the aforementioned key.

// In the example below, there is a connection from vertex a to vertex b and a connection from vertex b to vertices c and d but
// not a connection from vertex b to vertex a.

// graph representation using an adjacency list
// {
//   a: ['b'],
//   b: ['c', 'd'],
//   c: ['d']
// }

const doesPathExistDfs = (graph, start, target, visited = {}) => {
  //recursive solution using Array.prototype.some method, looks does a dfs to check deepest children before moving on

  //if the starting value is not defined in the graph, return false
  if (!graph[start]) {
    return false;
  }
  //tag that the starting point has been visited
  visited[start] = true;

  //the some method will return true if any element in the array returns true for the given callback, otherwise returns false
  //effectively, will have to visit every node to be sure that no edges can connect the start node to the target node
  return graph[start].some(vertex => {
    //if you encounter a vertex that is equal to the target, return true
    if (vertex === target) {
      return true;
    }
    //if you have not visited that vertex yet, recurse on that vertex
    if (!visited[vertex]) {
      return doesPathExistDfs(graph, vertex, target, visited);
    }
    //else, you have visited the vertex, but don't have anywhere else to check, so return false
    else {
      return false;
    }
  });
}

//a breadth-first search approach using a queue, checking all children before checking childrens' children
const doesPathExistBfs = (graph, start, target) => {
  //have hash map to keep track of visited nodes
  const visited = {};

  //initialize queue with the starting value
  const queue = [start];

  //moving a pointer to move in the queue, instead of shifting off first element
  let pointer = 0;

  //while the pointer's value is less than the length of the queue, iterate over nodes
  while (pointer < queue.length) {
    let node = queue[pointer];

    //log current node in visisted hash map
    visited[node] = true;

    //an array of adjacent directed nodes
    let neighbors = graph[node];

    //iterate over all adjacent nodes
    for (let i = 0; i < neighbors.length; i++) {
      const vertex = neighbors[i];

      //if the current adjacent node is the target, return true
      if (vertex === target) {
        return true;
      }

      //if target isn't found, make sure that the vertex wasn't already visisted before pushing it into the queue
      //to eventually check
      if (!visited[vertex]) {
        queue.push(vertex);
      } 
    }
    //increment the pointer to move to next vertex
    pointer++;
  }
    
  //return false if all possible nodes have been searched
  return false;
}

const graphEx = {
  "A": ["A", "B"],
  "B": ["C"],
  "C": ["A", "Q"],
  "D": ["A"]
};

console.log(doesPathExistBfs(graphEx, "A", "Q"));