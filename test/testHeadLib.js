const assert = require('assert');
const { head, getLines } = require('../src/head.js');

describe('head', () => {
  it('Should give the 1 line back', () => {
    assert.strictEqual(head('hello'), 'hello');
  });

  it('Should give the 2 lines back', () => {
    assert.strictEqual(head('hello\nbye'), 'hello\nbye');
  });

  it('Should give the lines back when less than 10', () => {
    assert.strictEqual(head('hello\nbye\nworld\na'),
      'hello\nbye\nworld\na'
    );
  });

  it('Should lines upto 10 only when lines are >10', () => {
    assert.strictEqual(head('h\ne\nl\nl\no\nw\no\nr\nl\nd\nbye'),
      'h\ne\nl\nl\no\nw\no\nr\nl\nd'
    );
  });
});

describe('getLines', () => {
  it('Should give the line back', () => {
    assert.deepStrictEqual(getLines(['hello']), ['hello']);
  });

  it('Should give the 2 lines back', () => {
    assert.deepStrictEqual(getLines(['hello', 'bye']), ['hello', 'bye']);
  });

  it('Should only give 10 lines back', () => {
    assert.deepStrictEqual(
      getLines(['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd', 'bye']),
      ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']);
  });
});

