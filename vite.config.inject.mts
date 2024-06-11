import { defineConfig } from 'vite'
import { r } from './scripts/utils'
import packageJson from './package.json'

export default defineConfig({
  build: {
    outDir: 'dist',
    cssCodeSplit: false,
    emptyOutDir: false,
    sourcemap: true,
    lib: {
      entry: r('src/contentScripts/inject.ts'),
      name: packageJson.name,
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        entryFileNames: 'inject.js',
        extend: true,
      },
    },
  },
})
