const assert = require('assert');
const { checkValidators } = require('../src/validations');

describe('validators', () => {
  it('Should throw error when count not provided -n ', () => {
    const options = { files: ['hello'], option: '-n', count: NaN };
    assert.throws(() => checkValidators(options), {
      message: 'Illegal Count'
    });
  });

  it('Should throw error when count not provided -c', () => {
    const options = { files: ['hello'], option: '-c', count: NaN };
    assert.throws(() => checkValidators(options), {
      message: 'Illegal Count'
    });
  });

  it('Should throw help when help is provided', () => {
    const options = { files: ['--help'], option: '-c', count: 1 };
    assert.throws(() => checkValidators(options), {
      message: 'usage: head[-n lines | -c bytes][file ...]'
    });
  });
});
