// You are given a Node class that has a name and an array of optional children Nodes. When put together, Nodes
// form a simple tree-like structure. Implement the depthFirstSearch method on the Node class, which takes in an empty
// array, traverses the tree using the Depth-first Search approach (specifically navigating the tree from left to right), stores
// all the of the Nodes' names in the input array, and returns it.

//e.g. for a tree composed of nodes A: [B, C, D], B: [E, F], C: [], D: [G, H], E: [], F: [I, J], G: [K], H: [], I: []
//J: [], K: [], the output array should be: ["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

	
  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);
		
		if (this.children.length) {
			for (let node of this.children) {
				array.push(...node.depthFirstSearch([]));
			}
		}
		
		return array;
  }
}