const fs = require('fs');
let content = fs.readFileSync('s:/UPSC/data/dailyCAData.ts', 'utf8');

// Add bookReference to any question object that has sourcePublisher but no bookReference
// Pattern: We look for object blocks starting with { and ending with }
// and add bookReference where missing

// Strategy: Use a regex to find the specific single-line pattern:
// generatedAt: 'X', editionDate: 'Y', sourcePublisher: 'Z'
// and add bookReference after it

// This regex replaces:
//   sourcePublisher: 'Z'\n  },
// with:
//   sourcePublisher: 'Z',\n    bookReference: { bookName: 'Z', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },\n  },

// Match pattern: a line with sourcePublisher at end (may or may not have comma), followed by \n  },
content = content.replace(
  /    generatedAt: '([^']+)', editionDate: '[^']+', sourcePublisher: '([^']+)',?\n    bookReference: \{ bookName: '[^']+', chapter: '[^']+', pageNumber: '[^']+' \},\n  \}/g,
  "    generatedAt: '$1', editionDate: '___', sourcePublisher: '$2',\n    bookReference: { bookName: '$2', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },\n  }"
);

// More targeted: for lines that have exactly:
// "    generatedAt: 'X', editionDate: 'Y', sourcePublisher: 'Z'\n  },"
// (no bookReference already), add it

// First: normalize any duplicate bookReferences (remove duplicates)
// Then add bookReference to all that are still missing

// Reset and use a line-by-line approach
let lines = content.split('\n');

// Find question blocks in new section (Aug 21+)
// Each question object spans from line with "id: 'ca-2026-08-2[1-4]" to the closing "},"
// For each block, check if it has bookReference, if not add it

let result = [];
let i = 0;
let inNewSection = false;

while (i < lines.length) {
  const line = lines[i];
  
  if (line.includes("id: 'ca-2026-08-21") || line.includes("id: 'ca-2026-08-22") ||
      line.includes("id: 'ca-2026-08-23") || line.includes("id: 'ca-2026-08-24") ||
      line.includes('dailyCA_2026_08_21_All') || line.includes('AUG 21')) {
    inNewSection = true;
  }
  
  if (!inNewSection) {
    result.push(line);
    i++;
    continue;
  }
  
  // Check if this line starts a new question block (has id: 'ca-2026-08-2X)
  if (/id: 'ca-2026-08-2[1-4]/.test(line)) {
    // Collect all lines of this question block
    const blockLines = [line];
    let j = i + 1;
    
    // Collect until we find the closing "},"  or "};" of this question
    let depth = 1; // We're inside the {
    let priorLine = line;
    
    // Look ahead to find the end of this question object
    while (j < lines.length) {
      const nextLine = lines[j];
      blockLines.push(nextLine);
      j++;
      
      // Check if this is the closing of the question object
      if (/^\s*\},?\s*$/.test(nextLine) && depth === 1) {
        break;
      }
      if (nextLine.includes('{')) depth++;
      if (nextLine.includes('}')) depth--;
    }
    
    // Check if block has bookReference
    const blockContent = blockLines.join('\n');
    if (!blockContent.includes('bookReference:')) {
      // Find the sourcePublisher line within the block and add bookReference after it
      const fixedBlock = [];
      for (let k = 0; k < blockLines.length; k++) {
        const bl = blockLines[k];
        fixedBlock.push(bl);
        if (/sourcePublisher:\s*'([^']+)'/.test(bl) && !blockLines.slice(k+1, k+3).join('').includes('bookReference:')) {
          const spMatch = bl.match(/sourcePublisher:\s*'([^']+)'/);
          const sp = spMatch ? spMatch[1] : 'PIB Delhi';
          const indent = bl.match(/^(\s*)/)[1];
          // Make sure the sourcePublisher line ends with a comma
          const fixedBl = bl.replace(/(sourcePublisher:\s*'[^']+')(\s*)$/, '$1,$2');
          fixedBlock[fixedBlock.length - 1] = fixedBl;
          fixedBlock.push(indent + "bookReference: { bookName: '" + sp.replace(/'/g, "\\'") + "', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },");
        }
      }
      result.push(...fixedBlock);
    } else {
      result.push(...blockLines);
    }
    
    i = j;
    continue;
  }
  
  result.push(line);
  i++;
}

fs.writeFileSync('s:/UPSC/data/dailyCAData.ts', result.join('\n'), 'utf8');
console.log('Done. Total lines: ' + result.length);
