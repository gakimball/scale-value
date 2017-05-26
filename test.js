/* eslint-env mocha */

'use strict';

const expect = require('chai').expect;
const scaleValue = require('.');

describe('scaleValue()', () => {
  let scale;

  before(() => {
    scale = scaleValue(50, 100, 100, 200);
  });

  it('returns a function', () => {
    expect(scale).to.be.a('function');
  });

  it('returns a proportional value', () => {
    expect(scale(50)).to.equal(100);
    expect(scale(75)).to.equal(150);
    expect(scale(100)).to.equal(200);
    expect(scale(200)).to.equal(400);
  });

  it('allows the input to be clamped', () => {
    expect(scale(0, true)).to.equal(100);
    expect(scale(200, true)).to.equal(200);
  });
});
