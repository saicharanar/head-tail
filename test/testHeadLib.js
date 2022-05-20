const assert = require('assert');
const { head, getLines } = require('../src/head.js');

describe('head', () => {
  it('Should give the 1 line back', () => {
    assert.strictEqual(head('hello', 10), 'hello');
  });

  it('Should give the 2 lines back', () => {
    assert.strictEqual(head('hello\nbye', 10), 'hello\nbye');
  });

  it('Should give the lines back when less than 10', () => {
    assert.strictEqual(head('hello\nbye\nworld\na', 10),
      'hello\nbye\nworld\na'
    );
  });

  it('Should lines upto 10 only when lines are >10', () => {
    assert.strictEqual(head('h\ne\nl\nl\no\nw\no\nr\nl\nd\nbye', 10),
      'h\ne\nl\nl\no\nw\no\nr\nl\nd'
    );
  });

  it('Should give upto 2 lines', () => {
    assert.strictEqual(head('hello\nwow\nwhew', 2), 'hello\nwow');
  });

});

describe('getLines', () => {
  it('Should give the line back', () => {
    assert.deepStrictEqual(getLines(['hello'], 10), ['hello']);
  });

  it('Should give the 2 lines back', () => {
    assert.deepStrictEqual(getLines(['hello', 'bye'], 10), ['hello', 'bye']);
  });

  it('Should only give 10 lines back', () => {
    assert.deepStrictEqual(
      getLines(['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd', 'bye'], 10),
      ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']);
  });

  it('Should give upto 2 lines', () => {
    assert.deepStrictEqual(getLines(['hello', 'wow', 'whew'], 2),
      ['hello', 'wow']);
  });
});

