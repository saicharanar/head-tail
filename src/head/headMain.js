const { parseOptions } = require('./parseOptions.js');
const { error: logError, log: logOutput } = require('console');
const { head } = require('./headLib');

const createHeader = (fileName) => `==> ${fileName} <==\n`;
const logger = (log, content) => log(content);
const readFile = (read, file) => read(file, 'utf8');

const main = (read, args) => {
  if (args.length === 0) {
    const message = 'usage: head[-n lines | -c bytes][file ...]';
    logger(logError, message);
  }

  const { files, options } = parseOptions(args);
  const totalFilesLength = files.length;
  return files.forEach((file) => {
    let fileContent = '';
    try {
      fileContent = readFile(read, file);
    } catch (error) {
      const message = `head: ${file}: No such file or directory`;
      logger(logError, message);
    }

    const header = totalFilesLength > 1 ? createHeader(file) : '';
    const headContent = header + head(fileContent, options);
    logger(logOutput, `${headContent}`);
  });
};

exports.main = main;
exports.readFile = readFile;
exports.logger = logger;

