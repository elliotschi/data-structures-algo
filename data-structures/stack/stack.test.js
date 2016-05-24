'use strict';

const Stack = require('./stack');
const {
  expect
} = require('chai');

describe('Stack', () => {
  let stack;
  
  beforeEach(() => {
    stack = new Stack();
  });
  
  it('should have a storage and size properties', () => {
    expect(stack).to.have.property('storage');
    expect(stack).to.have.property('size');
  });
  
  it('should have push, pop, and length methods', () => {
    expect(stack.push).to.be.a('function');
    expect(stack.pop).to.be.a('function');
    expect(stack.length).to.be.a('function');
  });
  
  it('should have a size of zero for a new stack', () => {
    expect(stack.length()).to.equal(0);
  });
  
  it('should add an element to the stack when push is called', () => {
    stack.push(1);
    expect(stack.length()).to.equal(1);
    stack.push(2);
    expect(stack.length()).to.equal(2);
  });
  
  it('should remove elements from the stack when pop is called', () => {
    stack.push(1);
    stack.push(2);
    stack.pop();
    expect(stack.length()).to.equal(1);
    stack.push(3);
    expect(stack.length()).to.equal(2);
    stack.pop();
    stack.pop();
    expect(stack.length()).to.equal(0);
  });
  
  it('should remove the most recent item', () => {
    stack.push(1);
    stack.push(2);
    stack.pop();
    expect(stack.pop()).to.equal(1);
  });
  
  it('should return the item that was removed', () => {
    stack.push(1);
    expect(stack.pop()).to.equal(1);
  });
})