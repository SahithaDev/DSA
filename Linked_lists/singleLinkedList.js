function node(val) {
  let newNode = new Node(5);
  this.val = val;
  this.next = null;
}
function myLinkedList() {
  this.head = null;
  this.size = 0;
}
function addAtHead(val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
}
function addToTail(val) {
  let newNode = new Node(val);
  if (this.head == null) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
}
function addAtIndex(index, val) {
  if (index == 0) {
    addAtHead(val);
  } else {
    let newNode = new Node(val);
    for (let i = this.head; i < index - 1; i++) {
      newNode.next = curr.next;
      curr.next = newNode;
    }
  }
  this.size++;
}
console.log(myLinkedList([1, 2, 3]));
