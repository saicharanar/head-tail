const {
  getFiles, isFlag, getKeyValuePair, noOptionGiven
} = require('./fetch');
const { checkValidators, validateOptions } = require('./parseValidations');

const parser = (content) => {
  const options = { '-n': 10, '-c': 0 };
  let flag = '-n';

  const [initialFileIndex, files] = getFiles(content);
  for (let index = 0; index < initialFileIndex; index++) {
    if (isFlag(content[index])) {
      const [key, value] = getKeyValuePair(
        content[index], content[index + 1]
      );
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

const parseOptions = (content) => {
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
