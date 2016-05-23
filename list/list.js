'use strict';

const assert = require('assert');

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

let names = new List();
names.append('elliot');

assert.equal(names.toString()[0], 'elliot');
assert.deepEqual(names.toString(), ['elliot']);

names.append('chi');

assert.deepEqual(names.toString(), ['elliot', 'chi']);

assert.equal(names.remove('chi'), true);


assert.deepEqual(names.toString(), ['elliot']);

assert.equal(names.find('elliot'), 0);

console.log(names.toString());