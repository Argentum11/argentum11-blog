/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog, {type PrerenderContentFile} from '@analogjs/platform';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      static: true,
      content: {
        highlighter: 'shiki',
      },
      prerender: {
        routes: [
          {
            contentDir: 'src/content',
            transform: (file: PrerenderContentFile) => {
              // use the slug from frontmatter if defined, otherwise use the files basename
              const slug = file.attributes.slug || file.name;
              return `/blog/${slug}`;
            },
          },
        ],
      },
    }),
    tailwindcss()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  base: '/argentum11-blog/',
}));
