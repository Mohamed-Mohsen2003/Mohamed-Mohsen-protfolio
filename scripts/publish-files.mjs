import { cp, readFile, readdir, rm, writeFile } from 'node:fs/promises';

// Publish the production build at the existing repository root. The Pages
// branch and repository name stay unchanged, so the public URL stays unchanged.
const root = new URL('../', import.meta.url);
await readFile(new URL('out/index.html', root));
for (const directory of ['react-assets', '_next', 'media', '404']) {
  await rm(new URL(directory, root), { recursive: true, force: true });
}
for (const name of await readdir(new URL('out/', root))) {
  await cp(new URL(`out/${name}`, root), new URL(name, root), { recursive: true });
}
await writeFile(new URL('.nojekyll', root), '');
console.log('Production files prepared at the existing GitHub Pages root.');
