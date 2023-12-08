import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'assets',
    emptyOutDir: false,
    minify: false,
    rollupOptions: {
      input: 'index.css',
      output: {
        dir: 'assets',
        assetFileNames: 'styles.css',
      }
    },
  }
})
