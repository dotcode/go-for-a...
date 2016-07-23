'use strict';

/**
 * Actions which can be assigned/grouped into objects
 */

const R = require('ramda');

module.exports = {
  getter: getter,
  setter: setter
};

function getter(prop, name, state) {
  let o = {};
  o[name] = function() {
    return R.view(R.lensProp(prop), state); 
  };
  return o;
}

function setter(prop, name, state) {
  let o = {};
  o[name] = function(str) {
    return state[prop] = str; 
  };
  return o;
}