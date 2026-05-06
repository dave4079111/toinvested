# AGENTS.md

## Cursor Cloud specific instructions

### Overview
**toinvested** is a minimal Next.js 14 (App Router) API-only application that generates real estate landing pages using OpenAI's GPT-4o-mini model. It has a single API endpoint at `POST /api/generate-site`.

### Running the dev server
```
npm run dev
```
The server starts on `http://localhost:3000`. There are no frontend pages — only the API route exists.

### Required secrets
- `OPENAI_API_KEY` — required for the API endpoint to function and for `next build` to succeed (the OpenAI client is initialized at module scope, so the key must be present even at build time).

### Key caveats
- **No lint or test scripts are configured.** The `package.json` only has `dev`, `build`, and `start` scripts. TypeScript type-checking can be run with `npx tsc --noEmit`.
- **`next build` requires `OPENAI_API_KEY`** — the OpenAI client is instantiated at module scope in `app/api/generate-site/route.ts`, so the build step tries to initialize it and fails without the key.
- **No `tsconfig.json` is committed** — Next.js auto-generates one on first `npm run dev`.
- The `TS` file at the repo root is a scratch file and is not part of the application.
