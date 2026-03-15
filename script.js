const editor = document.getElementById('editor');
let timeoutId;

function escapeHTML(str) {
  return str.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatText(text) {
  let escaped = escapeHTML(text);
  escaped = escaped.replace(/\*(.*?)\*/g, '<i>$1</i>');
  escaped = escaped.replace(/#(.*?)#/g, '<b>$1</b>');
  return escaped;
}

function setCaretToEnd(el) {
  el.focus();
  if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
    let range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false);
    let sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }
}

editor.addEventListener('input', () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    let text = editor.textContent;
    let formatted = formatText(text);
    editor.innerHTML = formatted;
    setCaretToEnd(editor);
  }, 500);
});
