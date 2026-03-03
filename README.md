# extension-text-transform — Text Transformation Utilities

[![npm](https://img.shields.io/npm/v/extension-text-transform.svg)](https://www.npmjs.com/package/extension-text-transform)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-green.svg)]()

> **Built by [Zovo](https://zovo.one)** — text utilities across 18+ Chrome extensions

**Case conversion, slugification, trimming, and encoding** utilities for Chrome extensions. Zero runtime dependencies.

## 📦 Install

```bash
npm install extension-text-transform
```

## 🚀 Quick Start

```typescript
import { 
    camelCase, snakeCase, kebabCase, 
    slugify, trim, truncate,
    encodeHTML, decodeHTML 
} from 'extension-text-transform';

// Case conversion
camelCase('hello world');     // 'helloWorld'
snakeCase('hello world');     // 'hello_world'
kebabCase('hello world');     // 'hello-world'

// Slugify
slugify('Hello World! 2024'); // 'hello-world-2024'

// Truncate
truncate('Hello World', 8);   // 'Hello W...'

// HTML encoding
encodeHTML('<div>"test"</div>'); // '&lt;div&gt;&quot;test&quot;&lt;/div&gt;'
```

## ✨ Features

### Case Conversion

```typescript
import { camelCase, snakeCase, kebabCase, pascalCase, constantCase } from 'extension-text-transform';

camelCase('hello world');     // 'helloWorld'
pascalCase('hello world');    // 'HelloWorld'
snakeCase('hello world');     // 'hello_world'
kebabCase('hello world');     // 'hello-world'
constantCase('hello world');  // 'HELLO_WORLD'
```

### Text Processing

```typescript
import { slugify, truncate, trim, stripTags } from 'extension-text-transform';

slugify('Hello World! 2024');       // 'hello-world-2024'
truncate('Hello World', 8);          // 'Hello W...'
trim('  hello  ');                   // 'hello'
stripTags('<p>Hello</p>');           // 'Hello'
```

### Encoding/Decoding

```typescript
import { encodeHTML, decodeHTML, encodeURI, decodeURI } from 'extension-text-transform';

encodeHTML('<div>"test"</div>');     // '&lt;div&gt;&quot;test&quot;&lt;/div&gt;'
decodeHTML('&lt;div&gt;');            // '<div>'
encodeURI('hello world');             // 'hello%20world'
```

### Number Formatting

```typescript
import { formatNumber, ordinal, abbreviate } from 'extension-text-transform';

formatNumber(1234567);    // '1,234,567'
ordinal(21);             // '21st'
abbreviate(1500);        // '1.5k'
```

## API Reference

### Case Functions

| Function | Input | Output |
|----------|-------|--------|
| `camelCase` | `'hello world'` | `'helloWorld'` |
| `pascalCase` | `'hello world'` | `'HelloWorld'` |
| `snakeCase` | `'hello world'` | `'hello_world'` |
| `kebabCase` | `'hello world'` | `'hello-world'` |
| `constantCase` | `'hello world'` | `'HELLO_WORLD'` |

### Text Functions

| Function | Description |
|----------|-------------|
| `slugify(text)` | URL-safe slug |
| `truncate(text, len)` | Truncate with ellipsis |
| `trim(text)` | Remove whitespace |
| `stripTags(text)` | Remove HTML tags |

## 📄 License

MIT — [Zovo](https://zovo.one)
