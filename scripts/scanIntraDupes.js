const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'data', 'pyqVault');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && !f.match(/^pyq\d{4}\.ts$/));

function extractString(text, key) {
  const keyIdx = text.indexOf(key);
  if (keyIdx === -1) return '';
  const afterKey = text.slice(keyIdx + key.length);
  const match = afterKey.match(/^\s*(["'`])((?:\\.|(?!\1)[\s\S])*?)\1/);
  return match ? match[2] : '';
}

const allQuestions = [];

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

    const subject = extractString(b, 'subject:');
    const topic = extractString(b, 'topic:');
    const subTopic = extractString(b, 'subTopic:');
    const question = extractString(b, 'question:');
    const explanation = extractString(b, 'explanation:');

    allQuestions.push({
      id,
      year,
      paper,
      file,
      subject,
      topic,
      subTopic,
      question,
      explanation
    });
  }
}

console.log(`Total questions: ${allQuestions.length}`);

// Find intra-year pairs with identical or nearly identical subTopic or topic
const potentialIntraDupes = [];

for (let y = 2015; y <= 2026; y++) {
  const yearQs = allQuestions.filter(q => q.year === y);
  for (let i = 0; i < yearQs.length; i++) {
    for (let j = i + 1; j < yearQs.length; j++) {
      const q1 = yearQs[i];
      const q2 = yearQs[j];

      // Check if subTopic identical
      const sameSubTopic = q1.subTopic && q2.subTopic && q1.subTopic.toLowerCase().trim() === q2.subTopic.toLowerCase().trim();
      
      // Check if first 40 characters of question identical
      const q1Norm = q1.question.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
      const q2Norm = q2.question.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
      const sameQPrefix = q1Norm.slice(0, 60) === q2Norm.slice(0, 60) && q1Norm.length > 30;

      // Check if explanation begins almost identically
      const exp1Norm = q1.explanation.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
      const exp2Norm = q2.explanation.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
      const sameExpPrefix = exp1Norm.slice(0, 80) === exp2Norm.slice(0, 80) && exp1Norm.length > 40;

      if (sameSubTopic || sameQPrefix || sameExpPrefix) {
        potentialIntraDupes.push({
          year: y,
          id1: q1.id,
          id2: q2.id,
          sameSubTopic,
          subTopic1: q1.subTopic,
          subTopic2: q2.subTopic,
          sameQPrefix,
          sameExpPrefix,
          q1: q1.question.slice(0, 80),
          q2: q2.question.slice(0, 80),
          exp1: q1.explanation.slice(0, 80),
          exp2: q2.explanation.slice(0, 80)
        });
      }
    }
  }
}

console.log(`Found ${potentialIntraDupes.length} potential intra-year duplicates by subTopic/prefix:`);
for (const d of potentialIntraDupes) {
  console.log(`- [${d.year}] ${d.id1} vs ${d.id2}:`);
  if (d.sameSubTopic) console.log(`   Same subTopic: "${d.subTopic1}"`);
  if (d.sameQPrefix) console.log(`   Same Q Prefix: Q1="${d.q1}" | Q2="${d.q2}"`);
  if (d.sameExpPrefix) console.log(`   Same Exp Prefix: Exp1="${d.exp1}" | Exp2="${d.exp2}"`);
}
