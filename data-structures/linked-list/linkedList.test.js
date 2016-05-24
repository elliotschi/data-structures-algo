'use strict';

const LinkedList = require('./linkedList');
const {
  expect
} = require('chai');

describe('LinkedList', () => {
  let linkedList;
  
  beforeEach(() => {
    linkedList = new LinkedList();
  });
  
  it('should have a head and tail', () => {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });
  
  it('should have methods addToTail, removeHead, contains', () => {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });
  
  it('should update tail when a new value is added', () => {
    linkedList.addToTail(1);
    expect(linkedList.tail.value).to.equal(1);
    
    linkedList.addToTail(2);
    expect(linkedList.tail.value).to.equal(2);
  });
  
  it('should remove head when calling removeHead', () => {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    expect(linkedList.head.value).to.equal(1);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(2);
  });
  
  it('should return previous head when removeHead is called', () => {
    linkedList.addToTail(1);
    let prevHead = linkedList.removeHead();
    expect(prevHead).to.equal(1);
  });
  
  it('should return true for values it contains and false for values it does not contain', () => {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    expect(linkedList.contains(1)).to.equal(true);
    expect(linkedList.contains(2)).to.equal(true);
    expect(linkedList.contains(3)).to.equal(false);
  });
  
  it('should return false when running contains on a value that was removed', () => {
    linkedList.addToTail(1);
    linkedList.removeHead();
    expect(linkedList.contains(1)).to.equal(false);
  });
})