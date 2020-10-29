/*
About:
  Linked lists are a data structure similar to an array, except in how its elements (nodes) are stored in memory. Each linked list has a head, which is the beginning, and a tail, which is the end and points to null. Each node contains two items - its own value and a pointer to the next node in sequence.

Advantages of LL:
  - The advantage of LL over arrays is that nodes can easily by added and removed without reorganizing the entire data structure.

Disadvantages of LL:
  - Compared to arrays, searching through a linked list is slower. While elements of an array may be accessed by their index, nodes by contrast can only be accessed starting from the head node.

Types of LL:
  - Singlely LL: each node contains one pointer that only points to the next node; you cannot visit a previous node
  - Doublely LL: each node contains two pointers - one for the next node and one for its previous node; at any node you can visit the next node and its previous one if it exists
  - Circular LL: this type of LL has no "end," because one of its nodes points to a previously visited node

Challenge:
  Implement and test a singlely linked list
*/

//this is the implementation of a Node class
class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

//this is the implementation of a Linked List
class LinkedList {
  constructor(head = null){
    this.head = head
  }
}

module.exports = { Node, LinkedList }
