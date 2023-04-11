function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  this._root = null;
}

BinaryTree.prototype.traversePreOrder = function () {
  traversePreOrderHelper(this._root);
  function traversePreOrderHelper(node) {
    if (!node) return;

    traversePreOrderHelper(node.left);
    traversePreOrderHelper(node.right);
    console.log(node.value);
  }
};

module.exports = {
  BinaryTreeNode,
  BinaryTree,
};
