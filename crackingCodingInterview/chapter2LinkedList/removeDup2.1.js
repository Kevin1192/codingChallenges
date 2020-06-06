// 2.1 RemoveDups! Write code to remove duplicates from an unsorted linked list.

// with hashTable O(N) run time
function removeDups(list){
    let current = list.head;
    let prev = current;
    let obj = {}
    let value;
    while(current){
        value = current.val;
        if (!obj[value]) {
            obj[value] = 1;
            prev = current
            current = current.next
        } else {
            prev.next = prev.next.next;
            current = prev.next;
            list.length--;
        }
    }
    return list;
}

// No Buffer 
//O(N^2) time complexity. O(1) space complexity;
function removeDupsNoBuffer(list){
    let current = list.head;
    let runner, prev;
    while (current){
        runner = current.next;
        prev = runner;
        while (runner){
            if (current.val !== runner.val) {
                prev = runner;
            } else {
                prev.next = runner.next;
                list.length--;
            }
            runner = runner.next
        }
        current = current.next
    }
    return list
}


// Test //
const SinglyLinkedList = require('./util/LinkedList')

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

console.log('with HashTable',removeDups(list).print())
console.log('No buffer',removeDupsNoBuffer(list).print())