const assert = require('assert');
const { parseOptions } = require('../src/parseOptions');

describe('validators', () => {
  it('Should throw error when count not provided -n ', () => {
    assert.throws(() => parseOptions('-n', 'hello'), {
      error: 'illegal count'
    });
  });

  it('Should throw error when count not provided -c', () => {
    assert.throws(() => parseOptions('-n', 'hello'), {
      message: 'illegal count'
    });
  });

  it('Should throw error when two options provided', () => {
    assert.throws(() => parseOptions('-n', '-c', 'hello'), {
      message: 'Invalid options'
    });
  });

  it('Should throw help when help is provided', () => {
    assert.throws(() => parseOptions('-n', '--help', 'hello'), {
      message: 'usage: head[-n lines | -c bytes][file ...]'
    });
  });
});
