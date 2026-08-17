import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

const isProduction = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  site: 'https://alphinito.github.io',
  base: isProduction ? '/Current-CV' : undefined,
  integrations: [preact()]
});