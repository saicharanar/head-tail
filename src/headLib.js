const splitLines = (lines) => lines.split('\n');
const joinLines = (lines) => lines.join('\n');

const linesUpTo = (lines, linesCount) => {
  const allLines = splitLines(lines);
  return joinLines(allLines.slice(0, linesCount));
};

const head = (lines, { linesCount }) => {
  const linesToShow = linesUpTo(lines, linesCount);
  return linesToShow;
};

exports.head = head;
exports.linesUpTo = linesUpTo;
