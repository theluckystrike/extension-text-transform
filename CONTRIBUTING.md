# Contributing to extension-text-transform

Thanks for your interest in contributing. This document covers the basics.

GETTING STARTED

1. Fork the repo and clone your fork
2. Run npm install to set up dependencies
3. Run npm run build to verify TypeScript compilation
4. Create a branch for your change

DEVELOPMENT

The source lives in src/ and compiles to dist/ using TypeScript. The entry point is src/index.ts which re-exports the TextTransform class from src/transform.ts.

To build the project run npm run build. This runs the TypeScript compiler with settings from tsconfig.json targeting ES2020 with DOM types.

WHAT TO WORK ON

- Bug fixes for existing transform methods
- New transform utilities that fit the scope of text manipulation in Chrome extensions
- Test coverage improvements
- Documentation corrections

PULL REQUESTS

- Keep changes focused on a single concern
- Include a clear description of what your PR does and why
- Make sure the project builds cleanly before submitting
- Follow the existing code style (TypeScript strict mode, static class methods)

REPORTING ISSUES

Open an issue on GitHub with a clear description of the problem. Include steps to reproduce if applicable. If you have a suggestion for a new feature, describe the use case and expected behavior.

CODE STYLE

- TypeScript with strict mode enabled
- Static methods on the TextTransform class
- JSDoc comments on public methods
- No runtime dependencies

---

Maintained by theluckystrike. Project home at zovo.one.
