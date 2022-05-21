const assert = require('assert');
const { headMain } = require('../src/headLib');

const shouldReturn = (mockFiles, content) => {
  let index = 0;
  return function (files, encoding) {
    assert.equal(mockFiles[index], files);
    assert.equal(encoding, 'utf8');
    index++;
    return content;
  };
};

describe('headMain', () => {
  const mockedHeadMain = shouldReturn(['./a.txt', './b.txt'], 'hello');
  it('Should give back 10 lines of content as default', () => {
    assert.strictEqual(
      headMain(mockedHeadMain, './a.txt'),
      'hello'
    );
  });

  it('Should give back 10 lines of content as default', () => {
    assert.strictEqual(
      headMain(mockedHeadMain, './b.txt'),
      'hello'
    );
  });
});
