const splitLines = (lines) => lines.split('\n');
const joinLines = (lines) => lines.join('\n');

const linesUpto = (lines, linesCount) => {
  const allLines = splitLines(lines);
  return joinLines(allLines.slice(linesCount));
};

const tail = (lines, linesCount) => {
  if (linesCount) {
    return linesUpto(lines, linesCount);
  }
  return linesUpto(lines, -10);
};

exports.tail = tail;
