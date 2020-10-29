const {expect} = require('chai')
const { Node, LinkedList } = require('./ImplementLL')

describe("Linked List Node", () => {
  let newNode1
  let newNode2
  beforeEach(()=>{
    newNode1 = new Node("abc")
    newNode2 = new Node("def")
    newNode1.next = newNode2
  })

  it("initializes with a value", () => {
    expect(newNode1.value).to.equal("abc")
    expect(newNode2.value).to.equal("def")
  })
  it("initializes a next value of null", () => {
    expect(newNode2.next).to.equal(null)
  })
  it("can point to another node", () => {
    expect(newNode1.next).to.equal(newNode2)
  })
})

describe("Linked list", () => {
  let list
  let newNode1
  let newNode2

  beforeEach(() => {
    newNode1 = new Node(123)
    newNode2 = new Node(456)
    newNode1.next = newNode2
    list = new LinkedList(newNode1)
  })

  it("has a head with a value", ()=> {
    expect(list.head.value).to.equal(123)
  })

  it("its nodes point to only one other node", () => {
    expect(list.head.next).to.equal(newNode2)
  })
})
