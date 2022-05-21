const multiOptions = (content) => {
  return content.includes('-n') && content.includes('-c');
};

const noOptionGiven = (allOptions) => !allOptions.includes('-');

const checkValidators = (allOptions) => {
  try {
    if (multiOptions(allOptions)) {
      throw 'Invalid options';
    }
    if (allOptions.includes('--help')) {
      throw 'usage';
    }
  } catch (error) {
    throw { error: error };
  }
};

const parser = (allOptions) => {
  if (noOptionGiven(allOptions)) {
    return ['', '-n', '10', allOptions];
  }
  return allOptions.match(/.*,*(-[n,c]),*([0-9]+),(.*)/);
};

const parseOptions = (...content) => {
  const allOptions = content.toString();
  checkValidators(allOptions);

  let option, count, files;
  try {
    [, option, count, files] = parser(allOptions);
  } catch (error) {
    throw { error: 'illegal count' };
  }

  return {
    files: files.split(','),
    options: {
      linesCount: option === '-n' ? +count : 10,
      charCount: option === '-c' ? +count : undefined,
    }
  };
};

exports.parseOptions = parseOptions;
