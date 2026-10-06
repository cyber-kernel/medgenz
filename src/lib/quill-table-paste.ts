type QuillTableEditor = {
  root: HTMLElement;
  getSelection: (focus?: boolean) => { index: number; length: number } | null;
  deleteText: (index: number, length: number, source?: string) => void;
  clipboard: {
    dangerouslyPasteHTML: (index: number, html: string, source?: string) => void;
  };
};

const installedEditors = new WeakSet<HTMLElement>();

export function normalizeQuillTableMarkup(html: string | null | undefined): string {
  if (!html) return '';

  return html
    .replace(/<(\/?)th(?=[\s>])/gi, '<$1td')
    .replace(/<\/?(?:thead|tbody|tfoot)\b[^>]*>/gi, '');
}

function normalizePastedTableHTML(html: string): string {
  const document = new DOMParser().parseFromString(html, 'text/html');

  document.querySelectorAll('table').forEach((table) => {
    const rows: Element[] = [];
    const rowGroups = new Set(['THEAD', 'TBODY', 'TFOOT']);

    Array.from(table.children).forEach((child) => {
      if (child.tagName === 'TR') rows.push(child);
      else if (rowGroups.has(child.tagName)) {
        rows.push(...Array.from(child.children).filter((row) => row.tagName === 'TR'));
      }
    });

    Array.from(table.children).forEach((child) => {
      if (child.tagName === 'TR' || rowGroups.has(child.tagName)) child.remove();
    });

    const body = document.createElement('tbody');
    rows.forEach((row) => body.appendChild(row));
    table.appendChild(body);
  });

  document.querySelectorAll('th').forEach((headerCell) => {
    const cell = document.createElement('td');
    Array.from(headerCell.attributes).forEach((attribute) => {
      cell.setAttribute(attribute.name, attribute.value);
    });
    cell.innerHTML = headerCell.innerHTML;
    headerCell.replaceWith(cell);
  });

  return document.body.innerHTML;
}

export function installQuillTablePasteHandler(editor: QuillTableEditor): void {
  if (installedEditors.has(editor.root)) return;
  installedEditors.add(editor.root);

  editor.root.addEventListener('paste', (event) => {
    const pasteEvent = event as ClipboardEvent;
    const html = pasteEvent.clipboardData?.getData('text/html');
    if (!html || !/<table\b/i.test(html)) return;

    const range = editor.getSelection(true);
    if (!range) return;

    pasteEvent.preventDefault();
    pasteEvent.stopImmediatePropagation();
    editor.deleteText(range.index, range.length, 'user');
    editor.clipboard.dangerouslyPasteHTML(range.index, normalizePastedTableHTML(html), 'user');
  }, true);
}