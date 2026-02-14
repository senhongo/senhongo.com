---
title: ValuesType generic type
date: 2023/06/14
description: A generic for enum state types.
series:
tags: [typescript, generics]
category: dev
---

```ts
export type ValuesType<T> = T[keyof T];
```

Just a small generic so I can do less typing. Otherwise it would've looked like this everywhere.

```ts
type StateEnumType = (typeof StateEnum)[keyof typeof StateEnum];
```

Example usage in a React `useReducer`.

```ts
const PointerStateEnum = {
  isMouseDown: 'isMouseDown',
  isMouseUp: 'isMouseUp',
} as const;

type PointerStateEnumType = ValuesType<typeof PointerStateEnum>;

const initialState = {
  pointerState: <PointerStateEnumType | null> null;
};

dispatch({
  type: 'SET_POINTER_STATE',
  payload: PointerStateEnum.isMouseDown,
});
```
