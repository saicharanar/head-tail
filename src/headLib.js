const { parseOptions } = require('./parseOptions.js');

const splitLines = (lines) => lines.split('\n');
const joinLines = (lines) => lines.join('\n');

const linesUpTo = (lines, linesCount) => {
  const allLines = splitLines(lines);
  return joinLines(allLines.slice(0, linesCount));
};

const charactersUpTo = (lines, charCount) => lines.slice(0, charCount);

const head = (lines, { option, count }) => {
  if (option === '-c') {
    return charactersUpTo(lines, count);
  }
  return linesUpTo(lines, count);
};

const headMain = (readFile, ...content) => {
  if (content.length === 0) {
    return 'usage: head[-n lines | -c bytes][file ...]';
  }

  const { files, options } = parseOptions(...content);
  const fileContent = readFile(files[0], 'utf8');
  return head(fileContent, options);
};

exports.head = head;
exports.headMain = headMain;
exports.linesUpTo = linesUpTo;
exports.charactersUpTo = charactersUpTo;
