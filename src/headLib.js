const { parseOptions } = require('./parseOptions.js');

const splitLines = (lines) => lines.split('\n');
const joinLines = (lines) => lines.join('\n');

const linesUpTo = (lines, linesCount) => {
  const allLines = splitLines(lines);
  return joinLines(allLines.slice(0, linesCount));
};

const charactersUpTo = (lines, charCount) => lines.slice(0, charCount);

const head = (lines, { linesCount, charCount }) => {
  if (charCount) {
    return charactersUpTo(lines, charCount);
  }
  return linesUpTo(lines, linesCount);
};

const headMain = (readFile, ...content) => {
  const { files, options } = parseOptions(content);
  const fileContent = readFile(files[0], 'utf8');
  return head(fileContent, options);
};

exports.head = head;
exports.headMain = headMain;
exports.linesUpTo = linesUpTo;
exports.charactersUpTo = charactersUpTo;
