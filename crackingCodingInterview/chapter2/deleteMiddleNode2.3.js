// Delete Middle Node: Implement an algorithm to delete a node in the middle 
// (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, 
// given only access to that node.


// We set the value of the next node to the current node value, then delete the next node.
// O(1) time complexity
function deleteMiddleNode(nodeToDelete){
    if (nodeToDelete === null || nodeToDelete.next === null){
        throw new Error(
          "The node to delete must not be null or the last node"
        );
    }

    nodeToDelete.val = nodeToDelete.next.val;
    nodeToDelete.next = nodeToDelete.next.next;
    return true;
}



// Test //
const SinglyLinkedList = require('../util/LinkedList')

let list = new SinglyLinkedList();

list.push(100)
list.push('node to delete')
list.push(100)
list.push(200)
list.push(200)
list.push(300)
list.push(100)
list.push(101)
list.push(100)
list.push(310)
list.push(3110)
list.push(500)


console.log("List: ", list.print());
deleteMiddleNode(list.head.next);
console.log('deleted node', list.print());