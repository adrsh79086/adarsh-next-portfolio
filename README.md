# Adarsh Kumar — Next.js Portfolio

A creative, dark editorial-style developer portfolio built with Next.js App Router, TypeScript, Framer Motion and Lucide icons.

## Requirements
- Node.js 18.17 or later (Node 20 LTS recommended)
- npm

## Run locally
1. Extract the ZIP.
2. Open the extracted `adarsh-next-portfolio` folder in VS Code.
3. Open a terminal in that folder.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open http://localhost:3000

## Production build
```bash
npm run build
npm start
```

## Customize before publishing
Search in `app/page.tsx` and update:
- GitHub and LinkedIn links (currently generic placeholders)
- `adarshkumar@example.com` with your real email
- project repository links (`https://github.com/`)
- project descriptions and stack if details need changing
- experience details/date if your current role has changed

The portfolio intentionally does not include a fake working contact form. The email button copies the email address, and the contact link opens the user's email app.

## Project structure
- `app/layout.tsx` — page metadata and root layout
- `app/page.tsx` — page sections, interactive project filter and tech explorer
- `app/globals.css` — full responsive styling and animations
- `package.json` — dependencies and commands
- `next.config.mjs` — Next.js configuration
- `tsconfig.json` — TypeScript configuration

All major sections and components are commented by name and separated into reusable functions in `app/page.tsx`.
