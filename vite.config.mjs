import cleanup from '@by-association-only/vite-plugin-shopify-clean'
import { defineConfig } from 'vite'
import shopify from 'vite-plugin-shopify'

export default defineConfig({
  build: {
    emptyOutDir: false,
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  },
  plugins: [
    shopify(),
    cleanup(),
    // copy({
    //   targets: [
    //     {src: ['src/liquid/sections/**/*.liquid'], dest: 'sections', flatten: true},
    //   ]
    // })
  ]
})
