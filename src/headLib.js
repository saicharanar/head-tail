const splitLines = (lines) => lines.split('\n');
const joinLines = (lines) => lines.join('\n');

const linesUpTo = (lines, linesCount) => {
  const allLines = splitLines(lines);
  return joinLines(allLines.slice(0, linesCount));
};

const charactersUpTo = (lines, charCount) => lines.slice(0, charCount);

const head = (lines, { option, count }) => {
  if (option === '-c') {
    return charactersUpTo(lines, +count);
  }
  return linesUpTo(lines, +count);
};

exports.head = head;
exports.linesUpTo = linesUpTo;
exports.charactersUpTo = charactersUpTo;
