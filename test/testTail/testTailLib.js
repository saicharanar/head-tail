const assert = require('assert');
const {
  tail, linesUpTo, charactersUpTo
} = require('../../src/tail/tailLib.js');

describe('tail', () => {
  it('should give the given line back ', () => {
    const options = {
      flag: '-n',
      count: -10
    };
    assert.strictEqual(tail('hello', options), 'hello');
  });

  it('should give two lines back ', () => {
    const options = {
      flag: '-n',
      count: -10
    };
    assert.strictEqual(tail('hello\nbye', options), 'hello\nbye');
  });

  it('should give up to 10 lines back ', () => {
    const options = {
      flag: '-n',
      count: -10
    };
    assert.strictEqual(
      tail('h\ne\nl\nl\no\nh\ne\nl\nl\no', options),
      'h\ne\nl\nl\no\nh\ne\nl\nl\no');
  });

  it('should give up to 10 lines back when given is > 10 ', () => {
    const options = {
      flag: '-n',
      count: -10
    };
    assert.strictEqual(
      tail(
        'h\ne\nl\nl\no\nh\ne\nl\nl\no\nbye', options
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
