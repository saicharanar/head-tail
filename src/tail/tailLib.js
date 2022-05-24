const splitLines = (lines) => lines.split('\n');
const joinLines = (lines) => lines.join('\n');

const linesUpTo = (lines, linesCount) => {
  const allLines = splitLines(lines);
  return joinLines(allLines.slice(linesCount));
};

const charactersUpTo = (lines, charCount) => lines.slice(charCount);

const tail = (lines, linesCount) => {
  return linesUpTo(lines, linesCount);
};

exports.tail = tail;
exports.linesUpTo = linesUpTo;
exports.charactersUpTo = charactersUpTo;
