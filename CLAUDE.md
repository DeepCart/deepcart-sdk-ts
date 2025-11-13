# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TypeScript client for DeepCart API (`@deepcart/client`) - a framework-agnostic client library that wraps the DeepCart API with typed interfaces and error handling.

**Package Strategy:**
- This package (`@deepcart/client`) - Core API client, usable in any TypeScript/JavaScript environment
- `@deepcart/react` (separate package) - React components and hooks that use @deepcart/client

## Architecture

The SDK follows a simple client-wrapper pattern:

- **src/client.ts**: Main `DeepCartClient` class that encapsulates an Axios instance with configured headers (`X-API-Key` for authentication). All API methods are instance methods that use the internal client.
- **src/types.ts**: TypeScript interfaces for configuration (`DeepCartConfig`), responses (`PingResponse`), and errors (`ApiError`).
- **src/index.ts**: Public API exports - exposes only the client class and type definitions.

Error handling is centralized in the `handleError()` private method which converts Axios errors to the `ApiError` interface format.

## Development Commands

```bash
# Build TypeScript to dist/
npm run build

# Run all tests with Jest
npm test

# Lint TypeScript files in src/
npm run lint
```

## Testing

- Test framework: Jest with ts-jest preset
- Test files: `*.test.ts` or `*.spec.ts` pattern in src/
- Tests use mocked Axios instances (see src/client.test.ts for pattern)
- Coverage excludes test files

## Build Output

- Compiled JavaScript: dist/ (CommonJS format, target ES2020)
- Type declarations: dist/*.d.ts (generated via TypeScript compiler)
- Build runs automatically before publish (prepublishOnly hook)
