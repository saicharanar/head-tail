const isFile = (arg) => !(isFlag(arg) || isFinite(+arg[0]));
const isFlag = (arg) => arg.startsWith('-');

const findOption = (parseOptions, currentFlag) =>
  parseOptions.find(({ flag }) => currentFlag.includes(flag));

const createOption = (flag, value) => {
  return {
    flag: flag,
    value: value
  };
};

const parseArgs = (parseOptions, args) => {
  const flagsLog = [], filesLog = [];

  for (let index = 0; index < args.length; index++) {
    if (isFlag(args[index])) {
      const option = findOption(parseOptions, args[index]);
      const parser = option.parse;
      const [flag, flagValue] = parser(args[index], args[index + 1]);

      flagsLog.push(createOption(flag, flagValue));
    }

    if (isFile(args[index])) {
      filesLog.push(args[index]);
    }
  }

  return [flagsLog, filesLog];
};

exports.parseArgs = parseArgs;
