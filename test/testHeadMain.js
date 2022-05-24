const assert = require('assert');
const { main } = require('../src/headMain');

const shouldReturn = (mockFiles, content) => {
  let index = 0;
  return function (files, encoding) {
    assert.equal(mockFiles[index], files);
    assert.equal(encoding, 'utf8');
    index++;
    return content;
  };
};

describe('headMain readFile', () => {
  const mockedHeadMain = shouldReturn(['./a.txt', './b.txt'], '');
  it('Should give back 10 lines of content as default', () => {
    assert.strictEqual(
      main(mockedHeadMain, './a.txt'),
      undefined
    );
  });

  it('Should give back 10 lines of content as default', () => {
    assert.strictEqual(
      main(mockedHeadMain, './b.txt'),
      undefined
    );
  });
});

