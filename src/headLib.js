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
    return charactersUpTo(lines, +count);
  }
  return linesUpTo(lines, +count);
};

const createHeader = (fileName) => `==> ${fileName} <==\n`;

const headMain = (readFile, ...content) => {
  if (content.length === 0) {
    return 'usage: head[-n lines | -c bytes][file ...]';
  }

  const { files, options } = parseOptions(...content);
  const totalFilesLength = files.length;
  return files.map((file) => {
    let fileContent = '';
    try {
      fileContent = readFile(file, 'utf8');
    } catch (error) {
      return `head: error reading file ${file}`;
    }

    const header = totalFilesLength > 1 ? createHeader(file) : '';
    return header + head(fileContent, options);
  }).join('\n\n');
};

exports.head = head;
exports.headMain = headMain;
exports.linesUpTo = linesUpTo;
exports.charactersUpTo = charactersUpTo;
