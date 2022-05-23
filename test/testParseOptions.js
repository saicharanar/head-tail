const assert = require('assert');
const { parseOptions } = require('../src/parseOptions');

describe('parseOptions', () => {
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

  it('Should give the -n as default key when count gave as key', () => {
    assert.deepStrictEqual(parseOptions('-20', 'hello'), {
      files: ['hello'],
      options: {
        option: '-n',
        count: 20
      }
    });
  });
});

