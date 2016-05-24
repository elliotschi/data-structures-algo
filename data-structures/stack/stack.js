class Stack {
  constructor() {
    this.data = {};
    this.curr = 0;
    this.tail = 0;
  }
  
  showData() {
    return this.data;
  }
  
  push(element) {
    this.data[this.curr++] = element;
  }
  
  pop(element) {
    let topElement = this.data[--this.curr];
    delete this.data[--this.curr];
    
    return topElement;
  }
  
  length() {
    return this.curr;
  }
}

module.exports = Stack;