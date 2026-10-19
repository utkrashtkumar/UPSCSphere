const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'data', 'pyqVault');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && !f.match(/^pyq\d{4}\.ts$/));

// Boilerplate words to remove
const stopwords = new Set([
  'with', 'reference', 'consider', 'following', 'statements', 'statement', 'which', 'above',
  'correct', 'incorrect', 'given', 'select', 'answer', 'using', 'code', 'below', 'india',
  'indian', 'upsc', 'cse', 'prelims', 'csat', 'what', 'that', 'this', 'these', 'those',
  'from', 'have', 'been', 'were', 'will', 'would', 'could', 'should', 'about', 'under',
  'into', 'than', 'more', 'most', 'only', 'both', 'neither', 'also', 'such', 'other'
]);

function getSubstantiveWords(text) {
  return text.toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !stopwords.has(w));
}

function jaccard(setA, setB) {
  if (setA.size === 0 || setB.size === 0) return 0;
  let inter = 0;
  for (const item of setA) {
    if (setB.has(item)) inter++;
  }
  const union = setA.size + setB.size - inter;
  return union > 0 ? inter / union : 0;
}

const allQuestions = [];

function extractString(text, key) {
  const keyIdx = text.indexOf(key);
  if (keyIdx === -1) return '';
  const afterKey = text.slice(keyIdx + key.length);
  const match = afterKey.match(/^\s*(["'`])((?:\\.|(?!\1)[\s\S])*?)\1/);
  return match ? match[2] : '';
}

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const blocks = content.split(/\{\s*id:\s*['"`]/).slice(1);
  for (const b of blocks) {
    const idMatch = b.match(/^([^'"`]+)['"`]/);
    if (!idMatch) continue;
    const id = idMatch[1];
    const yearMatch = id.match(/pyq-(\d{4})/);
    const year = yearMatch ? parseInt(yearMatch[1]) : 0;
    const paperMatch = id.match(/pyq-\d{4}-([a-z]+)/);
    const paper = paperMatch ? paperMatch[1] : '';

    const rawQ = extractString(b, 'question:');
    const rawExp = extractString(b, 'explanation:');

    const qWords = getSubstantiveWords(rawQ);
    const qWordSet = new Set(qWords);

    const expWords = getSubstantiveWords(rawExp);
    const expWordSet = new Set(expWords);

    allQuestions.push({
      id,
      year,
      paper,
      file,
      rawQ,
      rawExp,
      qWordSet,
      expWordSet
    });
  }
}

console.log(`Loaded ${allQuestions.length} questions for substantive similarity analysis.`);

// --- CHECK 1: INTRA-YEAR DUPLICATES ---
console.log('\n==========================================');
console.log('AUDIT 1: INTRA-YEAR DUPLICATES (Same Year)');
console.log('==========================================');
const intraDuplicates = [];

for (let y = 2015; y <= 2026; y++) {
  const yearQs = allQuestions.filter(q => q.year === y);
  for (let i = 0; i < yearQs.length; i++) {
    for (let j = i + 1; j < yearQs.length; j++) {
      const q1 = yearQs[i];
      const q2 = yearQs[j];

      const simQ = jaccard(q1.qWordSet, q2.qWordSet);
      const simExp = jaccard(q1.expWordSet, q2.expWordSet);

      if (simQ >= 0.55 || simExp >= 0.55) {
        intraDuplicates.push({
          year: y,
          id1: q1.id,
          id2: q2.id,
          file1: q1.file,
          file2: q2.file,
          simQ: (simQ * 100).toFixed(1) + '%',
          simExp: (simExp * 100).toFixed(1) + '%',
          q1Snippet: q1.rawQ.slice(0, 90).replace(/\n/g, ' '),
          q2Snippet: q2.rawQ.slice(0, 90).replace(/\n/g, ' ')
        });
      }
    }
  }
}

console.log(`Total Intra-Year Duplicate Candidates: ${intraDuplicates.length}`);
intraDuplicates.forEach((d, idx) => {
  console.log(`\n[Intra-Year #${idx+1}] Year ${d.year}: ${d.id1} (${d.file1}) vs ${d.id2} (${d.file2})`);
  console.log(`   Question Sim: ${d.simQ} | Exp Sim: ${d.simExp}`);
  console.log(`   Q1: "${d.q1Snippet}..."`);
  console.log(`   Q2: "${d.q2Snippet}..."`);
});

// --- CHECK 2: CROSS-YEAR DUPLICATES ---
console.log('\n============================================');
console.log('AUDIT 2: CROSS-YEAR DUPLICATES (Diff Years)');
console.log('============================================');
const crossDuplicates = [];

for (let i = 0; i < allQuestions.length; i++) {
  for (let j = i + 1; j < allQuestions.length; j++) {
    const q1 = allQuestions[i];
    const q2 = allQuestions[j];
    if (q1.year === q2.year) continue;

    const simQ = jaccard(q1.qWordSet, q2.qWordSet);
    const simExp = jaccard(q1.expWordSet, q2.expWordSet);

    if (simQ >= 0.60 || simExp >= 0.60) {
      crossDuplicates.push({
        year1: q1.year,
        year2: q2.year,
        id1: q1.id,
        id2: q2.id,
        file1: q1.file,
        file2: q2.file,
        simQ: (simQ * 100).toFixed(1) + '%',
        simExp: (simExp * 100).toFixed(1) + '%',
        q1Snippet: q1.rawQ.slice(0, 90).replace(/\n/g, ' '),
        q2Snippet: q2.rawQ.slice(0, 90).replace(/\n/g, ' ')
      });
    }
  }
}

console.log(`Total Cross-Year Duplicate Candidates: ${crossDuplicates.length}`);
crossDuplicates.forEach((d, idx) => {
  console.log(`\n[Cross-Year #${idx+1}] ${d.id1} (Year ${d.year1}) vs ${d.id2} (Year ${d.year2})`);
  console.log(`   Question Sim: ${d.simQ} | Exp Sim: ${d.simExp}`);
  console.log(`   Q1: "${d.q1Snippet}..."`);
  console.log(`   Q2: "${d.q2Snippet}..."`);
});

fs.writeFileSync(path.join(__dirname, 'substantive_audit_results.json'), JSON.stringify({ intraDuplicates, crossDuplicates }, null, 2));
console.log('\nFull results saved to scripts/substantive_audit_results.json');
