const splitLines = (lines) => lines.split('\n');
const joinLines = (lines) => lines.join('\n');

const linesUpTo = (lines, linesCount) => {
  const allLines = splitLines(lines);
  return joinLines(allLines.slice(0, linesCount));
};

const charactersUpTo = (lines, charCount) => lines.slice(0, charCount);

const head = (lines, { linesCount, charCount }) => {
  if (linesCount) {
    return linesUpTo(lines, linesCount);
  }
  return charactersUpTo(lines, charCount);
};

const headMain = (readFile, ...content) => {
  const fileName = content[content.length - 1];
  const options = { linesCount: 10, charCount: undefined };
  const fileContent = readFile(fileName, 'utf8');
  return head(fileContent, options);
};

exports.head = head;
exports.headMain = headMain;
exports.linesUpTo = linesUpTo;
exports.charactersUpTo = charactersUpTo;
