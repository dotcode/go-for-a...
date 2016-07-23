'use strict';

const expect = require('expect.js');
const user = require('../lib/factories/user');

describe('Package User', () => {
  it('Should exist', () => {
    let u = user('abc'); 
    expect(u).to.be.a('object');
  });

  it('Should have a way to get its API key', () => {
    let u = user('abc');
    expect(u).to.have.key('getAPIkey');
  });

  it('Should have an API key', () => {
    let u = user('abc');
    expect(u.getAPIkey()).to.be('abc');
  });

  it('Should be able to set an API key', () => {
    let u = user('abc');
    u.setAPIkey('def');
    expect(u.getAPIkey()).to.be('def');
  });
});

