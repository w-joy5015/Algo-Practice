const {expect} = require('chai')
const { Node, BinaryTree } = require('./ImplementBT')

describe("Binary Tree Node", () => {
  let root

  beforeEach(() => {
    root = new Node(100)
  })

  it("has a value", () => {
    expect(root.value).to.equal(100)
  })

  it("has an initialized left and right value of null", () => {
    expect(root.left).to.equal(null)
    expect(root.right).to.equal(null)
  })

  it("can have nodes assigned onto its left and right values", () => {
    root.left = new Node(10)
    root.right = new Node(1000)
    expect(root.left.value).to.equal(10)
    expect(root.right.value).to.equal(1000)
  })
})


describe("Binary Tree", () => {
  let binaryTree

  beforeEach(() => {
    binaryTree = new BinaryTree()
  })

  it("has a root with a value", ()=> {
    expect(binaryTree.root).to.equal(null)
    binaryTree.add(456)
    expect(binaryTree.root.value).to.equal(456)
  })

  it("can add new values as nodes according to binary tree rules", () => {
    binaryTree.add(456)
    binaryTree.add(123)
    binaryTree.add(789)
    binaryTree.add(1000)
    expect(binaryTree.root.left.value).to.equal(123)
    expect(binaryTree.root.right.value).to.equal(789)
    expect(binaryTree.root.right.right.value).to.equal(1000)
  })
})
