const path = require('path');
const fs = require('fs');

const VAULT_DIR = path.join(__dirname, '..', 'data', 'pyqVault');
const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];

console.log('=== UPSC VAULT INTEGRITY AUDIT ===');
let grandTotal = 0;
let grandGS = 0;
let grandCSAT = 0;

for (const yr of years) {
  const filePath = path.join(VAULT_DIR, `pyq${yr}.ts`);
  let content = fs.readFileSync(filePath, 'utf8');

  // If this year has modular subfiles
  const subFileGs1 = path.join(VAULT_DIR, `pyq${yr}_gs_1.ts`);
  if (fs.existsSync(subFileGs1)) {
    const gs1 = fs.readFileSync(path.join(VAULT_DIR, `pyq${yr}_gs_1.ts`), 'utf8');
    const gs2 = fs.readFileSync(path.join(VAULT_DIR, `pyq${yr}_gs_2.ts`), 'utf8');
    const csat1 = fs.readFileSync(path.join(VAULT_DIR, `pyq${yr}_csat_1.ts`), 'utf8');
    const csat2 = fs.readFileSync(path.join(VAULT_DIR, `pyq${yr}_csat_2.ts`), 'utf8');
    content = gs1 + '\n' + gs2 + '\n' + csat1 + '\n' + csat2;
  }

  const gsMatches = content.match(/pyqPaper:\s*['"]GS['"]/g) || [];
  const csatMatches = content.match(/pyqPaper:\s*['"]CSAT['"]/g) || [];
  const total = gsMatches.length + csatMatches.length;

  console.log(`Year ${yr}: ${total.toString().padStart(3, ' ')} questions | GS-1: ${gsMatches.length.toString().padStart(3, ' ')} | CSAT: ${csatMatches.length.toString().padStart(2, ' ')}`);

  grandTotal += total;
  grandGS += gsMatches.length;
  grandCSAT += csatMatches.length;
}

console.log('-----------------------------------');
console.log(`GRAND TOTAL: ${grandTotal} Questions across 12 Years`);
console.log(`Total GS-1:   ${grandGS}`);
console.log(`Total CSAT:   ${grandCSAT}`);
console.log('===================================');
