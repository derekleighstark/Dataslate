// A simple and secure markdown parser to convert specific syntax to HTML.
export const parseMarkdown = (text: string): string => {
  if (!text) return '';

  // 1. Escape HTML to prevent any script injection from the input.
  let html = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // 2. Process Markdown syntax. Order is important here.
  // Headers (must be at the start of a line)
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Bold (**text**) - using a tempered greedy token to handle multiple bolds on one line
  html = html.replace(/\*\*(?=\S)([\s\S]*?\S)\*\*/g, '<strong>$1</strong>');

  // Italics (*text*)
  html = html.replace(/\*(?=\S)([\s\S]*?\S)\*/g, '<em>$1</em>');
  
  // Lists (simple, one level)
  // First, wrap each list item line with <li> tags
  html = html.replace(/^- (.*$)/gim, '<li>$1</li>');
  // Then, wrap consecutive <li> blocks with <ul> tags
  html = html.replace(/((?:<li>.*?<\/li>\s*)+)/g, '<ul>$1</ul>');

  return html;
};