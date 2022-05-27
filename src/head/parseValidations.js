const validOptions = ['-n', '-c'];
const usage = 'head [-n lines | -c bytes] [file ...]';
const illegalOptionError = (option) =>
  `illegal option -- ${option}\nusage: ${usage}`;

const illegalCountError = (option, count) => {
  const operation = option === '-n' ? 'line' : 'byte';
  return `illegal ${operation} count -- ${count}`;
};

const checkValidators = ({ files, options }) => {
  const checkForValidOption = (option) => {
    if (!validOptions.includes(option)) {
      throw illegalOptionError(option);
    }
  };

  const checkIfCountIsZero = (option, count) => {
    if (count === 0) {
      throw illegalCountError(option, count);
    }
  };

  try {
    if (!isFinite(+options.count)) {
      throw illegalCountError(options.option, options.count);
    }
    if (!files) {
      throw `usage: ${usage}`;
    }
    checkForValidOption(options.option);
    checkIfCountIsZero(options.option, options.count);
  } catch (error) {
    throw { error: 'parseError', message: error };
  }
};

const validateOptions = (content) => {
  const multiOptions = (content) => {
    const allContent = content.toString();
    return allContent.includes('-n') && allContent.includes('-c');
  };

  const checkForMultiOptions = (args) => {
    if (multiOptions(args)) {
      throw 'cant combine line and byte counts';
    }
  };

  const checkForValidCount = (content) => {
    if (content.length < 2 && validOptions.includes(content[0])) {
      throw `option requires an argument -- ${content[0][1]}\nusage: ${usage}`;
    }
  };

  try {
    if (content.length === 0) {
      throw `usage: ${usage}`;
    }
    checkForValidCount(content);
    checkForMultiOptions(content);
  } catch (error) {
    throw { message: error };
  }
};

exports.checkValidators = checkValidators;
exports.validateOptions = validateOptions;
