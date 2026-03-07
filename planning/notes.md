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

Short answer

This is a client-rendered SvelteKit app (CSR), not runtime SSR.
It behaves like an SPA in the browser, but it is built/deployed as a static site with route HTML files plus SPA fallback.

Why (evidence)

Global SSR is disabled in +layout.ts (ssr = false), so route rendering happens on the client.
Static adapter is used in svelte.config.js with fallback: 'index.html', which is typical for SPA fallback routing on static hosts.
Build scripts are standard static Vite/SvelteKit (vite build) in package.json, and your build output includes per-route HTML files (e.g., about.html, data-structures/*.html, sorting-algorithms/*.html).

Architecture

Framework layer: SvelteKit + Vite + TypeScript + Tailwind plugin setup in vite.config.ts.
Routing/UI shell: App-wide nav/layout in +layout.svelte, feature pages under src/routes/data-structures/* and src/routes/sorting-algorithms/*.
Feature modules:
Data structures: visual + controls + operation engine split under data-structures.
Sorting: algorithm step generators + registries + visual views under sorting-algorithms.
State/flow pattern: Data-structure interactions are coordinated by an event-driven OperationManager in operationManager.ts.
Content loading: Descriptions are Markdown files fetched client-side by DescriptionCard.svelte from static/descriptions/....

Bottom line

No server endpoints or +page.server files are present; this project is effectively a static, CSR-first SvelteKit architecture with SPA-style navigation.