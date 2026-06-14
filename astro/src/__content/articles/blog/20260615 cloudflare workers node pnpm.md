---
title: Setting Node and PNPM versions in Cloudflare Workers programmatically
date: 2026/06/15
description: Tried to use env vars to set versions, didn't work. Wasted a couple hours testing several different configs.
tags: []
category: dev
---

You can set them by adding the `NODE_VERSION` and `PNPM_VERSION` env vars in the Cloudflare Workers dashboard, which is what I did initially, but I wanted to use version rangers and so preferred to set them programmatically or via config files in code rather than the dashboard.

I've wasted a couple of hours so you don't have to.

## Node

```
//.nvmrc
// this uses specifically node v24.16.0
24.16.0

// this uses the latest lts version, whether its 22, 24 or 26.
lts/*

// THIS DOES NOT WORK!!
// it works locally, but not inside cloudflare workers
lts/krypton
```

To specify a node version, you _must_ use a `.nvmrc` file.

## PNPM

```
// package.json
{
  "packageManager": "pnpm@11.6.0",
    "devEngines": {
      "packageManager": {
        "name": "pnpm",
        "version": "11.6.0",
        "onFail": "download"
      }
    }
}
```

To specify a pnpm version, you have to add a `packageManager` field to your `package.json`. The pnpm site [recommends](https://pnpm.io/package_json#devenginespackagemanager) you add `devEngines.packageManager` for reasons I will not go into. So you end up having to do this.

There are some issues with this.

The `packageManager` field is enforced by Corepack and as a matter of policy, does not support version ranges. [Ref](https://github.com/nodejs/corepack/issues/835#issuecomment-4450684026)

> The packageManager field not supporting ranges is a feature, not a bug.

PNPM however, does support version ranges in `devEngines.packageManager`, which clashes with Corepack's policy. So if `packageManager` is used, `devEngines.packageManager` must also specify a single version.

There are more, but this is the main issue for me.

## wrangler.jsonc

The wrangler docs [specify](https://developers.cloudflare.com/workers/configuration/environment-variables/) a `vars` field for environmental variables. **It does not work** for Node and PNPM.
