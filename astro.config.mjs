import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  base: '/doctordaddysir-site/',
  output: 'static',
  site: 'https://doctordaddysir.github.io/doctordaddysir-site/',
});
