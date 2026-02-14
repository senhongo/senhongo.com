---
title: Object destructuring with dynamic keys
date: 2025/06/05
description:
series:
tags: [javascript]
category: dev
---

This technique is useful when you don't know the property name ahead of time and still want to destructure it cleanly. I often use this for deleting keys from an object. Useful in state reducers.

```ts
const keyToExtract = "email";
const user = {
  name: "Sen",
  email: "sen@senhongo.com",
  role: "guy",
};

const { [keyToExtract]: extractedValue, ...rest } = user;

console.log(extractedValue); // sen@senhongo.com
console.log(reset); // { name: "Sen", role: "guy" }
```

- `keyToExtract` is a dynamic variable that holds the name of the key we want to pull out.
- The property with the key `email` is extracted into `extractedValue`.
- The rest of the object goes into `rest`.
