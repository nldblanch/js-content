# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

# formatNumber demo

A tiny “authentic” web page that demonstrates a beginner-friendly number formatting function.

The challenge is to convert prices stored in **pence** (like `199`) into a **pounds** string (like `£1.99`).

# formatNumber demo

A tiny “authentic” web page that demonstrates number formatting in the browser using `Intl.NumberFormat` via a small util module.

## Run it

From this folder:

- Install: `npm install`
- Start dev server: `npm run dev`
- Production build: `npm run build`

## Where things live

- Formatting helper: `src/utils/formatNumber.js`
- Demo UI: `src/App.jsx`
