const assert = require('assert');
const { parseOptions } = require('../src/parseOptions');

describe('parsseOptions', () => {
  it('Should give the object of default values when no option given', () => {
    assert.deepStrictEqual(parseOptions(
      'hello'), {
      files: ['hello'],
      options: {
        option: '-n',
        count: 10
      }
    }
    );
  });

  it('Should give the -n value when -n specified', () => {
    assert.deepStrictEqual(parseOptions(
      '-n', '100', 'hello', 'bye'), {
      files: ['hello', 'bye'],
      options: {
        option: '-n',
        count: 100
      }
    }
    );
  });

  it('Should give the -n value when -n specified with no space', () => {
    assert.deepStrictEqual(parseOptions(
      '-n100', 'hello'), {
      files: ['hello'],
      options: {
        option: '-n',
        count: 100
      }
    }
    );
  });

  it('Should give the -c value when -c specified', () => {
    assert.deepStrictEqual(parseOptions('-c', '20', 'hello'), {
      files: ['hello'],
      options: {
        option: '-c',
        count: 20
      }
    });
  });

  it('Should give the -c value when -c specified with no space', () => {
    assert.deepStrictEqual(parseOptions('-c20', 'hello'), {
      files: ['hello'],
      options: {
        option: '-c',
        count: 20
      }
    });
  });

  it.skip('Should throw error when count not provided -n ', () => {
    assert.throws(() => parseOptions('-n', 'hello'), {
      error: 'illegal count'
    });
  });

  it.skip('Should throw error when count not provided -c', () => {
    assert.throws(() => parseOptions('-n', 'hello'), {
      error: 'illegal count'
    });
  });

  it('Should throw error when two options provided', () => {
    assert.throws(() => parseOptions('-n', '-c', 'hello'), {
      error: 'Invalid options'
    });
  });

  it('Should throw help when help is provided', () => {
    assert.throws(() => parseOptions('-n', '--help', 'hello'), {
      error: 'usage'
    });
  });
});
