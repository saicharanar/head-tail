const { headMain } = require('./src/headLib.js');
const fs = require('fs');

console.log(headMain(fs.readFileSync, ...process.argv.slice(2)));
