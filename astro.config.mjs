// Configuration Astro du site BEAU MOMENTS (néerlandais à la racine, /fr/ français, /en/ anglais).
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import site from './src/data/site.json' with { type: 'json' };

export default defineConfig({
  site: site.siteUrl,
  trailingSlash: 'always',
  // V2 : port 4351 (la V1 reste sur 4350). Port fixe, différent de Vyana (4340), TINI (4341) et les aperçus déjà ouverts (4342-4349), pour lancer les sites en même temps
  server: { port: 4351, strictPort: true },
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const path = new URL(item.url).pathname;
        const depth = path.split('/').filter(Boolean).filter((s) => !['fr', 'en'].includes(s)).length;
        item.changefreq = depth === 0 ? 'weekly' : 'monthly';
        item.priority = depth === 0 ? 1.0 : /\/(catering|traiteur)\//.test(path) ? 0.9 : 0.7;
        return item;
      },
    }),
  ],
});
