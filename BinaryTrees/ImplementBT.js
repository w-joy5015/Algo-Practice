/*
About:
  Binary Search Trees are a non-linear data structure consisting of nodes. Each node holds three elements: its own value, its left node, and its right node (if they exist). A node's left value should be less than its current value, while a node's right value should be greater than its current value. Binary trees start at a root node, however each node can  be thought of as the root of their own binary tree.

Advantages:
  - Quick search and insertion

Disadvantages:
  - Deletion algorithm can be complex

Terminology:
  - Leaf/external node = node without any children nodes
  - Depth of a node = number of edges from root to the node
  - Height of a node = number of edges from the node to the deepest leaf
  - Height of a tree = number of edges from the root to its deepest leaf
  - Full binary tree = a type of BT where each node has exactly zero or two child nodes;
  - Complete binary tree = a type of BT that is completely filled except for the bottom level, which fills from left to right
  - Balanced binary tree = a type of BT where the left and right subtree differ in height by no more than 1 edge

Challenge:
  Implement and test a simple binary tree
*/

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree{
  constructor(){
    this.root = null
  }

  add(val){
    if (!this.root){
      this.root = new Node(val)
      return this
    }

    if (this.root.value===val){
      return undefined
    }

    let current = this.root
    while(current){
      if (current.value<val && !current.right){
        current.right = new Node(val)
        return this
      } else if (current.value<val && current.right){
        current = current.right
      }

      if (current.value>val && !current.left){
        current.left = new Node(val)
        return this
      } else if (current.value>val && current.right){
        current = current.right
      }
    }
  }

}

module.exports = { Node, BinaryTree }
