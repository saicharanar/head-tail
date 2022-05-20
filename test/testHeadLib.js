const assert = require('assert');
const { head, linesUpTo } = require('../src/headLib.js');

describe('head', () => {
  it('Should give the empty line back', () => {
    assert.strictEqual(head('', { linesCount: 10 }), '');
  });

  it('Should give the 1 line back', () => {
    assert.strictEqual(head('hello', { linesCount: 10 }), 'hello');
  });

  it('Should give the 2 lines back', () => {
    assert.strictEqual(head('hello\nbye', { linesCount: 10 }), 'hello\nbye');
  });

  it('Should give the lines back when less than 10', () => {
    assert.strictEqual(head('hello\nbye\nworld\na', { linesCount: 10 }),
      'hello\nbye\nworld\na'
    );
  });

  it('Should lines upto 10 only when lines are >10', () => {
    assert.strictEqual(head('h\ne\nl\nl\no\nw\no\nr\nl\nd\nbye', {
      linesCount: 10
    }), 'h\ne\nl\nl\no\nw\no\nr\nl\nd'
    );
  });

  describe('Increment', () => {
    it('Should give upto 2 lines', () => {
      assert.strictEqual(head('hello\nwow\nwhew', {
        linesCount: 2
      }), 'hello\nwow');
    });

    it('Should give upto 1 line when 1 line given and lineCount of 2  ', () => {
      assert.strictEqual(head('hello', {
        linesCount: 2
      }), 'hello');
    });
  });

});

describe('linesUpto', () => {
  it('Should give the line back', () => {
    assert.deepStrictEqual(linesUpTo('hello', 10), 'hello');
  });

  it('Should give the 2 lines back', () => {
    assert.deepStrictEqual(linesUpTo('hello\nbye', 10),
      'hello\nbye');
  });

  it('Should only give 10 lines back', () => {
    assert.deepStrictEqual(
      linesUpTo('h\ne\nl\nl\no\nw\no\nr\nl\nd\nbye', 10),
      'h\ne\nl\nl\no\nw\no\nr\nl\nd');
  });

  it('Should give upto 2 lines', () => {
    assert.deepStrictEqual(linesUpTo('hello\nwow\nwhew', 2),
      'hello\nwow');
  });
});
