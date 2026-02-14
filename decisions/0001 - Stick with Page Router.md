# Stick with Page Router

Date: 2024-08-29

Status: accepted

## Context

Tried to implement app router in Lore.

It works locally but when deployed to Cloudflare, the usual `_/_error.js not found` error keeps popping up.

It seems like Page and App routers cannot co-exist.

## Decision

After considering the trade offs, the expected pay offs and current priorities, we've decided to stick with Page Router for the foreseable future.

## Consequences

By sticking with Page Router, we don’t have to change anything and so dev can continue as is. This will allow us to launch this blog ASAP.

That is the main upside and our current priority is to launch the [senhongo.com] and [millefeuille.app] websites ASAP, so that we can shift our focus back to developing `Millefeuille`.

The down side is that we will delay our learning our App Router and React Server Components. But that can wait till when we actually start working on `Millefueille`.

[senhongo.com]: https://senhongo.com
[millefeuille.app]: https://millefeuille.app
