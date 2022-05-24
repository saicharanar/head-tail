const { parseOptions } = require('./parseOptions.js');
const { error: logError, log: logOutput } = require('console');
const { head } = require('./headLib');

const createHeader = (fileName) => `==> ${fileName} <==\n`;
const logger = (log, content) => log(content);

const main = (readFile, ...content) => {
  if (content.length === 0) {
    return 'usage: head[-n lines | -c bytes][file ...]';
  }

  const { files, options } = parseOptions(...content);
  const totalFilesLength = files.length;
  return files.forEach((file) => {
    let fileContent = '';
    try {
      fileContent = readFile(file, 'utf8');
    } catch (error) {
      const message = `head: ${file}: No such file or directory`;
      logger(logError, message);
    }

    const header = totalFilesLength > 1 ? createHeader(file) : '';
    const headContent = header + head(fileContent, options);
    logger(logOutput, `${headContent}\n`);
  });
};

exports.main = main;

