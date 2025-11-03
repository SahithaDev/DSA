// Step 1: Define the TreeNode constructor
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// Step 2: Create the tree
const root = new TreeNode(1); // Root node with value 1
root.right = new TreeNode(2); // Right child of 1 is 2
root.right.right = new TreeNode(3); // Right child of 2 is 3

// Step 3: Postorder traversal to check the output
let ans = [];
function traversal(curr) {
  if (!curr) return;
  traversal(curr.left);

  traversal(curr.right);
  ans.push(curr.val);
}
traversal(root);
console.log(ans);
