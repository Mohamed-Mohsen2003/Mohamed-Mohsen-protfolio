import { defineConfig } from 'vite';

export default defineConfig({
  root: 'app',
  base: '/Mohamed-Mohsen-protfolio/',
  publicDir: '../public',
  esbuild: { jsx: 'automatic' },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: 'react-assets',
    sourcemap: false,
  },
});
