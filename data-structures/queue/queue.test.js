'use strict';

const Queue = require('./queue');
const {
  expect
} = require('chai');

describe('Queue', () => {
  let queue;
  
  beforeEach(() => {
    queue = new Queue();
  });
  
  it('should have storage, head and tail as properties', () => {
    expect(queue).to.have.property('storage');
    expect(queue).to.have.property('head');
    expect(queue).to.have.property('tail');
  });
  
  it('should have dequeue, enqueue, and length, methods', () => {
    expect(queue.dequeue).to.be.a('function');
    expect(queue.enqueue).to.be.a('function');
    expect(queue.length).to.be.a('function');
  });
  
  it('should have a length of zero before anything is added', () => {
    expect(queue.length()).to.equal(0);
  })
  
  it('should add elements when enqueue is called', () => {
    queue.enqueue(1);
    expect(queue.length()).to.equal(1);
    queue.enqueue(2);
    expect(queue.length()).to.equal(2);
  });
  
  it('should delete elements and return deleted value when dequeued', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).to.equal(1);
    expect(queue.length()).to.equal(1);
  });
  
  it('should delete the first entered element', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).to.equal(1);
  });
  
  it('should remove oldest item after new items have been added and removed', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.enqueue(3);
    expect(queue.dequeue()).to.equal(2);
  })
});