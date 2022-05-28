const { parseOptions } = require('./parseOptions.js');
const { head } = require('./headLib');

const createHeader = (fileName) => `==> ${fileName} <==\n`;
const readFile = (read, file) => {
  try {
    return read(file, 'utf8');
  } catch (error) {
    throw error.code;
  }
};

const getFileContent = (read, file) => {
  try {
    const fileContent = readFile(read, file);
    return { fileName: file, content: fileContent };
  } catch (error) {
    return { fileName: file, content: '', error };
  }
};

const identity = (fileContent, { stdOut, stdError }) => {
  if (fileContent.error) {
    stdError(fileContent.error);
    return;
  }
  stdOut(fileContent.content);
};

const formatContent = (fileContent, { stdOut, stdError }) => {
  if (fileContent.error) {
    stdError(fileContent.error);
    return;
  }
  stdOut(createHeader(fileContent.fileName), fileContent.content);
};

const getFormatter = (length) => length === 1 ? identity : formatContent;

const main = (read, stdOut, stdError, args) => {
  const { files, options } = parseOptions(args);
  const totalFilesLength = files.length;
  const formatter = getFormatter(totalFilesLength);

  for (const file of files) {
    const fileContent = getFileContent(read, file);
    fileContent.content = head(fileContent.content, options);
    formatter(fileContent, { stdOut, stdError });
  }
};

exports.main = main;
exports.readFile = readFile;
