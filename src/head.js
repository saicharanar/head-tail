const splitLines = (lines) => lines.split('\n');
const joinLines = (lines) => lines.join('\n');

const getLines = (splittedLines, linesCount) => {
  const linesToShow = [];
  for (
    let index = 0;
    index < splittedLines.length && index < linesCount;
    index++
  ) {
    linesToShow.push(splittedLines[index]);
  }
  return linesToShow;
};

const head = (lines, linesCount) => {
  const splittedLines = splitLines(lines);
  const linesToShow = getLines(splittedLines, linesCount);
  return joinLines(linesToShow);
};

exports.head = head;
exports.getLines = getLines;
