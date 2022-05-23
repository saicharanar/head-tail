const { checkValidators, validateOptions } = require('./validations');

const noOptionGiven = (content) => !content.some((option) => {
  return /^-[nc]/.test(option);
});

const isFlag = (element) => element.startsWith('-');

const isFile = (element) => !(isFlag(element) || isFinite(+element[0]));

const keyContainsValue = (key) => /[0-9]+/.test(key);

const getKeyValuePair = (key, value) => {
  let keyValue = value;
  let newKey = key;
  if (keyContainsValue(key)) {
    [, newKey, keyValue] = key.match(/(-[nc])([0-9]+)/);
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
  return content.slice(initialFileIndex);
};

const parser = (content) => {
  const options = { '-n': 10, '-c': 0 };
  let flag = '';

  for (let index = 0; index < content.length; index++) {
    if (isFlag(content[index])) {
      const [key, value] = getKeyValuePair(content[index], content[index + 1]);
      flag = key;
      options[key] = value;
    }
  }

  const files = getFiles(content);
  return [flag, options[flag], files];
};

const optionsObject = (option, count, files) => {
  return {
    files: files,
    options: {
      option: option,
      count: +count
    }
  };
};

const parseOptions = (...content) => {
  validateOptions(content);
  if (noOptionGiven(content)) {
    return optionsObject('-n', 10, content);
  }

  const [option, count, files] = parser(content);
  const options = optionsObject(option, count, files);
  checkValidators(options);
  return options;
};

exports.parseOptions = parseOptions;
