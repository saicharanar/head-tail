const splitLines = (lines) => lines.split('\n');
const joinLines = (lines) => lines.join('\n');

const linesUpTo = (lines, linesCount) => {
  const allLines = splitLines(lines);
  return joinLines(allLines.slice(linesCount));
};

const charactersUpTo = (lines, charCount) => lines.slice(charCount);

const tail = (lines, { flag, count }) => {
  if (flag === '-c') {
    return charactersUpTo(lines, count);
  }
  return linesUpTo(lines, count);
};

exports.tail = tail;
exports.linesUpTo = linesUpTo;
exports.charactersUpTo = charactersUpTo;
