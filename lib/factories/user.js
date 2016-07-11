'use strict';

const R = require('ramda');
const u = require('../utils/');

let conf = {
  api: process.env.GOFORA_OW_API || ''
};

module.exports.getAPIkey = function () {
  return conf.api;
};

module.exports.setAPIkey = function(str) {
  let err = u.testArg(String, str);
  if (!err) {
    process.env.GOFORA_OW_API = str;
    conf.api = str;
  }
};