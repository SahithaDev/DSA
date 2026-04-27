class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}
const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.right.right = new Node(50);
