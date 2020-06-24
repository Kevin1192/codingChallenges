// 617. Merge Two Binary Trees

// Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

// You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

// Recursion
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var mergeTrees = function (t1, t2) {
  if (t1 === null && t2 === null) return null;

  if (t2 === null) return t1;
  if (t1 === null) return t2;

  return new TreeNode(
    t1.val + t2.val,
    mergeTrees(t1.left, t2.left),
    mergeTrees(t1.right, t2.right)
  );
};