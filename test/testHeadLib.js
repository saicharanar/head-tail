const assert = require('assert');
const { head } = require('../src/head.js');

describe('head', () => {
  it('Should give the 1 line back', () => {
    assert.strictEqual(head('hello'), 'hello');
  });

  it('Should give the 2 lines back', () => {
    assert.strictEqual(head('hello\nbye'), 'hello\nbye');
  });
});
