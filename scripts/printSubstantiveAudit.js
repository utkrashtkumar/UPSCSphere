const fs = require('fs');
const res = JSON.parse(fs.readFileSync('scripts/substantive_audit_results.json', 'utf8'));
console.log('Intra-Year Count:', res.intraDuplicates.length);
console.log('Cross-Year Count:', res.crossDuplicates.length);

if (res.intraDuplicates.length > 0) {
  console.log('\n=== INTRA-YEAR DUPLICATES ===');
  res.intraDuplicates.forEach((d, i) => {
    console.log(`[Intra #${i+1}] Year ${d.year}: ${d.id1} vs ${d.id2} (Q: ${d.simQ}, Exp: ${d.simExp})`);
    console.log(`   Q1: ${d.q1Snippet}`);
    console.log(`   Q2: ${d.q2Snippet}`);
  });
}
