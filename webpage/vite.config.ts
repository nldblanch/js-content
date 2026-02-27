/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), tailwindcss()],
  test:{
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", 'html', "lcov"],
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["src/**/*.test.{ts,tsx}"],
    },
  },
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
