# Mohamed Mohsen — Portfolio

Personal portfolio built with Next.js, React, and TypeScript. The site is exported as static files and hosted on GitHub Pages.

## Development

Requires Node.js 20.9 or later.

```sh
npm ci
npm run dev
```

Open `http://localhost:3000/Mohamed-Mohsen-protfolio/`.

## Checks and build

```sh
npm run typecheck
npm run lint
npm run format:check
npm test
npm run build
```

`npm run build` creates the static site in `out/`. Run `npm run publish:files` to copy that export into the repository root for the existing GitHub Pages deployment. Commit the generated files together with the source changes.

## Structure

- `src/app/`: server-rendered page composition, fonts, and metadata.
- `src/components/`: portfolio sections and interactive controls.
- `src/content/portfolio.ts`: profile, experience, services, and projects.
- `src/hooks/`: theme persistence and hash navigation.
- `src/styles/`: layout, responsive styles, and theme tokens.
- `public/assets/`: portraits, project images, icons, and existing CV files.
- `tests/`: navigation, theme, filtering, contact validation, and cursor behavior.

The dark theme keeps the original visual identity. Theme preferences are stored locally. Project filtering uses Motion for entry, exit, and layout transitions; reduced-motion preferences are respected. The cursor effect is enabled only for fine pointers.

The contact form uses the existing FormSubmit endpoint. Automated checks validate fields without sending messages. CV files remain unchanged.
