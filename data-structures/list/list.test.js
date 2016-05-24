'use strict';

const assert = require('assert');
const List = require('./list');

// assertion tests
let names = new List();
names.append('elliot');

assert.equal(names.toString()[0], 'elliot');
assert.deepEqual(names.toString(), ['elliot']);

names.append('chi');

assert.deepEqual(names.toString(), ['elliot', 'chi']);

assert.equal(names.remove('chi'), true);


assert.deepEqual(names.toString(), ['elliot']);

assert.equal(names.find('elliot'), 0);

// console.log(names.toString());
console.log('all list tests passed');