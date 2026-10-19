function findObjectRange(content, qId) {
  // Find id: 'qId' or id: "qId"
  const idIdx = content.search(new RegExp(`id:\\s*['"]${qId}['"]`));
  if (idIdx === -1) return null;

  // Find the opening '{' before idIdx
  const startIdx = content.lastIndexOf('{', idIdx);
  if (startIdx === -1) return null;

  // Brace counter with string literal awareness
  let depth = 0;
  let inString = null;
  let escape = false;

  for (let i = startIdx; i < content.length; i++) {
    const char = content[i];

    if (inString) {
      if (escape) {
        escape = false;
      } else if (char === '\\') {
        escape = true;
      } else if (char === inString) {
        inString = null;
      }
    } else {
      if (char === "'" || char === '"' || char === '`') {
        inString = char;
      } else if (char === '{') {
        depth++;
      } else if (char === '}') {
        depth--;
        if (depth === 0) {
          // Check if there is a trailing comma
          let endIdx = i + 1;
          while (endIdx < content.length && (content[endIdx] === ' ' || content[endIdx] === '\t')) {
            endIdx++;
          }
          if (content[endIdx] === ',') {
            endIdx++;
          }
          return { startIdx, endIdx };
        }
      }
    }
  }
  return null;
}

module.exports = { findObjectRange };
