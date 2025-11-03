function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

let q = [root];
let ans = [];
while (q.length) {
  levelArr = [];
  levelSize = q.length;
  for (let i = 0; i <= levelSize; i++) {
    curr = q.shift();
    curr.left && q.push(curr.left);
    curr.right && q.push(curr.right);
    levelArr.push(curr.val);
  }
  ans.push(levelArr);
}
console.log(ans);
