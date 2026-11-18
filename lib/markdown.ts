const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const inline = (value: string) =>
  escapeHtml(value)
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[\s(])\*([^*\n]+)\*(?=[\s.,;:!?)]|$)/g, '$1<em>$2</em>');

const questionHeading = (value: string) => {
  const heading = value.trim().replace(/[?.!]+$/, '');
  const lower = heading.charAt(0).toLowerCase() + heading.slice(1);

  if (/^what to\s+/i.test(heading)) {
    return heading.replace(/^what to\s+/i, 'What should you ').replace(/[?.!]+$/, '?');
  }
  if (/^how to\s+/i.test(heading)) {
    return heading.replace(/^how to\s+/i, 'How do you ').replace(/[?.!]+$/, '?');
  }
  if (/^what the results mean$/i.test(heading)) return 'What do the results mean?';
  if (/^what you save$/i.test(heading)) return 'What can smart devices save?';
  if (/^what is inside matters$/i.test(heading)) return 'Why do the components inside a power bank matter?';
  if (/^what we fit$/i.test(heading)) return 'Which screen parts does the workshop fit?';
  if (/^(what|which|why|when|where|who|how|can|could|does|do|is|are|should|will)\b/i.test(heading)) {
    return `${heading}?`;
  }
  if (/\s+vs\.?\s+/i.test(heading)) {
    const [left, right] = heading.split(/\s+vs\.?\s+/i);
    return `How does ${left} compare with ${right}?`;
  }
  if (/^(start|check|use|avoid|choose|compare|plan|protect|match|test|store|keep|remove|turn|add|look|read|measure|pick|buy|consider|tell|try|switch|back up)\b/i.test(heading)) {
    return `How do you ${lower}?`;
  }

  return `What should you know about ${lower}?`;
};

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
      // Blog pages render their own H1, so stored section headings start at H2.
      // Older articles use ###; normalize that level rather than skipping H2.
      const level = Math.max(2, heading[1].length - 1);
      output.push(`<h${level}>${inline(questionHeading(heading[2]))}</h${level}>`);
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
