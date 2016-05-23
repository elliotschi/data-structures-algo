'use strict';

function List() {
  this.listSize = 0;
  this.pos = 0;
  this.data = [];
}

List.prototype.append = function(element) {
  this.data[this.listSize++] = element;
}

List.prototype.find = function(element) {
  for (let i = 0; i < this.data.length; i++) {
    let curr = this.data[i];
    if (curr === element) {
      return i;
    }
  }
  return -1;
}

List.prototype.remove = function(element) {
  let index = this.find(element);
  
  if (index > -1) {
    this.data.splice(index, 1);
    --this.listSize;
    return true;
  }
  return false;
}

List.prototype.toString = function() {
  return this.data;
}

module.exports = List;

