# Alireza Rezapour — Portfolio

An editorial personal website built with Next.js, TypeScript, Tailwind CSS, and local MDX content.

## Development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

The production build uses Next.js static export and is written to `out/`.

## Writing

Blog posts live in `src/content/posts` as `.mdx` files. Each post must provide this frontmatter:

```yaml
---
title: Required post title
description: Required short summary
publishedAt: 2026-09-14
updatedAt: 2026-09-15 # optional
category: Required category
tags: [optional, tags]
draft: false
---
```

Drafts are omitted from the index and static route generation. Reading time is calculated from the MDX body during the build.
