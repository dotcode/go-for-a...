'use strict';

var R = require('ramda');

function testArg() {
  if (!R.is().bind(null, arguments)) {
    return new Error('objectUtils#testArg => Wrong argument type supplied');
  }
}

module.exports = {
  testArg: testArg
};