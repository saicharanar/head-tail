const { parseArgs } = require('./parseArgs.js');

const USAGE = 'usage: tail  [-r] [-q] [-c # | -n #] [file ...]';

const illegalOffsetError = (value) => {
  return {
    error: 'parseError',
    message: `illegal offset -- ${value}`
  };
};

const assertOption = (flags, properties, option) => {
  const disallowedFlags = properties.disallowedFlags;

  if (isFlagsPresent(disallowedFlags, getAllFlags(flags))) {
    throw USAGE;
  }

  if (!isFinite(+option.flagValue)) {
    throw illegalOffsetError(option.flagValue);
  }
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

  return [newFlag, newValue];
};

const reverseParser = () => {
  return ['-r'];
};

const reverseValidator = () => {
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
    disallowedFlags: ['-n'],
    validator: assertOption
  },
  {
    flag: '-r',
    parse: reverseParser,
    validator: reverseValidator
  }
];

const operations = {
  '-n': 'linesFrom',
  '-c': 'charactersFrom'
};

const modValue = (option, value) => {
  const positiveFlags = ['+'];

  if (positiveFlags.includes(option)) {
    return +value;
  }

  return -(+value);
};

const isReverseSet = (options) => options.find((option) => {
  return option.flag === '-r';
});

const getNonRecursiveFlag = (options) => {
  return options.find((option) => option.flag !== '-r');
};

const createOptions = (options, files) => {
  const option = getNonRecursiveFlag(options);
  return {
    files: files,
    options: {
      operation: operations[option.flag],
      count: modValue(option.flag, option.value),
      isReverse: isReverseSet(options) ? true : false
    }
  };
};

const makeDefaultIfNoOption = (options) => {
  if (options.length === 0) {
    return [{ flag: '-n', value: '10' }];
  }
  return options;
};

const parser = (args) => {
  const [options, files] = parseArgs(parseOptions, args);
  return createOptions(makeDefaultIfNoOption(options), files);
};

exports.parser = parser;
