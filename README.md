# Zeynep Maide Demir — Portfolio

A personal portfolio site built with React + Vite, deployed for free on GitHub Pages (no custom domain needed).

## Edit your content
All text lives in **`src/data.js`** — name, projects, skills, timeline and links.
Change it there and the whole site updates. No need to touch the layout.

## Run locally
```bash
npm install
npm run dev      # open the printed http://localhost URL
```

## Publish for free on GitHub Pages
1. Create a new GitHub repo (e.g. `portfolio`).
2. Push this folder to it (the deploy workflow is already included):
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/zeynepmaidedemir/portfolio.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Every push to `main` rebuilds and publishes automatically.

Your site will be live at:
`https://zeynepmaidedemir.github.io/portfolio/`

> Tip: name the repo `zeynepmaidedemir.github.io` instead, and the URL becomes the
> clean `https://zeynepmaidedemir.github.io/` (no `/portfolio` suffix).
