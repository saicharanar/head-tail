const assert = require('assert');
const { tailMain } = require('../../src/tail/tailLib');

describe.skip('tailMain', () => {
  it('Should give 10 lines from back', () => {
    assert.strictEqual(
      tailMain(['-n', '-10', 'hello']),
      'hello'
    );
  });
});
