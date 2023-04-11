const { Heap } = require("./heap");

function MinHeap() {
  this.items = [];
}
MinHeap.prototype = Object.create(Heap.prototype); // inherit helpers from heap by copying prototype
MinHeap.prototype.add = function (item) {
  this.items[this.items.length] = item;
  this.bubbleUp();
};

MinHeap.prototype.poll = function () {
  var item = this.items[0];
  this.items[0] = this.items[this.items.length - 1];
  this.items.pop();
  this.bubbleDown();
  return item;
};

MinHeap.prototype.bubbleDown = function () {
  var index = 0;
  while (
    this.leftChild(index) &&
    (this.leftChild(index) < this.items[index] ||
      this.rightChild(index) < this.items[index])
  ) {
    var smallerIndex = this.leftChildIndex(index);
    if (
      this.rightChild(index) &&
      this.rightChild(index) < this.items[smallerIndex]
    ) {
      smallerIndex = this.rightChildrenIndex(index);
    }
    this.swap(smallerIndex, index);
    index = smallerIndex;
  }
};

MinHeap.prototype.bubbleUp = function () {
  var index = this.items.length - 1;
  while (this.parent(index) && this.parent(index) > this.items[index]) {
    this.swap(this.parentIndex(index), index);
    index = this.parentIndex(index);
  }
};

var mh1 = new MinHeap();
mh1.add(1);
mh1.add(10);
mh1.add(5);
mh1.add(100);
mh1.add(8);

console.log(mh1.poll()); // 1
console.log(mh1);
// console.log(mh1.poll()); // 5
// console.log(mh1.poll()); // 8
// console.log(mh1.poll()); // 10
// console.log(mh1.poll()); // 100

// console.log(mh1);
