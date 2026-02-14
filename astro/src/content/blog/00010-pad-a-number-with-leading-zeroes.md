---
title: Pad a number with leading zeros
date: 2022/08/04
description:
series:
tags: [js]
category: dev
---

Using [String.prototype.padStart()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)

```typescript
const n = 1;
String(n).padStart(5, '0'); // '00001'
```
