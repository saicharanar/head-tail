const splitLines = (lines) => lines.split('\n');
const joinLines = (lines) => lines.join('\n');

const linesUpTo = (lines, linesCount) => {
  return lines.slice(0, linesCount);
};

const head = (lines, { linesCount }) => {
  const splittedLines = splitLines(lines);
  const linesToShow = linesUpTo(splittedLines, linesCount);
  return joinLines(linesToShow);
};

exports.head = head;
exports.linesUpTo = linesUpTo;
