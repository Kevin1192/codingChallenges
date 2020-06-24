// Given a singly linked list, determine if it is a palindrome.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  let head1 = new Node(head.val);
  let current = head;
  let current1 = head1;
  while (current.next) {
    let newNode = new Node(current.next.val);
    current1.next = newNode;
    current1 = current1.next;
    current = current.next;
  }
  //         1 -> 2 -> 3 -> null
  //  <- prev curr
  function revertLinkedList(head) {
    let curr = head;
    let prev = null;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }

  let revertedHead = revertLinkedList(head1);
  while (head){
      if (revertedHead.val !== head.val) return false;
      head = head.next;
      revertedHead = revertedHead.next;
  }
  return true;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let head = new Node(3);

head.next = new Node(2);
head.next.next = new Node(1);

console.log(head);

console.log(isPalindrome(head));
