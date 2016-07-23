'use strict';

const expect = require('expect.js');
const a = require('../lib/utils/actions');

describe('getter(state, prop, name)', () => {
  it('- should return an object', () => {
    expect(a.getter('a', 'b')).to.be.a(Object);
  });

  it('- should return an object with only one property', () => {
    expect(a.getter('a', 'b')).to.only.have.keys('b');
  });

  it('- should return an object with [name]',() => {
    expect(a.getter('a', 'b')).to.have.key('b');
  });

  it('- should return an object with [name] being a method', () => {
    expect(a.getter('a', 'newMethod').newMethod).to.be.a(Function);
  });

  it('- should return an object whose method [name] looks for [prop] in [state]', () => {
    let state = {a: 1};
    let o = Object.assign(
          {}, 
          a.getter('a', 'getA', state)
        );
    expect(o.getA()).to.be(1);
  });
});
