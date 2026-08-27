# argentum11-blog

This project was generated with [Analog](https://analogjs.org), the fullstack meta-framework for Angular.

## Setup

Run `npm install` to install the application dependencies.

## Development

Run `npm start` for a dev server. Navigate to `http://localhost:5173/`. The application automatically reloads if you change any of the source files.

### Blogs

The `slug` field is a URL-friendly identifier for the content. It's used to generate the page's URL/route.
For example, slug: 2022-12-27-my-first-post would typically produce a URL like:
https://yoursite.com/blog/2022-12-27-my-first-post

#### How a post becomes a page

1. **Source**: each post is one `.md` file in `src/content/`, with YAML
   frontmatter matching `src/app/post-attributes.ts` (`title`, `slug`,
   `description`, `coverImage`, `date`) followed by the markdown body.
2. **Build-time markdown → HTML**: `@analogjs/content`'s Vite plugin
   (from `@analogjs/platform`) intercepts each `.md` file and splits it into
   two pieces using the `front-matter` package: `attributes` (the parsed YAML
   metadata object — `title`, `slug`, `description`, `coverImage`, `date`)
   and `body` (the raw markdown text below the `---` fence). `body` is then
   run through `marked` (configured via `content: { highlighter: 'shiki' }`
   in `vite.config.ts`) to produce an HTML string, while `attributes` is kept
   as-is and exposed separately as `post.attributes`. This happens once at
   build/prerender time, not in the browser.
3. **Slug → route**: the prerender `transform` in `vite.config.ts` builds
   each route as `/blog/${frontmatter.slug || filename}`, so `slug`
   (falling back to filename) is what determines a post's URL.
4. **List page**: `src/app/pages/blog/index.page.ts` uses
   `injectContentFiles<PostAttributes>()` to get all posts' frontmatter (for
   the archive listing) without loading full body content.
5. **Post page**: `src/app/pages/blog/[slug].page.ts` uses
   `injectContent<PostAttributes>('slug')` to fetch one post by its route
   param, matched against `attributes.slug`. `post.content` is the
   pre-rendered HTML string from step 2; it's passed to
   `<analog-markdown [content]="...">`, which treats it as trusted
   pre-rendered HTML (`bypassSecurityTrustHtml`) — no markdown parsing
   happens client-side. The `[slug]` in the filename is a dynamic route
   segment (like Next.js's `[slug].js`) — there is exactly one component
   file, reused for every post rather than duplicated per post. Angular
   Router matches any `/blog/<value>` URL against it, and the prerender step
   runs this same component once per post found under `src/content/`,
   producing one static HTML file per post.
6. **Images**: each post's images live under `public/blog/<slug>/`, where
   `<slug>` matches that post's frontmatter `slug`. Reference them the same
   way in both places — `coverImage: ./my-image.png` in frontmatter, and
   `![alt text](./my-image.png)` in the markdown body — and `[slug].page.ts`
   prefixes them with `./blog/<slug>/` at render time (`postAssetUrl` for the
   cover image, `resolveContentImages` for inline images; the prefix is a
   relative path, not an absolute `/blog/...` one, because the site is
   served under a base path — see `base` in `vite.config.ts`). This means the
   slug only needs to be typed once, in frontmatter, never per image.

## Build

Run `npm run build` to build the client/server project. The client build artifacts are located in the `dist/analog/public` directory. The server for the API build artifacts are located in the `dist/analog/server` directory.

## Test

Run `npm run test` to run unit tests with [Vitest](https://vitest.dev).

## Community

- Visit and Star the [GitHub Repo](https://github.com/analogjs/analog)
- Join the [Discord](https://chat.analogjs.org)
- Follow us on [Twitter](https://twitter.com/analogjs)
- Become a [Sponsor](https://github.com/sponsors/brandonroberts)
