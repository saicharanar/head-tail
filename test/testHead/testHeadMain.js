const assert = require('assert');
const {
  readFile, getFileProp
} = require('../../src/head/headMain');

const mockReadFile = (mockFile, content) => {
  return function (file, encoding) {
    assert.equal(mockFile, file);
    assert.equal(encoding, 'utf8');
    return content;
  };
};

const mockGetFilePropNoError = (mockFile, content) => {
  return function (file) {
    assert.equal(mockFile, file);
    return content;
  };
};

const mockGetFilePropWithError = (mockFile, content) => {
  return function (file) {
    assert.equal(mockFile, file);
    throw { code: 1 };
  };
};

describe.only('headMain', () => {
  const mockedReadFile = mockReadFile('./a.txt', 'hello');
  describe('readFile', () => {
    it('Should give the first file to readFile', () => {
      assert.deepStrictEqual(
        readFile(mockedReadFile, './a.txt'),
        'hello'
      );
    });
  });

  const mockedGetFilePropNoError = mockGetFilePropNoError('a.txt', 'hello');
  const mockedGetFilePropWithError = mockGetFilePropWithError('a.txt', 1);
  describe('getFileProp', () => {
    it('Should give the fileProp back if no error occurred', () => {
      assert.deepStrictEqual(
        getFileProp(mockedGetFilePropNoError, 'a.txt'),
        { fileName: 'a.txt', content: 'hello' }
      );
    });
    it('Should give the fileProp back with error', () => {
      assert.deepStrictEqual(
        getFileProp(mockedGetFilePropWithError, 'a.txt'),
        { fileName: 'a.txt', content: '', error: 1 }
      );
    });
  });
});  
