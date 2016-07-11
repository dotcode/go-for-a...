'use strict';

const expect = require('expect.js');

describe('Package User', () => {
  const user = require('../lib/factories/user');

  it('Should exist', () => {
    expect(user).to.be.a('object');
  });

  it('Should have a default API key', () => {
    expect(user.getAPIkey()).to.be.a('string');
  });

  it('Should be able to set the API key', () => {
    let key = 'test';
    user.setAPIkey(key);
    expect(user.getAPIkey()).to.be(key);
  });
});

