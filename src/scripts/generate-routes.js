// Reads the per-section content arrays and writes the static index.html
// entry each article needs at its route/... path (route resolution on
// static hosting requires an actual index.html file at that path).

import { mkdirSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { INDUSTRY, PROJECTS, EXPERIENCES, VOLUNTEERING } from '../content-data.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const projectRoot = join(__dirname, '..', '..')

const SECTIONS = [INDUSTRY, PROJECTS, EXPERIENCES, VOLUNTEERING]

function articleHtml(title) {
    return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title} — Jeshua Nava Avila</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/mains/article-main.jsx"></script>
  </body>
</html>
`
}

for (const section of SECTIONS) {
    for (const item of section) {
        if (!item.md || !item.url || item.url === '/') continue

        const routeDir = join(projectRoot, item.url)
        mkdirSync(routeDir, { recursive: true })
        writeFileSync(join(routeDir, 'index.html'), articleHtml(item.title))
    }
}
