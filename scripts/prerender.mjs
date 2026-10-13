import { readFile, writeFile } from 'node:fs/promises';
import { render } from '../.ssr/entry-server.js';

const file = new URL('../dist/index.html', import.meta.url);
const template = await readFile(file, 'utf8');
if (!template.includes('<!--app-html-->')) throw new Error('Missing prerender marker.');
await writeFile(file, template.replace('<!--app-html-->', render()));
console.log('Prerendered portfolio content for initial loading and search engines.');
