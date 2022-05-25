const { parser } = require('./utilityParser.js');

const splitLines = (lines) => lines.split('\n');
const joinLines = (lines) => lines.join('\n');

const linesFrom = (lines, linesCount) => {
  const allLines = splitLines(lines);
  return joinLines(allLines.slice(linesCount));
};

const charactersFrom = (lines, charCount) => {
  return lines.slice(charCount);
};

const reverse = (lines) => {
  const allLines = splitLines(lines);
  return joinLines(allLines.reverse());
};

const tail = (lines, { operation, count, isReverse }) => {
  let allLines = lines;
  if (isReverse) {
    allLines = reverse(allLines);
  }

  if (operation === 'linesFrom') {
    return linesFrom(allLines, count);
  }
  return charactersFrom(allLines, count);
};

const tailMain = (args) => {
  const options = parser(args);
  return tail('hello\nbye', options);
};

exports.tail = tail;
exports.tailMain = tailMain;
exports.linesUpTo = linesFrom;
exports.charactersUpTo = charactersFrom;
