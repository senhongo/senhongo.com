---
title: How Firebase Storage Refs Can Silently Overwrite Your Files
date: 2026/02/03
description:
series:
tags: [firebase]
category: dev
---

_Note: this is an old draft from 2023 that I found while cleaning up my issues. I decided to publish it anyway._

It sounds obvious because _duh_. Yet, I've done this before, and will likely do it again.

Firebase Storage refs are path-based instead of object-based. When uploading files with the same name, the later upload will overwrite the earlier ones even if the refs were separately created.

For example, imagine this code runs twice with two _different_ images that happen to both be called `image.jpg`:

```ts
// imagine this bit of code is run twice.
const selectedFile = (e.target.files as FileList)[0];

// each iteration creates a ref, but both point to the same storage path.
const fileRef = ref(storage, selectedFile.name);
```

Both `fileRef` values resolve to the same path, so the second upload silently overwrites the first.

A simple though naive way around this is to append the current timestamp to the end of the filename.

```ts
const name = `${Date.now()}_${selectedFile.name}`;
```

A more robust method will involve generating a UUID for that file. The timestamp approach can still collide if two uploads happen in the same millisecond. The UUID approach is effectively collision-proof.

```ts
import { v4 as uuidv4 } from 'uuid';
const name = `${uuidv4()}_${selectedFile.name}`;
```
