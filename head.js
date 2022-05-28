const { main } = require('./src/head/headMain.js');
const fs = require('fs');

try {
  main(fs.readFileSync, console.log, console.error, process.argv.slice(2));
} catch (error) {
  console.error(`head: ${error.message}`);
}
