const assert = require('assert');
const {
  checkValidators,
  validateOptions
} = require('../../src/head/parseValidations');
const usage = 'head [-n lines | -c bytes] [file ...]';

describe('validators', () => {
  it('Should throw error when count not provided -n ', () => {
    const options = { files: ['hello'], options: { option: '-n', count: 'a' } };
    assert.throws(() => checkValidators(options), {
      message: 'illegal line count -- a'
    });
  });

  it('Should throw error when count not provided -c', () => {
    const options = { files: ['hello'], options: { option: '-c', count: 'a' } };
    assert.throws(() => checkValidators(options), {
      message: 'illegal byte count -- a'
    });
  });

  it('Should throw when no file specified', () => {
    const options = { files: undefined, options: { option: '-c', count: 1 } };
    assert.throws(() => checkValidators(options), {
      message: `usage: ${usage}`
    });
  });

  it('Should throw when count is 0', () => {
    const options = { files: ['a'], options: { option: '-n', count: 0 } };
    assert.throws(() => checkValidators(options), {
      message: 'illegal line count -- 0'
    });
  });

  it('Should throw when invalid option given', () => {
    const options = { files: ['hello'], options: { option: '-e', count: 10 } };
    assert.throws(() => checkValidators(options), {
      message: `illegal option -- -e\nusage: ${usage}`
    });
  });

  it('Should throw when both options provided', () => {
    assert.throws(() => validateOptions(['-n', '-c']), {
      message: 'cant combine line and byte counts'
    });
  });

  it('Should throw error when count not provided -n and file ', () => {
    assert.throws(() => validateOptions(['-n']), {
      message: `option requires an argument -- n\nusage: ${usage}`
    });
  });
});
