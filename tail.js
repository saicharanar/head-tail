const { tailMain } = require('./src/tail/tailLib');
const fs = require('fs');

console.log(tailMain(fs.readFileSync, process.argv.slice(2)));

