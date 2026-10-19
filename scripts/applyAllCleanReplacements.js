const fs = require('fs');
const path = require('path');
const { findObjectRange } = require('./braceRangeFinder');

const VAULT_DIR = path.join(__dirname, '..', 'data', 'pyqVault');
const files = fs.readdirSync(VAULT_DIR).filter(f => f.endsWith('.ts') && !f.match(/^pyq\d{4}\.ts$/));

// 1. Load batches
const batchA = require('./data_batch_A');
const batchB = require('./data_batch_B');
const batchDedup = require('./batch_dedup_data');

// Merge: batchDedup takes precedence over batchB (e.g. for pyq-2018-gs-99 and pyq-2019-csat-79)
const allReplacements = {
  ...batchA,
  ...batchB,
  ...batchDedup
};

console.log(`Loaded ${Object.keys(allReplacements).length} total questions to replace cleanly.`);

// Preload all file contents into memory
const fileContents = {};
for (const file of files) {
  fileContents[file] = fs.readFileSync(path.join(VAULT_DIR, file), 'utf8');
}

let replacedCount = 0;

for (const [qId, newQObj] of Object.entries(allReplacements)) {
  // Find which file contains this qId
  let targetFile = null;
  for (const file of files) {
    if (fileContents[file].includes(`'${qId}'`) || fileContents[file].includes(`"${qId}"`)) {
      targetFile = file;
      break;
    }
  }

  if (!targetFile) {
    console.error(`ERROR: Question ${qId} not found in any vault file!`);
    continue;
  }

  const content = fileContents[targetFile];
  const range = findObjectRange(content, qId);

  if (!range) {
    console.error(`ERROR: Object range for ${qId} could not be determined in ${targetFile}`);
    continue;
  }

  // Safely format object: unquote object keys at line start only, keep strings double-quoted JSON
  const formattedObj = JSON.stringify(newQObj, null, 2)
    .replace(/^(\s*)"([a-zA-Z0-9_$]+)":/gm, '$1$2:')
    .split('\n')
    .map(line => '  ' + line)
    .join('\n');

  fileContents[targetFile] = content.slice(0, range.startIdx) + formattedObj + ',\n' + content.slice(range.endIdx).trimStart();
  replacedCount++;
}

console.log(`Successfully prepared ${replacedCount} question replacements.`);

// Write back to files
for (const [file, content] of Object.entries(fileContents)) {
  fs.writeFileSync(path.join(VAULT_DIR, file), content, 'utf8');
}

console.log('All files updated on disk.');
