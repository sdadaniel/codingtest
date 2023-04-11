const { SinglyLinkedList, SinglyLinkedListNode } = require("./linkedNode");

var sll1 = new SinglyLinkedList();
sll1.insert(1);
sll1.insert(12);
sll1.insert(20);
sll1.remove(12);

console.log(sll1.head.data);
console.log(sll1.head.next.data);
