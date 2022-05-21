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
  return files.map((file) => {
    let fileContent = '';
    try {
      fileContent = readFile(file, 'utf8');
    } catch (error) {
      throw { name: 'FileReadError', message: 'error reading file' };
    }

    return head(fileContent, options);
  }).join('\n\n');
};

exports.head = head;
exports.headMain = headMain;
exports.linesUpTo = linesUpTo;
exports.charactersUpTo = charactersUpTo;
