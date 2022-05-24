const {
  getFiles, getKeyValuePair, isFlag, isFile, keyAsValue,
  keyContainsValue, noOptionGiven
} = require('../../src/head/fetch');
const assert = require('assert');

describe('getFiles', () => {
  it('Should fetch all the fileNames from given args', () => {
    assert.deepStrictEqual(getFiles(
      ['-n', '1', 'hello']
    ), [2, ['hello']]);
  });

  it('Should not given any files and index will be 0', () => {
    assert.deepStrictEqual(getFiles(
      ['-n', '1']
    ), [0]);
  });
});

describe('getKeyValuePair', () => {
  it('Should given key value when not combined', () => {
    assert.deepStrictEqual(getKeyValuePair('-n', '1'),
      ['-n', '1']);
  });

  it('Should given key value when combined', () => {
    assert.deepStrictEqual(getKeyValuePair('-n1'),
      ['-n', '1']);
  });

  it('Should given key value when number is given as key', () => {
    assert.deepStrictEqual(getKeyValuePair('-1'),
      ['-n', '1']);
  });
});

describe('isFlag', () => {
  it('Should give true when its a flag', () => {
    assert.strictEqual(isFlag('-n'), true);
  });

  it('Should give false when its not a flag', () => {
    assert.strictEqual(isFlag('a'), false);
  });
});

describe('isFile', () => {
  it('Should give true if its a file', () => {
    assert.strictEqual(isFile('a'), true);
  });

  it('Should give false if its not a file', () => {
    assert.strictEqual(isFile('-a'), false);
  });
});

describe('keyAsValue', () => {
  it('Should give true if a number is given as key', () => {
    assert.strictEqual(keyAsValue('-9'), true);
  });

  it('Should give false if a number is not given as key', () => {
    assert.strictEqual(keyAsValue('-a'), false);
  });
});

describe('keyContainsValue', () => {
  it('Should give true if the key is combined with number', () => {
    assert.strictEqual(keyContainsValue('-n1'), true);
  });

  it('Should give false if the key is not combined with number', () => {
    assert.strictEqual(keyContainsValue('-n'), false);
  });
});

describe('noOptionGiven', () => {
  it('Should give true if no option given', () => {
    assert.strictEqual(noOptionGiven(['a']), true);
  });

  it('Should give false if option given', () => {
    assert.strictEqual(noOptionGiven(['-a']), false);
  });
});

