const assert = require('assert');
const { parser } = require('../../src/tail/utilityParser');

describe.only('parseArgs', () => {
  it('Should give the object with option as -n', () => {
    assert.deepStrictEqual(
      parser(['-n', '10', 'hello']),
      {
        files: ['hello'],
        options: {
          operations: 'linesFrom',
          count: -10
        }
      }
    );
  });
});

