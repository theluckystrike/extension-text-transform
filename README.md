# extension-text-transform

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-green.svg)]()

A TypeScript library for Chrome extensions (Manifest V3) that performs find-and-replace, regex replacement, case conversion, and text statistics on live page content. Zero runtime dependencies. Works directly with the DOM using TreeWalker for efficient text node traversal.

INSTALL

```bash
npm install extension-text-transform
```

USAGE

Import the TextTransform class and call its static methods from a content script or extension page.

```typescript
import { TextTransform } from 'extension-text-transform';
```

FIND AND REPLACE

Replace all occurrences of a string in visible page text. Returns the number of text nodes modified. Case insensitive by default.

```typescript
const nodesChanged = TextTransform.findAndReplace('old text', 'new text');
const nodesChanged = TextTransform.findAndReplace('old text', 'new text', true); // case sensitive
```

REGEX REPLACE

Replace text using a regular expression pattern. Accepts standard RegExp flags. Defaults to global case-insensitive matching.

```typescript
const nodesChanged = TextTransform.regexReplace('\\d{4}', '****');
const nodesChanged = TextTransform.regexReplace('hello', 'goodbye', 'g'); // custom flags
```

CASE CONVERSION

Convert the current text selection to upper, lower, title, or sentence case. If nothing is selected, nothing happens.

```typescript
TextTransform.convertCase('upper');
TextTransform.convertCase('lower');
TextTransform.convertCase('title');
TextTransform.convertCase('sentence');
```

TEXT STATISTICS

Get character count, word count, sentence count, paragraph count, and estimated reading time for the entire page.

```typescript
const stats = TextTransform.getStats();
// { characters: 12345, words: 2100, sentences: 98, paragraphs: 24, readingTime: '11 min' }
```

COUNT OCCURRENCES

Count how many times a string appears in the page text. Case insensitive by default.

```typescript
const hits = TextTransform.count('search term');
const hits = TextTransform.count('search term', true); // case sensitive
```

API REFERENCE

TextTransform.findAndReplace(find, replace, caseSensitive?)
- find (string) the text to search for
- replace (string) the replacement text
- caseSensitive (boolean, default false) whether matching is case sensitive
- Returns number of text nodes modified

TextTransform.regexReplace(pattern, replacement, flags?)
- pattern (string) a regular expression pattern
- replacement (string) the replacement string
- flags (string, default 'gi') RegExp flags
- Returns number of text nodes modified

TextTransform.convertCase(mode)
- mode ('upper' | 'lower' | 'title' | 'sentence') the target case
- Operates on the current text selection via execCommand

TextTransform.getStats()
- Returns { characters, words, sentences, paragraphs, readingTime }

TextTransform.count(search, caseSensitive?)
- search (string) the text to count
- caseSensitive (boolean, default false) whether matching is case sensitive
- Returns number of occurrences

BUILD

```bash
npm install
npm run build
```

Output goes to dist/ with type declarations and source maps.

LICENSE

MIT. See LICENSE file for details.

---

Built by theluckystrike. More projects at zovo.one.
