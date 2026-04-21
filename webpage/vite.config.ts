/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;

          if (
            id.includes('/react/') ||
            id.includes('/react-dom/') ||
            id.includes('/react-router/')
          ) {
            return 'vendor-react';
          }

          if (id.includes('/zustand/')) return 'vendor-state';

          if (
            id.includes('/react-markdown/') ||
            id.includes('/remark-gfm/')
          ) {
            return 'vendor-markdown';
          }

          if (
            id.includes('/prismjs/') ||
            id.includes('/prism-themes/')
          ) {
            return 'vendor-prism';
          }

          if (id.includes('/@xterm/') || id.includes('/xterm/')) {
            return 'vendor-xterm';
          }

          if (
            id.includes('/isomorphic-git/') ||
            id.includes('/@isomorphic-git/')
          ) {
            return 'vendor-git';
          }
        },
      },
    },
  },
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
      "@repo": path.resolve(__dirname, ".."),
      "@CLI": path.resolve(__dirname, "./src/CLI"),
      "@src": path.resolve(__dirname, "./src"),
      "src": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    fs: {
      // allow reading files from the repo root during dev
      allow: [path.resolve(__dirname, "..")],
    },
  },
})
