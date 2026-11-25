const fs = require('fs');
const path = require('path');

// Helper to recursively get all .tsx/.jsx/.js files in the app directory
function getPageFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip node_modules, .next, public, etc.
      if (['node_modules', '.next', 'public', 'out', '.git', 'design-system', 'supabase', 'wordpress-blueprint'].includes(entry.name)) continue;
      files.push(...getPageFiles(fullPath));
    } else if (entry.isFile() && /\.(tsx?|jsx?)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

function hasH1(content) {
  return /<h1[\s>]/i.test(content);
}

function insertH1(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (hasH1(content)) return false;

  // Find the first return statement of the main component
  const returnIdx = content.search(/return\s*\(/i);
  if (returnIdx === -1) return false;

  // Insert <h1> after the opening parenthesis of return
  const before = content.slice(0, returnIdx);
  const after = content.slice(returnIdx);
  const h1Text = path.basename(path.dirname(filePath)).replace(/[-_]/g, ' ');
  const h1Tag = `<h1>${h1Text.charAt(0).toUpperCase() + h1Text.slice(1)}</h1>`;
  const newContent = before + after.replace(/return\s*\(/, match => `${match}\n        ${h1Tag}\n`);
  fs.writeFileSync(filePath, newContent, 'utf8');
  return true;
}

function main() {
  const appRoot = path.resolve(__dirname, '..', 'app');
  const files = getPageFiles(appRoot);
  let updated = 0;
  for (const file of files) {
    if (insertH1(file)) updated++;
  }
  console.log(`Added <h1> to ${updated} page files.`);
}

main();
