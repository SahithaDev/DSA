class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
function LCA(root, p, q) {
  if (root === null || root === p || root === q) {
    return root;
  }
  let left = LCA(root.left, p, q);
  let right = LCA(root.right, p, q);
  if (left === null) {
    return right;
  } else if (right === null) {
    return left;
  } else {
    return root;
  }
}
console.log(LCA(root, root.left.left, root.left.right).val);
