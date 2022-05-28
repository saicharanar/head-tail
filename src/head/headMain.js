const { parser } = require('./utilityParser.js');
const { head } = require('./headLib');

const createHeader = (fileName) => `==> ${fileName} <==\n`;

const readFile = (read, file) => {
  try {
    return read(file, 'utf8');
  } catch (error) {
    throw error.code;
  }
};

const getFileProp = (read, file) => {
  try {
    const fileContent = readFile(read, file);
    return { fileName: file, content: fileContent };
  } catch (error) {
    return { fileName: file, content: '', error };
  }
};

const identity = ({ content }) => content;

const formatContent = ({ fileName, content }) => {
  return createHeader(fileName) + content;
};

const getFormatter = (length) => length === 1 ? identity : formatContent;

const display = (file, { stdOut, stdError }) => {
  if (file.error) {
    stdError(file.error);
    return;
  }

  stdOut(file.content);
};

const main = (read, stdOut, stdError, args) => {
  const { files, options } = parser(args);
  const formatter = getFormatter(files.length);

  for (const file of files) {
    const fileProp = getFileProp(read, file);
    fileProp.content = head(fileProp.content, options);
    fileProp.content = formatter(fileProp);
    display(fileProp, { stdOut, stdError });
  }
};

exports.main = main;
exports.readFile = readFile;
