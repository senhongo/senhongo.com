---
title: Limit number between a range
date: 2023/06/20
description: After doing some arithmetic, I need to limit the value between a specific range. Useful for sliders.
series:
tags: [javascript]
category: dev
---

```ts
const MIN = 1;
const MAX = 20;

Math.min(Math.max(input, MIN), MAX);
```

The way this works is, assuming the input is larger than the expected range.

`Math.max()` will pick the the larger value, then pass it on to `Math.min()` which then picks `MAX` as the smaller value.

The concept is reversed when the input is smaller.

I also just learnt that this concept is called [clamping](https://css-tricks.com/snippets/sass/clamping-number/).
