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
  const flagsLog = [];
  let index = 0;

  while (isFlag(args[index])) {
    const option = findOption(parseOptions, args[index]);
    const [flag, flagValue] = option.parse(args[index], args[index + 1]);

    option.validator(flagsLog, option, { flag, flagValue });
    flagsLog.push(createOption(flag, flagValue));
    index += isFinite(args[index + 1]) ? 2 : 1;
  }

  return [flagsLog, args.slice(index)];
};

exports.parseArgs = parseArgs;
