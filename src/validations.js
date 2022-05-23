const checkValidators = (options) => {
  try {
    if (!isFinite(options.count)) {
      throw 'Illegal Count';
    }
    if (options.files.includes('--help')) {
      throw 'usage: head[-n lines | -c bytes][file ...]';
    }
  } catch (error) {
    throw { message: error };
  }
};

exports.checkValidators = checkValidators;
