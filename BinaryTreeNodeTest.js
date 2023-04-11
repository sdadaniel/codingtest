const { BinaryTree, BinaryTreeNode } = require("./BinaryTreeNode");

const bn1 = new BinaryTree();
bn1._root = new BinaryTreeNode(42);
bn1._root.left = new BinaryTreeNode(41);
bn1._root.left.left = new BinaryTreeNode(10);
bn1._root.left.right = new BinaryTreeNode(40);

bn1._root.right = new BinaryTreeNode(50);
bn1._root.right.left = new BinaryTreeNode(45);
bn1._root.right.left = new BinaryTreeNode(75);

module.exports = {
  bn1,
};
