// 2.2 Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
// We don't know the length of the linkedlist


// Recursive method
// O(N) time complexity O(N) space complexity(Because of the recursive calls)
function kthToLastRecursive(head, k) {
    if (!head) return 0;

    let idx = kthToLastRecursive(head.next, k) + 1;
    if (idx === k) console.log(`Recursive print - ${k}th to Last value found: ${head.val}`)
    return idx;
}

// Iterative method
// create two poiners with distance k. When one pointer reaches end, another pointer is kth to last elem.
function kthToLastIterative(head, k){
    let pointer1 = head;
    let pointer2 = head;
    let count = 0;
    while (count < k - 1){
        pointer2 = pointer2.next;
        if (!pointer2) return null; // Out of bound;
        count++;
    }

    while (pointer2.next){
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }
    return pointer1.val;
}




// Test //
const SinglyLinkedList = require('../util/LinkedList')

let list = new SinglyLinkedList();

list.push(100)
list.push(100)
list.push(100)
list.push(100)
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

console.log('List: ', list.print())
console.log('kth to Last Recursive',kthToLastRecursive(list.head, 1))
console.log('kth to Last Iterative',kthToLastIterative(list.head, 1))