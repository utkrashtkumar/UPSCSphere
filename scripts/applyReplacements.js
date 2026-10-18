const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'data', 'pyqVault');

function replaceQuestionsInVault(replacementsMap) {
  let replacedCount = 0;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && !f.match(/^pyq\d{4}\.ts$/));

  for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    for (const [id, newQuestion] of Object.entries(replacementsMap)) {
      const matchId = content.match(new RegExp(`id:\\s*['"]${id}['"]`));
      if (!matchId) continue;
      const idIdx = matchId.index;

      const blockStart = content.lastIndexOf('{', idIdx);
      if (blockStart === -1) continue;

      let depth = 0;
      let blockEnd = -1;
      for (let i = blockStart; i < content.length; i++) {
        if (content[i] === '{') depth++;
        else if (content[i] === '}') {
          depth--;
          if (depth === 0) {
            blockEnd = i + 1;
            if (content[blockEnd] === ',') blockEnd++;
            break;
          }
        }
      }

      if (blockEnd !== -1) {
        // Format new question as idiomatic TypeScript code
        function formatVal(v, ind) {
          if (v === null || v === undefined) return 'null';
          if (typeof v === 'number' || typeof v === 'boolean') return String(v);
          if (typeof v === 'string') {
            return JSON.stringify(v); // safely escapes newlines and quotes
          }
          if (Array.isArray(v)) {
            if (v.length === 0) return '[]';
            const items = v.map(item => ind + '  ' + formatVal(item, ind + '  ')).join(',\n');
            return '[\n' + items + '\n' + ind + ']';
          }
          if (typeof v === 'object') {
            const keys = Object.keys(v);
            const props = keys.map(k => {
              const safeKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : JSON.stringify(k);
              return `${ind}  ${safeKey}: ${formatVal(v[k], ind + '  ')}`;
            }).join(',\n');
            return '{\n' + props + '\n' + ind + '}';
          }
          return String(v);
        }

        const formattedBlock = '  ' + formatVal(newQuestion, '  ') + ',';

        content = content.slice(0, blockStart) + formattedBlock + content.slice(blockEnd);
        replacedCount++;
        modified = true;
        console.log(`Replaced ${id} in ${file}`);
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }

  console.log(`Successfully replaced ${replacedCount} questions.`);
  return replacedCount;
}

module.exports = { replaceQuestionsInVault };
