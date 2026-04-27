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

let q = [root];
let ans = [];

while (q.length) {
  let levelArr = [];
  let levelSize = q.length;
  // let count = 0;
  for (let i = 0; i < levelSize; i++) {
    if (!root) return [];
    curr = q.shift();
    curr.left && q.push(curr.left);
    curr.right && q.push(curr.right);
    levelArr.push(curr.val);
    // count = count + 1;
  }
  //count = count + 1;
  ans.push(levelArr);
}

console.log(ans.length);
