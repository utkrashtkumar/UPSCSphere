const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'data', 'pyqVault');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && !f.match(/^pyq\d{4}\.ts$/));

const questions = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const regex = /id:\s*['"`]([^'"`]+)['"`][\s\S]*?question:\s*['"`]([\s\S]*?)['"`]\s*,\s*options:\s*\[([\s\S]*?)\]\s*,\s*correctAnswer/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const id = match[1];
    let rawQ = match[2].trim();
    // Normalize question
    let cleanQ = rawQ.replace(/\(UPSC[^\)]*\)/gi, '').replace(/\s+/g, ' ').trim();
    // remove leading intro
    let body = cleanQ
      .replace(/^read the following passage[^:]*:\s*/i, '')
      .replace(/^consider the following statements?[^:]*:\s*/i, '')
      .replace(/^consider the following statements? and assumptions?[^:]*:\s*(statement:\s*)?/i, '')
      .replace(/^with reference to[^,]*,?\s*consider the following statements[^:]*:\s*/i, '')
      .replace(/^which of the following[^:]*:\s*/i, '')
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '');

    const opts = match[3].replace(/\s+/g, ' ').trim();
    questions.push({ file, id, rawQ, cleanQ, body: body.slice(0, 60), opts });
  }
}

// Group by body
const bodyMap = {};
for (const q of questions) {
  if (q.body.length < 15) continue; // too short to identify
  if (!bodyMap[q.body]) bodyMap[q.body] = [];
  bodyMap[q.body].push(q);
}

const dupes = Object.values(bodyMap).filter(arr => arr.length > 1);
console.log(`Groups matching question body (loose match): ${dupes.length}`);
dupes.forEach((group, idx) => {
  const ids = group.map(g => `${g.id} [${g.file}]`);
  console.log(`[${idx+1}] ${group[0].cleanQ.slice(0, 60)}...`);
  console.log(`    -> ${ids.join(' , ')}`);
});
