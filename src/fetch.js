const isFlag = (element) => element.startsWith('-');

const noOptionGiven = (content) => !content.some((option) => {
  return isFlag(option);
});

const isFile = (element) => !(isFlag(element) || isFinite(+element[0]));

const keyContainsValue = (key) => /-[a-z][0-9]+/.test(key);

const keyAsValue = (option) => /-[0-9]+/.test(option);

const getKeyValuePair = (key, value) => {
  let keyValue = value;
  let newKey = key;

  if (keyContainsValue(key)) {
    [, newKey, keyValue] = key.match(/(-[\w])([0-9]+)/);
  }

  if (keyAsValue(key)) {
    keyValue = newKey.slice(1);
    newKey = '-n';
  }

  return [newKey, keyValue];
};

const getFiles = (content) => {
  const initialFile = content.find((option) => {
    return isFile(option);
  });
  if (!initialFile) {
    return [0];
  }

  const initialFileIndex = content.indexOf(initialFile);
  return [initialFileIndex, content.slice(initialFileIndex)];
};

exports.getFiles = getFiles;
exports.isFlag = isFlag;
exports.getKeyValuePair = getKeyValuePair;
exports.noOptionGiven = noOptionGiven;
exports.keyAsValue = keyAsValue;
exports.keyContainsValue = keyContainsValue;
exports.isFile = isFile;
