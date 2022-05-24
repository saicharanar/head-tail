const assert = require('assert');
const { tail } = require('../../src/tail/tailLib.js');

describe('tail', () => {
  it('should give the given line back ', () => {
    assert.strictEqual(tail('hello'), 'hello');
  });

  it('should give two lines back ', () => {
    assert.strictEqual(tail('hello\nbye'), 'hello\nbye');
  });

  it('should give up to 10 lines back ', () => {
    assert.strictEqual(
      tail('h\ne\nl\nl\no\nh\ne\nl\nl\no'), 'h\ne\nl\nl\no\nh\ne\nl\nl\no');
  });

  it('should give up to 10 lines back when given is > 10 ', () => {
    assert.strictEqual(
      tail(
        'h\ne\nl\nl\no\nh\ne\nl\nl\no\nbye'
      ), 'e\nl\nl\no\nh\ne\nl\nl\no\nbye');
  });

  describe('lineCount', () => {
    it('Should give from last to given number of lines 10', () => {
      assert.strictEqual(
        tail('hello\nbye', -10), 'hello\nbye');
    });

    it('Should give from last to given number of lines 1', () => {
      assert.strictEqual(
        tail('hello\nbye', -1), 'bye');
    });
  });
});