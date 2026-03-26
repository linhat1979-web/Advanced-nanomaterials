// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://linhat1979-web.github.io',
  base: '/Advanced-nanomaterials/', // 👈 必須完全一致
  output: 'static', // 確保是靜態輸出
});