# extension-text-transform — Text Transformation
> **Built by [Zovo](https://zovo.one)** | `npm i extension-text-transform`

Find/replace, regex transform, case conversion, page stats, and occurrence counting.

```typescript
import { TextTransform } from 'extension-text-transform';
TextTransform.findAndReplace('old', 'new');
TextTransform.regexReplace('\\d+', '#');
TextTransform.convertCase('title');
const stats = TextTransform.getStats();
```
MIT License
