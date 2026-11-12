import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      headless: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
      // IMPORT_MAP_MOCKS=false turns the 5.1 import map mocks off: all four tests then pass.
      ...(process.env.IMPORT_MAP_MOCKS === 'false' ? { importMapMocks: false } : {}),
    },
  },
});
