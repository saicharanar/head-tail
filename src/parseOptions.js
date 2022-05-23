const { checkValidators, validateOptions } = require('./validations');

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
    [, newKey, keyValue] = key.match(/(-[\w\d])([0-9]+)/);
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
    return;
  }

  const initialFileIndex = content.indexOf(initialFile);
  return [initialFileIndex, content.slice(initialFileIndex)];
};

const parser = (content) => {
  const options = { '-n': 10, '-c': 0 };
  let flag = '';

  const [initialFileIndex, files] = getFiles(content);
  for (let index = 0; index < initialFileIndex; index++) {
    if (isFlag(content[index])) {
      const [key, value] = getKeyValuePair(content[index], content[index + 1]);
      flag = key;
      options[key] = value;
    }
  }

  return [flag, options[flag], files];
};

const optionsObject = (option, count, files) => {
  return {
    files: files,
    options: {
      option: option,
      count: count
    }
  };
};

const parseOptions = (...content) => {
  validateOptions(content);
  if (noOptionGiven(content)) {
    return optionsObject('-n', '10', content);
  }

  const [option, count, files] = parser(content);
  const options = optionsObject(option, count, files);
  checkValidators(options);
  return options;
};

exports.parseOptions = parseOptions;
