const fs = require('fs');
const res = JSON.parse(fs.readFileSync('scripts/substantive_audit_results.json', 'utf8'));

// Only pairs where Question similarity >= 70% or Exp similarity >= 70%
const highCross = res.crossDuplicates.filter(d => parseFloat(d.simQ) >= 70 || parseFloat(d.simExp) >= 70);

let out = `Total high similarity cross-year pairs: ${highCross.length}\n\n`;

highCross.forEach((d, i) => {
  out += `[#${i+1}] ${d.id1} (${d.year1}) vs ${d.id2} (${d.year2}) - Q: ${d.simQ}, Exp: ${d.simExp}\n`;
  out += `   Q1: ${d.q1Snippet.slice(0, 100)}\n`;
  out += `   Q2: ${d.q2Snippet.slice(0, 100)}\n\n`;
});

fs.writeFileSync('scripts/high_cross_pairs.txt', out);
console.log('Saved to scripts/high_cross_pairs.txt');
