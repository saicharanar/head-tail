const assert = require('assert');
const { checkValidators, validateOptions } = require('../src/validations');

describe('validators', () => {
  it('Should throw error when count not provided -n ', () => {
    const options = { files: ['hello'], options: { option: '-n', count: NaN } };
    assert.throws(() => checkValidators(options), {
      message: 'Illegal Count'
    });
  });

  it('Should throw error when count not provided -c', () => {
    const options = { files: ['hello'], options: { option: '-c', count: NaN } };
    assert.throws(() => checkValidators(options), {
      message: 'Illegal Count'
    });
  });

  it('Should throw help when help is provided', () => {
    assert.throws(() => validateOptions(['--help']), {
      message: 'usage: head[-n lines | -c bytes][file ...]'
    });
  });

  it('Should throw help when help is provided', () => {
    assert.throws(() => validateOptions(['-n', '-c']), {
      message: 'cant combine line and byte counts'
    });
  });
});
