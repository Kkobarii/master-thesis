chyby:

- boj s vis-network
  - primárně layout
  - nejspíš řešení - napsání vlastního overlaye, kam se dávají anotace a jiné věci, co do grafu nepatří
- frontend
  - několik verzí stylování
- boj s vis-network 2
  - problémy se zoomem
  - hlavně u b stromu se listy nemůžou srovnávat podle jejich šířky
  - řešení - fixní šířka listů (ale pak to vypadá hrozně, když je jich hodně)

Architecture

Frontend-only app (no backend/API routes in routes); there are no +server or _.server._ files.
It is best described as a static web app with SPA-like client navigation, not a traditional client-server app.
Evidence: +layout.ts:1, svelte.config.js, index.html.

Rendering

Primary strategy is SSG (static site generation): prerender = true plus @sveltejs/adapter-static.
Runtime behavior includes CSR hydration/navigation on the client after initial load.
Evidence: +layout.ts:1, svelte.config.js:10.

Framework / Libraries

Web framework: SvelteKit 2 + Svelte 5 + Vite 7.
Styling/build: Tailwind CSS 4 via Vite plugin.
Graph/visualization library used in code: vis-network + vis-data (core DS visuals).
d3 is installed but appears unused in src.
Evidence: package.json, vite.config.ts, StructureVisual.svelte:3-4.

CI/CD

CI/CD is GitHub Actions deploying to GitHub Pages on push to master/actions.
Pipeline: checkout → Node 20 setup → npm i → npm run build (with BASE_PATH) → upload Pages artifact (build) → deploy.
No test step in the workflow currently.
Evidence: README.md, deploy.yml.
