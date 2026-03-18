# Deployment Notes

## GitHub Pages Setup

- The site is a React SPA (Vite + React Router) deployed to GitHub Pages.
- Source code lives on `main`. The built site is served from the `gh-pages` branch.
- Custom domain: `dis.ewi.tudelft.nl` (via `CNAME` file in the deploy output).

## How to Deploy

1. Build the project:
   ```sh
   npx vite build
   ```

2. Copy `index.html` to `404.html` in `dist/` (required for SPA client-side routing on GitHub Pages):
   ```sh
   cp dist/index.html dist/404.html
   ```

3. Ensure the CNAME file exists:
   ```sh
   echo "dis.ewi.tudelft.nl" > dist/CNAME
   ```

4. Push `dist/` to `gh-pages`:
   ```sh
   cd dist
   git init
   git checkout -b gh-pages
   git add -A
   git commit -m "Deploy from main"
   git remote add origin git@github.com:dis-delft/dis-delft.github.io.git
   git push origin gh-pages --force
   ```

5. Clean up:
   ```sh
   rm -rf dist/.git
   ```

## Known Gotchas

- **404 on navigation**: GitHub Pages doesn't support SPA routing natively. Without `404.html` being a copy of `index.html`, direct links to any route other than `/` will return a 404.
- **CNAME must be in `dist/`**: If the `CNAME` file is missing from the deployed output, the custom domain will stop working.
- **node_modules on Dropbox**: The repo lives in Dropbox, which can lock files and cause `rm -rf node_modules` to fail. May need to retry or pause Dropbox sync.
- **Publications endpoint**: Fetches from `https://purexml-open.ewi.tudelft.nl/direct/tu/group/bae30032-1ecb-46c4-8efb-ed9e7251d281/` — note the trailing slash. Without it, the server returns a 301 redirect which can cause issues.
