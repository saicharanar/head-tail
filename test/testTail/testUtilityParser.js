const assert = require('assert');
const { parser } = require('../../src/tail/utilityParser');

describe('parseArgs', () => {
  it('Should give the object with option as -n', () => {
    assert.deepStrictEqual(
      parser(['-n', '10', 'hello']),
      {
        files: ['hello'],
        options: {
          operation: 'linesFrom',
          count: -10,
          isReverse: false
        }
      }
    );
  });

  it('Should give the object with option as -c', () => {
    assert.deepStrictEqual(
      parser(['-c', '10', 'hello']),
      {
        files: ['hello'],
        options: {
          operation: 'charactersFrom',
          count: -10,
          isReverse: false
        }
      }
    );
  });

  it('Should give the object with option as -n and reverse as true', () => {
    assert.deepStrictEqual(
      parser(['-n', '10', '-r', 'hello']),
      {
        files: ['hello'],
        options: {
          operation: 'linesFrom',
          count: -10,
          isReverse: true
        }
      }
    );
  });

  it('Should give the object with option as -c and reverse as true', () => {
    assert.deepStrictEqual(
      parser(['-c10', '-r', 'hello']),
      {
        files: ['hello'],
        options: {
          operation: 'charactersFrom',
          count: -10,
          isReverse: true
        }
      }
    );
  });

  it('Should give -n and reverse true irrespective to order', () => {
    assert.deepStrictEqual(
      parser(['-r', '-n10', 'hello']),
      {
        files: ['hello'],
        options: {
          operation: 'linesFrom',
          count: -10,
          isReverse: true
        }
      }
    );
  });
});

