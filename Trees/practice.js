class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

let ans = [];
let q = [root];
while (q.length) {
  for (let i = 0; i < q.length; i++) {
    curr = q.shift();
    curr.left && q.push(curr.left);
    curr.right && q.push(curr.right);
    ans.push(curr.val);
  }
}
console.log(ans);
