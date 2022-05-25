const { parseArgs } = require('./parseArgs.js');

const USAGE = 'usage: tail  [-r] [-q] [-c # | -n #] [file ...]'

const assertOption = (properties, options, option) => {
  const disallowedFlags = properties.disallowedFlags;

  if (isFlagsPresent(disallowedFlags, getAllFlags(options))) {
    throw USAGE;
  }
};

const findOption = (parseOptions, currentFlag) =>
  parseOptions.find(({ flag }) => currentFlag.includes(flag));

const validateOptions = (parseOptions, options) => {
  options.forEach(option => {
    const optionProperties = findOption(parseOptions, option.flag);
    const validator = optionProperties.validator;

    validator(optionProperties, options, option);
  });
};

const getAllFlags = (options) => options.map((option) => option.flag);

const isFlagsPresent = (flagsList, currentFlags) => {
  return flagsList.some((flag) => currentFlags.includes(flag));
};


const flagContainsValue = (flag) => /-[a-z][0-9]+/.test(flag);

const flagValueParser = (flag, flagValue) => {
  let newFlag = flag;
  let newValue = flagValue;

  if (flagContainsValue(flag)) {
    [, newFlag, newValue] = flag.match(/(-[\w])([0-9]+)/);
  }

  return [newFlag, -newValue];
};

const parseOptions = [
  {
    flag: '-n',
    parse: flagValueParser,
    disallowedFlags: ['-c'],
    validator: assertOption
  },
  {
    flag: '-c',
    parse: flagValueParser,
    disallowedFlags: ['-n']
  }
];

const operations = {
  '-n': 'linesFrom',
  '-c': 'charactersFrom'
};

const createOptions = (options, files) => {
  return {
    files: files,
    options: {
      operations: operations[options[0].flag],
      count: +options[0].value
    }
  };
};

const parser = (args) => {
  const [options, files] = parseArgs(parseOptions, args);
  validateOptions(parseOptions, options);
  return createOptions(options, files);
};

exports.parser = parser;
