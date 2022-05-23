const usage = 'head[-n lines | -c bytes][file ...]';
const illegalOptionError = (option) =>
  `illegal option -- ${option}\nusage: ${usage}`;

const illegalCountError = (option, count) => {
  const operation = option === '-n' ? 'line' : 'byte';
  return `illegal ${operation} count -- ${count}`;
};

const checkValidators = ({ files, options }) => {
  const checkForValidOption = (option) => {
    const validOptions = ['-n', '-c'];
    if (!validOptions.includes(option)) {
      throw illegalOptionError(option);
    }
  };

  try {
    if (!isFinite(options.count)) {
      throw illegalCountError(options.option, options.count);
    }
    if (!files) {
      throw `usage: ${usage}`;
    }
    checkForValidOption(options.option);
  } catch (error) {
    throw { error: 'parseError', message: error };
  }
};

const validateOptions = (content) => {
  const multiOptions = (content) => {
    const allContent = content.toString();
    return allContent.includes('-n') && allContent.includes('-c');
  };

  try {
    if (multiOptions(content)) {
      throw 'cant combine line and byte counts';
    }
    if (content.includes('--help')) {
      throw `usage: ${usage}`;
    }
  } catch (error) {
    throw { message: error };
  }
};

exports.checkValidators = checkValidators;
exports.validateOptions = validateOptions;
