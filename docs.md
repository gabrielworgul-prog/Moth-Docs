# Moth Docs - User Guide

**Version:** Beta  
**License:** Open Source  
**Platform:** Web (Browser-based)

---

## 1. Introduction

**Moth Docs** is a lightweight, open-source, web-based text editor designed for programmers. It runs entirely in the browser, requires no installation, and focuses on simplicity. It transforms plain text with simple markers into formatted HTML in real-time.

### Key Characteristics
| Feature | Description |
|---------|-------------|
| Platform | Web (Browser-based) |
| License | Open Source |
| Core Philosophy | Simplicity and speed |
| Best For | Tasks typically handled by Google Docs |

---

## 2. Getting Started

### Running Locally
Since Moth Docs is a static web application, you can run it locally without a server:

1. Create a folder named `moth-docs`
2. Save the HTML structure into `index.html`
3. Save the JavaScript logic into `script.js`
4. Open `index.html` in any modern web browser

### Hosting Options
The application can be hosted on any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Standard web servers (Apache/Nginx)

---

## 3. Features

### Instant Formatting
Moth Docs interprets specific character combinations to apply formatting automatically:

| Input Syntax | Output Result | Example |
|--------------|---------------|---------|
| `*text*` | *Italic* | `*hello*` → *hello* |
| `#text#` | **Bold** | `#world#` → **world** |

### Real-Time Processing
The editor uses a 500ms debounce delay to ensure smooth rendering without lag.

- **Privacy:** Client-side only. No data is sent to a server by default.
- **Interface:** Minimalist design with a clean sans-serif font stack.
- **Cursor Management:** Intelligent caret positioning to maintain flow during updates.

---

## 4. Technical Implementation

The core logic resides in `script.js`. The editor listens for the `input` event, sanitizes the HTML to prevent XSS attacks, and applies regex-based formatting.

### Code Snippet: Formatting Logic
```javascript
function formatText(text) { 
    let escaped = escapeHTML(text); 
    // Apply italic: *text* -> <i>text</i>
    escaped = escaped.replace(/\*(.*?)\*/g, '<i>$1</i>'); 
    // Apply bold: #text# -> <b>text</b>
    escaped = escaped.replace(/#(.*?)#/g, '<b>$1</b>'); 
    return escaped; 
}
