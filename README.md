# Vitest 5.1 browser mode: `vi.mock` of non-JS modules is ignored with import map mocks

```sh
npm install
npx playwright install chromium
npm test                    # 1 passed, 3 failed: the svg, svg?query and json mocks are ignored
npm run test:no-import-map  # 4 passed, with browser.importMapMocks: false
```
