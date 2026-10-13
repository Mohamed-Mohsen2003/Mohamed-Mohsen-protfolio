# Mohamed Mohsen — React Portfolio

A React and TypeScript portfolio that preserves the original charcoal-and-gold
design, adds a matching light theme, and keeps the existing GitHub Pages URL.

## Stack

- React 19 and TypeScript with reusable components and typed portfolio data.
- Vite for development and production builds.
- React server rendering for initial content and search-engine metadata.
- The original CSS layout, with separate light-theme and accessibility styles.
- Ionicons and the original Poppins font.
- FormSubmit for the existing contact-form delivery route.
- Vitest and React Testing Library for behavioral regression tests.

## Development

Requires Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

Vite serves the app under `/Mohamed-Mohsen-protfolio/`, matching production.

## Checks and build

```sh
npm test
npm run build
npm run publish:files
```

`build` typechecks, bundles and prerenders the React application into `dist/`.
`publish:files` copies that build to the repository root for the existing
branch-based GitHub Pages deployment. Keep the repository name and Pages
source unchanged to preserve the public URL. Commit the generated root
`index.html`, `react-assets/`, `media/`, `favicon.svg`, and `.nojekyll` together
with the application source. GitHub Pages does not build React source files
automatically; deploy the generated files after each change.

## Project structure

```text
app/src/components/   Sidebar, pages, theme toggle and cursor follower
app/src/hooks/        Persistent theme and hash-based navigation
app/src/data/         Typed profile, skills, experience and project data
app/src/styles/       Original dark design and light/accessibility additions
public/               Assets copied into the production build
scripts/              Prerendering and branch-based Pages packaging
tests/                Theme, navigation, contact, project and cursor checks
```

Edit `app/src/data/portfolio.ts` to update skills, experience or projects.
Project technology labels are intentionally limited to the roles already
listed in the original portfolio; no new client-project stacks or results
have been invented.

## Behavior

- The original dark theme is the default; the visitor's chosen theme persists.
- A smooth gold cursor ring follows fine mouse pointers. It is disabled for
  touch screens and reduced-motion preferences, and never blocks clicks.
- About, Resume, Portfolio and Contact have shareable hash URLs and support
  browser history.
- Project images have responsive WebP variants and lazy loading.
- Contact fields have accessible labels, native validation and React-managed
  submit-button state. The original FormSubmit endpoint is retained; email
  delivery depends on the owner's FormSubmit activation and provider checks.
- The supplied CV PDF and DOCX are retained without content changes.

## Existing deployment

https://mohamed-mohsen2003.github.io/Mohamed-Mohsen-protfolio/
