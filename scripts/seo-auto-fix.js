// seo-auto-fix.js
// Simple script that reads the LibreCrawl CSV export (librecrawl_latest.csv)
// and updates Next.js page components with missing SEO tags.
// It also generates a brief report (seo_fixes_report.md) in the project root.

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const projectRoot = __dirname.replace(/\\scripts$/, '');
const csvPath = path.join(projectRoot, 'librecrawl_latest.csv');
const reportPath = path.join(projectRoot, 'seo_fixes_report.md');

if (!fs.existsSync(csvPath)) {
  console.error('CSV file not found at', csvPath);
  process.exit(1);
}

// Helper to write a report entry
function addReportLine(lines, filePath, description) {
  lines.push(`- **${filePath}**: ${description}`);
}

(async () => {
  const reportLines = [];
  const rows = [];
  // Load CSV rows
  await new Promise((resolve, reject) => {
    fs.createReadStream(csvPath)
      .pipe(csv())
      .on('data', (data) => rows.push(data))
      .on('end', resolve)
      .on('error', reject);
  });

  // For each row, we expect a column "url" and "title", "meta_description", "canonical"
  for (const row of rows) {
    const url = row['url'] || row['URL'];
    if (!url) continue;
    // Derive a relative page file from the URL path (assuming pages are in app/ folder)
    try {
      const urlObj = new URL(url);
      let relPath = urlObj.pathname;
      if (relPath.endsWith('/')) relPath = relPath + 'page'; // Next.js app router uses page.js files
      const pageFile = path.join(projectRoot, 'app', relPath, 'page.tsx');
      if (!fs.existsSync(pageFile)) continue;

      let content = fs.readFileSync(pageFile, 'utf8');
      let modified = false;

      // Insert or replace <title>
      const titleTag = `<title>${row['title'] || 'Untitled'}</title>`;
      if (/\<title\>.*?<\/title\>/i.test(content)) {
        content = content.replace(/\<title\>.*?<\/title\>/i, titleTag);
        addReportLine(reportLines, pageFile, 'Updated <title>');
        modified = true;
      } else if (/export const metadata = \{[^}]*\}/s.test(content)) {
        // We'll add title inside the metadata export later
      } else {
        // prepend a metadata export if not present
        const metaExport = `export const metadata = {\n  title: '${row['title'] || 'Untitled'}',\n  description: '${row['meta_description'] || ''}',\n  alternates: {\n    canonical: '${row['canonical'] || url}'\n  }\n};\n`;
        content = metaExport + '\n' + content;
        addReportLine(reportLines, pageFile, 'Added metadata export with title/description/canonical');
        modified = true;
      }

      // Ensure an <h1> exists at the top of the component
      if (!/\<h1\>.*?<\/h1\>/i.test(content)) {
        // Insert after the opening function component line
        const lines = content.split('\n');
        const insertIdx = lines.findIndex(l => /function\s+\w+\s*\(/.test(l) || /const\s+\w+\s*=\s*\(/.test(l));
        if (insertIdx >= 0) {
          lines.splice(insertIdx + 1, 0, `  <h1>${row['title'] || 'Untitled'}</h1>`);
          content = lines.join('\n');
          addReportLine(reportLines, pageFile, 'Added <h1>');
          modified = true;
        }
      }

      if (modified) {
        fs.writeFileSync(pageFile, content, 'utf8');
      }
    } catch (e) {
      // ignore malformed URLs or missing files
    }
  }

  // Write report
  const reportHeader = '# SEO Auto‑Fix Report\nGenerated on ' + new Date().toISOString() + '\n\n';
  fs.writeFileSync(reportPath, reportHeader + reportLines.join('\n'), 'utf8');
  console.log('SEO auto‑fix completed. Report written to', reportPath);
})();
