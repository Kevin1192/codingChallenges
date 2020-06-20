/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// Recursive
var invertTree = function (root) {
  // function invert binary tree
  // input: root
  // output: root (with binary tree inverted)

  // go to every node recursive method
  // if node is null, return null;
  // swap children of that node;
  if (root === null) return null;
  [root.left, root.right] = [root.right, root.left];
  root.left = invertTree(root.left);
  root.right = invertTree(root.right);
  return root;
};


// iterative
// Implement Queue using LinkedList;
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return;
  }
  dequeue() {
    if (!this.first) return null;
    let temp = this.first.value;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    return temp;
  }
}

var invertTree = function (root) {

  // push the root node onto the queue,
  // for each node in the queue, we dequeue the node,
  // then push the children onto the queue,
  // swap the values of children
  if (root === null) return null;
  let queue = new Queue();

  queue.enqueue(root);

  while (queue.first) {
    let current = queue.dequeue();
    if (current.left) queue.enqueue(current.left);
    if (current.right) queue.enqueue(current.right);
    [current.left, current.right] = [current.right, current.left];
  }
  return root;
};
