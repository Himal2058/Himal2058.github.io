const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const inline = (value: string) =>
  escapeHtml(value)
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[\s(])\*([^*\n]+)\*(?=[\s.,;:!?)]|$)/g, '$1<em>$2</em>');

/**
 * Minimal Markdown renderer for the blog content stored in `data/blogs.ts`.
 * Supports headings (##–######), unordered/ordered lists, blockquotes,
 * horizontal rules, bold, italic and links. Input is escaped before
 * conversion so article text can never inject markup.
 */
export function renderMarkdownLite(source: string): string {
  const lines = source.replace(/\r\n/g, '\n').split('\n');
  const output: string[] = [];

  let list: { type: 'ul' | 'ol'; items: string[] } | null = null;
  let paragraph: string[] = [];

  const flushList = () => {
    if (!list) return;
    const items = list.items.map(item => `<li>${inline(item)}</li>`).join('');
    output.push(`<${list.type}>${items}</${list.type}>`);
    list = null;
  };

  const flushParagraph = () => {
    if (!paragraph.length) return;
    output.push(`<p>${inline(paragraph.join(' '))}</p>`);
    paragraph = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushList();
      flushParagraph();
      continue;
    }

    if (/^-{3,}$/.test(line)) {
      flushList();
      flushParagraph();
      output.push('<hr />');
      continue;
    }

    const heading = /^(#{2,6})\s+(.+)$/.exec(line);
    if (heading) {
      flushList();
      flushParagraph();
      const level = heading[1].length;
      output.push(`<h${level}>${inline(heading[2])}</h${level}>`);
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      flushParagraph();
      if (!list || list.type !== 'ul') {
        flushList();
        list = { type: 'ul', items: [] };
      }
      list.items.push(line.replace(/^[-*]\s+/, ''));
      continue;
    }

    if (/^\d+[.)]\s+/.test(line)) {
      flushParagraph();
      if (!list || list.type !== 'ol') {
        flushList();
        list = { type: 'ol', items: [] };
      }
      list.items.push(line.replace(/^\d+[.)]\s+/, ''));
      continue;
    }

    if (line.startsWith('>')) {
      flushList();
      flushParagraph();
      output.push(`<blockquote>${inline(line.replace(/^>\s?/, ''))}</blockquote>`);
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushList();
  flushParagraph();

  return output.join('\n');
}
