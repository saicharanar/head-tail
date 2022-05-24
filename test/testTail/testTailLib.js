const assert = require('assert');
const {
  tail, linesUpTo, charactersUpTo
} = require('../../src/tail/tailLib.js');

describe('tail', () => {
  it('should give the given line back ', () => {
    assert.strictEqual(tail('hello', -10), 'hello');
  });

  it('should give two lines back ', () => {
    assert.strictEqual(tail('hello\nbye', -10), 'hello\nbye');
  });

  it('should give up to 10 lines back ', () => {
    assert.strictEqual(
      tail('h\ne\nl\nl\no\nh\ne\nl\nl\no', -10),
      'h\ne\nl\nl\no\nh\ne\nl\nl\no');
  });

  it('should give up to 10 lines back when given is > 10 ', () => {
    assert.strictEqual(
      tail(
        'h\ne\nl\nl\no\nh\ne\nl\nl\no\nbye', -10
      ), 'e\nl\nl\no\nh\ne\nl\nl\no\nbye');
  });

  describe('lineCount', () => {
    it('Should give from last to given number of lines 10', () => {
      assert.strictEqual(
        linesUpTo('hello\nbye', -10), 'hello\nbye');
    });

    it('Should give from last to given number of lines 1', () => {
      assert.strictEqual(
        linesUpTo('hello\nbye', -1), 'bye');
    });
  });

  describe('charactersUpto', () => {
    it('Should give the bytes of given lines upto 10 from last', () => {
      assert.strictEqual(
        charactersUpTo('hello\nbye', -10), 'hello\nbye');
    });

    it('Should give the bytes of given lines upto 2 from last', () => {
      assert.strictEqual(
        charactersUpTo('hello\nbye', -2), 'ye');
    });
  });
});
