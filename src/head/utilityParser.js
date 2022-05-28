const { parseArgs } = require('../parseArgs');
const USAGE = 'head: head [-n lines | -c bytes] [file ...]';

const illegalCountError = (option, count) => {
  const operation = option === '-n' ? 'line' : 'byte';
  return `illegal ${operation} count -- ${count}`;
};

const assertOption = (flags, properties, option) => {
  const disallowedFlags = properties.disallowedFlags;

  if (isFlagsPresent(disallowedFlags, getAllFlags(flags))) {
    throw USAGE;
  }

  if (!isFinite(+option.flagValue)) {
    throw illegalCountError(option.flagValue);
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

const parseOptions = [
  {
    flag: '-n',
    parse: flagValueParser,
    validator: assertOption,
    disallowedFlags: ['-c']
  },
  {
    flag: '-c',
    parse: flagValueParser,
    validator: assertOption,
    disallowedFlags: ['-n']
  }
];

const createOptions = (options, files) => {
  const option = options[options.length - 1];
  return {
    files: files,
    options: {
      option: option.flag,
      count: +option.value,
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
