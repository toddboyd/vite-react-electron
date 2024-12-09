import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['electron'],
      output: {
        format: 'cjs',
        entryFileNames: '[name].cjs',
      }
    },
    outDir: 'dist-electron',
    emptyOutDir: true,
    target: 'node14',
  }
})
