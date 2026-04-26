---
title: Difference between useEffect and useLayoutEffect
date: 2023/05/07
description: Just a quick reminder because I keep forgetting about their differences.
series:
tags: [react]
category: dev
---

https://react.dev/reference/react/useLayoutEffect

https://react.dev/reference/react/useEffect

`useEffect` runs _after_ the render whereas `useLayoutEffect` runs _before_ the render.

I don't remember why anymore but we used to have `useLayoutEffect` in the `_app.ts` in [Chubic](https://chubic.com) to specifically run something that was supposed to load before the page rendered. I removed it a while back and don't really want hunt it down so my best guess is that it has something to do with loading something from local storage that affects something in the layout, probably toggling some kind of switch in the `Header`.
