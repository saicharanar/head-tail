const splitLines = (lines) => lines.split('\n');
const joinLines = (lines) => lines.join('\n');

const tail = (lines) => joinLines(splitLines(lines).slice(-10));

exports.tail = tail;
