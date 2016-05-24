'use strict';

const Node = value => {
  return {
    value,
    next: null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null; 
  }
  
  addToTail(value) {
    let newTail = Node(value);
    
    if (!this.head) {
      this.head = newTail;
    }
    
    if (this.tail) {
      this.tail.next = newTail;
    }
    
    this.tail = newTail;
  }
  
  removeHead() {
    if (!this.head) {
      return null;
    }
    
    let currentHead = this.head;
    this.head = this.head.next;
    
    return currentHead.value;
  }
  
  contains(target) {
    let start = this.head;
    
    while(start) {
      if (start.value === target) {
        return true;
      } else {
        start = start.next;
      }
    }
    return false;
  }
}

module.exports = LinkedList;