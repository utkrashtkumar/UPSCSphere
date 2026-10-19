const fs = require('fs');
const path = require('path');
const { findObjectRange } = require('./braceRangeFinder');

const dir = path.join(__dirname, '..', 'data', 'pyqVault');

function replaceQuestionInFile(fileName, qId, newQObj) {
  const filePath = path.join(dir, fileName);
  let content = fs.readFileSync(filePath, 'utf8');

  const range = findObjectRange(content, qId);
  if (!range) {
    console.error(`ERROR: Question ${qId} not found in ${fileName}`);
    return false;
  }

  // Format new question as formatted JS object string
  const formattedObj = JSON.stringify(newQObj, null, 2)
    .replace(/"([^"]+)":/g, '$1:') // unquote keys
    .replace(/"/g, "'") // single quotes
    .split('\n')
    .map(line => '  ' + line)
    .join('\n');

  content = content.slice(0, range.startIdx) + formattedObj + ',\n' + content.slice(range.endIdx).trimStart();
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully replaced ${qId} in ${fileName}`);
  return true;
}

module.exports = { replaceQuestionInFile };
