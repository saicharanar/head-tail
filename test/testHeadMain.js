const assert = require('assert');
const { headMain } = require('../src/headLib');

const shouldReturn = (mockFile, content) => {
  return function (fileName, encoding) {
    assert.equal(mockFile, fileName);
    assert.equal(encoding, 'utf8');
    return content;
  };
};

describe('headMain', () => {
  it('Should give back 10 lines of content as default', () => {
    const mockedHeadMain = shouldReturn('./a.txt', 'hello');
    assert.strictEqual(
      headMain(mockedHeadMain, 'a', './a.txt'),
      'hello'
    );
  });
});
