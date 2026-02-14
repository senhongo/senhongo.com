---
title: No index signature with a parameter of type 'string' was found on type '{}'
date: 2022/05/24
series:
tags: [typescript]
category: dev
---

_TL;DR_

```typescript
  // 1. Cast object as any
  (object as any)[key] = 'value';

  // 2. Cast as key of object
  object[key keyof typeof object] = 'value';
```

This error often pops up when using a string to to index an object.

```typescript
const object = {
  key: value,
};

const key = 'key';

// Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ key: string; }'.
//  No index signature with a parameter of type 'string' was found on type '{ key: string; }'.ts(7053)
console.log(object[key]);
```

The quick, if somewhat cryptic, explanation is that while `object.key` is a string, it is specifically a string named 'key'. Where `key` is just a string. So we need to tell the Typescript compiler than `key` isn't just any string, but specifically a string with the type of a key of object.

```typescript
const key: keyof typeof object = 'key';
```
