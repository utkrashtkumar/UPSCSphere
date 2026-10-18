const fs = require('fs');
const path = require('path');

const RAW_DIR = path.join(__dirname, '..', 'raw_pyq_data');
const VAULT_DIR = path.join(__dirname, '..', 'data', 'pyqVault');

function sanitizeId(str) {
  return str.toLowerCase().replace(/[^a-z0-9_-]/g, '-');
}

function normalizeAnswerIndex(ans) {
  if (typeof ans === 'number' && ans >= 0 && ans <= 3) return ans;
  if (typeof ans === 'string') {
    const clean = ans.trim().toLowerCase().replace(/[\(\)\.]/g, '');
    if (clean === 'a' || clean === '1') return 0;
    if (clean === 'b' || clean === '2') return 1;
    if (clean === 'c' || clean === '3') return 2;
    if (clean === 'd' || clean === '4') return 3;
  }
  return 0;
}

function processJsonFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  try {
    const data = JSON.parse(content);
    if (!Array.isArray(data)) {
      console.warn(`File ${filePath} does not contain a JSON array.`);
      return [];
    }
    return data.map((item, idx) => ({
      id: item.id || `pyq-${item.pyqYear || 2024}-${(item.pyqPaper || 'gs').toLowerCase()}-${String(idx + 1).padStart(2, '0')}`,
      subject: item.subject || (item.pyqPaper === 'CSAT' ? 'csat_quant' : 'polity'),
      topic: item.topic || 'UPSC Prelims Question',
      subTopic: item.subTopic || '',
      question: item.question || '',
      options: item.options || ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: normalizeAnswerIndex(item.correctAnswer),
      explanation: item.explanation || 'Official UPSC answer key explanation.',
      bookReference: {
        bookName: item.bookReference?.bookName || 'UPSC Official Master Paper',
        chapter: item.bookReference?.chapter || 'General Studies Paper',
        pageNumber: item.bookReference?.pageNumber || 'Official Key',
        edition: item.bookReference?.edition || 'Standard Edition',
        keyExcerpt: item.bookReference?.keyExcerpt || ''
      },
      eliminationTip: item.eliminationTip || '',
      difficulty: item.difficulty || 'UPSC Standard',
      isPYQ: true,
      pyqYear: Number(item.pyqYear) || 2024,
      pyqPaper: item.pyqPaper === 'CSAT' ? 'CSAT' : 'GS',
      frequency: Number(item.frequency) || 5,
      tags: item.tags || [`UPSC ${item.pyqYear || 2024}`, item.pyqPaper || 'GS']
    }));
  } catch (err) {
    console.error(`Error parsing JSON file ${filePath}:`, err.message);
    return [];
  }
}

function processCsvFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/).filter(line => line.trim().length > 0);
  if (lines.length < 2) return [];

  // Simple CSV parser supporting quotes
  function parseCSVLine(line) {
    const result = [];
    let insideQuote = false;
    let entry = '';
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        insideQuote = !insideQuote;
      } else if (char === ',' && !insideQuote) {
        result.push(entry.trim());
        entry = '';
      } else {
        entry += char;
      }
    }
    result.push(entry.trim());
    return result;
  }

  const header = parseCSVLine(lines[0]).map(h => h.toLowerCase());
  const questions = [];

  for (let i = 1; i < lines.length; i++) {
    const row = parseCSVLine(lines[i]);
    if (row.length < 5) continue;

    const rowObj = {};
    header.forEach((col, idx) => {
      rowObj[col] = row[idx] || '';
    });

    const year = Number(rowObj.year || rowObj.pyqyear) || 2024;
    const paper = (rowObj.paper || rowObj.pyqpaper || 'GS').toUpperCase() === 'CSAT' ? 'CSAT' : 'GS';
    const qText = rowObj.question || rowObj.text || '';
    const optA = rowObj.option_a || rowObj.a || '';
    const optB = rowObj.option_b || rowObj.b || '';
    const optC = rowObj.option_c || rowObj.c || '';
    const optD = rowObj.option_d || rowObj.d || '';
    const ans = normalizeAnswerIndex(rowObj.correct_answer || rowObj.answer || 0);

    questions.push({
      id: `pyq-${year}-${paper.toLowerCase()}-${String(i).padStart(2, '0')}`,
      subject: rowObj.subject || (paper === 'CSAT' ? 'csat_quant' : 'polity'),
      topic: rowObj.topic || 'UPSC Official Question',
      subTopic: rowObj.subtopic || '',
      question: qText,
      options: [optA, optB, optC, optD],
      correctAnswer: ans,
      explanation: rowObj.explanation || 'Official UPSC answer explanation.',
      bookReference: {
        bookName: rowObj.book_name || 'Standard Reference Book',
        chapter: rowObj.chapter || 'Relevant Chapter',
        pageNumber: rowObj.page_number || 'Page Reference'
      },
      eliminationTip: rowObj.elimination_tip || '',
      difficulty: 'UPSC Standard',
      isPYQ: true,
      pyqYear: year,
      pyqPaper: paper,
      tags: [`UPSC ${year}`, paper]
    });
  }

  return questions;
}

function runImport() {
  if (!fs.existsSync(RAW_DIR)) {
    console.log(`Directory ${RAW_DIR} does not exist.`);
    return;
  }

  const files = fs.readdirSync(RAW_DIR);
  const dataFiles = files.filter(f => f.endsWith('.json') || f.endsWith('.csv'));

  if (dataFiles.length === 0) {
    console.log(`No .json or .csv files found in ${RAW_DIR}. Place your files there and run this script.`);
    return;
  }

  console.log(`Found ${dataFiles.length} file(s) to process:`, dataFiles);

  const importedByYear = {};

  for (const file of dataFiles) {
    const fullPath = path.join(RAW_DIR, file);
    let items = [];
    if (file.endsWith('.json')) {
      items = processJsonFile(fullPath);
    } else if (file.endsWith('.csv')) {
      items = processCsvFile(fullPath);
    }

    console.log(`Read ${items.length} questions from ${file}`);

    for (const q of items) {
      const y = q.pyqYear;
      if (!importedByYear[y]) importedByYear[y] = [];
      importedByYear[y].push(q);
    }
  }

  // Update pyqVault files
  for (const [yearStr, questions] of Object.entries(importedByYear)) {
    const yearFile = path.join(VAULT_DIR, `pyq${yearStr}.ts`);
    if (!fs.existsSync(yearFile)) {
      console.warn(`Year file pyq${yearStr}.ts does not exist, creating new.`);
    }

    // Read existing questions in file if exists safely without require()
    let existingQuestions = [];
    if (fs.existsSync(yearFile)) {
      try {
        const rawTs = fs.readFileSync(yearFile, 'utf8');
        const match = rawTs.match(/export const pyq\d+:\s*Question\[\]\s*=\s*(\[[\s\S]*\]);/);
        if (match) {
          // evaluate array safely in isolated context
          const vm = require('vm');
          existingQuestions = vm.runInNewContext(match[1]);
        }
      } catch (err) {
        console.warn(`Could not parse existing ${yearFile}, will rewrite:`, err.message);
      }
    }

    // Merge without duplicates based on id
    const existingMap = new Map(existingQuestions.map(q => [q.id, q]));
    for (const q of questions) {
      existingMap.set(q.id, q);
    }

    const merged = Array.from(existingMap.values());

    const fileContent = `import { Question } from '@/lib/types';\n\nexport const pyq${yearStr}: Question[] = ${JSON.stringify(merged, null, 2)};\n`;
    fs.writeFileSync(yearFile, fileContent, 'utf8');
    console.log(`Updated pyq${yearStr}.ts with ${merged.length} total questions (added/updated ${questions.length}).`);
  }

  console.log('Import completed successfully!');
}

if (require.main === module) {
  runImport();
}

module.exports = { runImport };
