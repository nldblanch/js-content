import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [react()],
  resolve: {
    alias: {
      // ...existing code...
      "@repo": path.resolve(__dirname, ".."),
    },
  },
  server: {
    fs: {
      // allow reading files from the repo root during dev
      allow: [path.resolve(__dirname, "..")],
    },
  },
})
