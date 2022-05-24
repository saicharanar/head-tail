const assert = require('assert');
const { logger, readFile } = require('../src/headMain');

const shouldReturn = (mockFile, content) => {
  return function (file, encoding) {
    assert.equal(mockFile, file);
    assert.equal(encoding, 'utf8');
    return content;
  };
};

const mockedReadFile = shouldReturn('./a.txt', 'hello');

describe('headMain readFile', () => {
  it('Should give the first file to readFile', () => {
    assert.deepStrictEqual(
      readFile(mockedReadFile, './a.txt'),
      'hello'
    );
  });
});

const mockLogToScreen = (expContent) => (content) => {
  assert.equal(content, expContent);
  return content;
};

const mockedLog = mockLogToScreen('hello');
describe('logger', () => {
  it('Should log to output stream', () => {
    assert.strictEqual(logger(mockedLog, 'hello'), 'hello');
  });
});

