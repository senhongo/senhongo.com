---
title: Migrating Next.js to PNPM inside Cloudflare Workers
date: 2025/08/18
description:
series:
tags: [cloudflare, pnpm, npm, next.js]
category: dev
---

I recently switched my personal setup from [npm] to [pnpm]. While everything worked as expected locally, my Next.js builds started failing when deployed to [Cloudflare Workers].

The issue came down to how [@cloudflare/next-on-pages] runs its build step. By default, the recommended build command relies on [npx], which is tied to the npm ecosystem. Since [pnpm] manages binaries differently, the `npx` call inside the Cloudflare build environment could no longer resolve properly.

The fix was straightforward: instead of using `npx`, I switched the build command to use `pnpm dlx`, which is the pnpm equivalent for running one-off binaries. Here’s the working command:

```bash
pnpm dlx @cloudflare/next-on-pages@1
```

You can update this setting directly in the Cloudflare dashboard:

> Cloudflare dashboard → Compute (Workers) → YOUR PROJECT → Settings → Build → Build Configuration → Build Command

After making this change, deploys worked again without any issues.

When migrating from npm to pnpm in a Cloudflare Workers project, make sure to replace any `npx` usage with `pnpm dlx`. This applies also to other commands in your build pipeline that previously depended on `npx`.

For reference, here’s the related GitHub issue:

[https://github.com/cloudflare/next-on-pages/issues/544](https://github.com/cloudflare/next-on-pages/issues/544)

[npm]: https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager
[pnpm]: https://pnpm.io
[Cloudflare Workers]: https://workers.cloudflare.com
[@cloudflare/next-on-pages]: https://github.com/cloudflare/next-on-pages
[npx]: https://docs.npmjs.com/cli/v8/commands/npx
