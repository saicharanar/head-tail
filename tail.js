const { tailMain } = require('./src/tail/tailLib');
const fs = require('fs');

try {
  console.log(tailMain(fs.readFileSync, process.argv.slice(2)));
} catch (error) {
  console.error(`tail: ${error.message}`);
}

