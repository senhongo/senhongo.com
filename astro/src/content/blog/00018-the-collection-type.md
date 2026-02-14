---
title: The Collection Type
date: 2023/06/08
description: A useful data structure I like to use for nosql types of data
series:
tags: [nosql, typescript, generics]
category: dev
---

Ever since I started using React, specifically Redux and Firebase, back in 2018-19-ish, I've always been weirded out by how lists were always stored in an `Array`, and retrieving/updating a single item required traversing through that array using a mixture of `find`, `findIndex` or `filter`. It seemed obvious to me that even a simple object that mapped the id to the contents would be more efficient but my then team disliked having to write `Object.keys` or `Object.values` each time we needed to iterate, like you often have to inside a React component.

My next job used Postgres where `JOIN`s were a thing so we avoided the whole problem altogether. At [Chubic], I'm back to using React and Firebase again and similar issues popped up. So I've taken to using something I call the `Collection` type and it looks like this.

```ts
interface Collection<T> {
  allIds: string[];
  byIds: Record<string, T>;
}
```

With this, I have the best of both worlds. I can iterate using `Collection.allIds.map` or target a single row simply with `Collection.byIds[id]`. Yes, adding and removing takes a bit more work but that is nothing compared to the convenience of having both array and object methods available.

I take no credit for this. Similar interfaces can be found in the documentation of your favourite noSQL provider. I do think it bares repeating because I still see too many people sticking to simple arrays or objects.

[chubic]: https://chubic.com
