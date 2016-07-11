'use strict';

const expect = require('expect.js');
const userFactory = require('../lib/factories/user');

describe('Package User', () => {
  let user;

  beforeEach(function() {
    user = userFactory();
  });

  afterEach(function() {
    user = undefined;
  });

  it('Should exist', () => {
    expect(user).to.be.a('object');
  });

  it('Should have an API key', () => {
    expect(user).to.have.key('key');
  });

  // it('Should have a location', () => {
  //   expect(user).to.have.key('location');
  // });

  // it('Should have an activity', () => {
  //   expect(user).to.have.key('activity');
  // });
});

