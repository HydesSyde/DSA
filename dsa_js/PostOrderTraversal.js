//class for building tree
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//recursive function
function traversal(root) {
  if (!root) {
    return 0;
  }

  if (!root.left && !root.right) {
    return parseInt(root.val);
  }

  let leftVal = traversal(root.left);
  let rightVal = traversal(root.right);

  switch (root.val) {
    case "+":
      return leftVal + rightVal;
    case "-":
      return leftVal - rightVal;
    case "*":
      return leftVal * rightVal;
    case "/":
      return Math.floor(leftVal / rightVal);
    default:
      throw new Error("Unknow Operator" + root.val);
  }
}

//building tree
let root = new Node("+");
root.left = new Node("3");
root.right = new Node("*");
root.right.left = new Node("2");
root.right.right = new Node("5");
