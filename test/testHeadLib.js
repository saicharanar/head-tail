const assert = require('assert');
const {
  head, linesUpTo, charactersUpTo } = require('../src/headLib.js');

describe('head', () => {
  it('Should give the empty line back', () => {
    assert.strictEqual(head('', { linesCount: 10, charCount: undefined }), '');
  });

  it('Should give the 1 line back', () => {
    assert.strictEqual(head(
      'hello',
      { linesCount: 10, charCount: undefined }), 'hello'
    );
  });

  it('Should give the 2 lines back', () => {
    assert.strictEqual(head('hello\nbye', {
      linesCount: 10, charCount: undefined
    }), 'hello\nbye');
  });

  it('Should give the lines back when less than 10', () => {
    assert.strictEqual(head('hello\nbye\nworld\na', {
      linesCount: 10, charCount: undefined
    }), 'hello\nbye\nworld\na'
    );
  });

  it('Should lines upto 10 only when lines are >10', () => {
    assert.strictEqual(head('h\ne\nl\nl\no\nw\no\nr\nl\nd\nbye', {
      linesCount: 10, charCount: undefined
    }), 'h\ne\nl\nl\no\nw\no\nr\nl\nd'
    );
  });

  describe('linesCount', () => {
    it('Should give upto 2 lines', () => {
      assert.strictEqual(head('hello\nwow\nwhew', {
        linesCount: 2, charCount: undefined
      }), 'hello\nwow');
    });

    it('Should give upto 1 line when 1 line given and lineCount of 2  ', () => {
      assert.strictEqual(head('hello', {
        linesCount: 2, charCount: undefined
      }), 'hello');
    });
  });

  describe('charCount', () => {
    it('Should give the given character back when count is 1', () => {
      assert.strictEqual(
        head('h', { linesCount: 10, charCount: 1 }),
        'h'
      );
    });

    it('Should give 2 characters back when count is 2', () => {
      assert.strictEqual(
        head('he', { linesCount: 10, charCount: 2 }),
        'he'
      );
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

describe('charactersUpTo', () => {
  it('Should give the character back when count 1', () => {
    assert.strictEqual(charactersUpTo('h', 1), 'h');
  });

  it('Should give two characters when count 2', () => {
    assert.strictEqual(charactersUpTo('he', 2), 'he');
  });

  it('Should give one character when count 1 and content >1', () => {
    assert.strictEqual(charactersUpTo('he', 1), 'h');
  });

  it('Should give the whiteSpaces back', () => {
    assert.strictEqual(charactersUpTo('\nh', 1), '\n');
  });
});
