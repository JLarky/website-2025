import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';
import Atomico from '@atomico/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [Atomico()],
  vite: {
    build: {
      sourcemap: true,
    },
  },
});
