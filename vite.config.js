import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base ('./') so the site works on any GitHub Pages URL,
// whether it's <user>.github.io or <user>.github.io/portfolio.
export default defineConfig({
  base: './',
  plugins: [react()],
})
