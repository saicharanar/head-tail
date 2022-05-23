const checkValidators = ({ options }) => {
  try {
    if (!isFinite(options.count)) {
      throw 'Illegal Count';
    }

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
      throw 'usage: head[-n lines | -c bytes][file ...]';
    }
  } catch (error) {
    throw { message: error };
  }
};

exports.checkValidators = checkValidators;
exports.validateOptions = validateOptions;
