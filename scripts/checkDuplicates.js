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
    let q = match[2].trim().replace(/\(UPSC[^\)]*\)/gi, '').replace(/\s+/g, ' ').trim();
    q = q.replace(/^read the following passage[^:]*:\s*/i, '');
    q = q.replace(/^consider the following statements[^:]*:\s*/i, '');
    q = q.replace(/^with reference to[^,]*,?\s*consider the following statements[^:]*:\s*/i, '');
    
    const opts = match[3].replace(/\s+/g, ' ').trim();
    const fullSignature = (q + ' || ' + opts).toLowerCase().replace(/[^a-z0-9]/g, '');
    const sigKey = fullSignature.substring(0, 80);
    questions.push({ file, id, q, opts, sigKey });
  }
}
console.log(`Total questions captured: ${questions.length} / 2160`);

const map = {};
for (const item of questions) {
  if (!map[item.sigKey]) map[item.sigKey] = [];
  map[item.sigKey].push(item);
}

const dupes = Object.values(map).filter(arr => arr.length > 1);
console.log(`Total duplicate groups: ${dupes.length}`);

const report = dupes.map((group, idx) => ({
  index: idx + 1,
  snippet: group[0].q.substring(0, 100),
  occurrences: group.map(g => ({ file: g.file, id: g.id }))
}));

fs.writeFileSync(path.join(__dirname, 'duplicate_report.json'), JSON.stringify(report, null, 2));
console.log('Saved duplicate report to scripts/duplicate_report.json');
