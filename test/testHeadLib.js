const assert = require('assert');
const { head } = require('../src/head.js');

describe('head', () => {
  it('Should give the 1 line back', () => {
    assert.strictEqual(head('hello'), 'hello');
  });
});
