class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }
  
  push(element) { 
    this.storage[this.size++] = element;
  }
  
  pop(element) {
    if (this.length() === 0) {
      return null;
    }
    
    let topElement = this.storage[--this.size];
    delete this.storage[this.size];
    
    return topElement;
  }
  
  length() {
    return this.size;
  }
}

module.exports = Stack;