import { defineConfig } from 'astro/config';
import rss from '@astrojs/rss';

export default defineConfig({
  output: 'static',
  integrations: [rss()],
});
