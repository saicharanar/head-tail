const multiOptions = (content) => {
  const allContent = content.toString();
  return allContent.includes('-n') && allContent.includes('-c');
};
const checkValidators = (content) => {
  try {
    if (multiOptions(content)) {
      throw 'Invalid options';
    }
    if (content.includes('--help')) {
      throw 'usage: head[-n lines | -c bytes][file ...]';
    }
  } catch (error) {
    throw { 'message': error };
  }
};

exports.checkValidators = checkValidators;
