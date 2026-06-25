class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function isMirror(t1, t2) {
  if (!t1 && !t2) return true;

  if (!t1 || !t2) console.log("Not symmetric");

  return (
    t1.val &&
    t2.val &&
    isMirror(t1.left, t1.right) &&
    isMirror(t1.right, t1.left)
  );
}

function isSymmetric(root) {
  if (!root) return true;

  return isMirror(root.left, root.right);
}
