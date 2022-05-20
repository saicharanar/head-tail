const splitLines = (lines) => lines.split('\n');
const joinLines = (lines) => lines.join('\n');

const getLines = (splittedLines) => {
  const linesToShow = [];
  for (let index = 0; index < splittedLines.length && index < 10; index++) {
    linesToShow.push(splittedLines[index]);
  }
  return linesToShow;
};

const head = (lines) => {
  const splittedLines = splitLines(lines);
  const linesToShow = getLines(splittedLines);
  return joinLines(linesToShow);
};

exports.head = head;
exports.getLines = getLines;
