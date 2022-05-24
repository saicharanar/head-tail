const { main } = require('./src/headMain.js');
const fs = require('fs');

try {
  main(fs.readFileSync, process.argv.slice(2));
} catch (error) {
  console.error(`head: ${error.message}`);
}
