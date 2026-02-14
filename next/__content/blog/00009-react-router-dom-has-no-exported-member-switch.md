---
title: react-router-dom has no exported member 'Switch'
date: 2022/06/25
description: Basic Example in docs for react-router-dom was not updated.
series:
tags: [react, react-router-dom]
category: dev
---

`'"react-router-dom"' has no exported member 'Switch'`

Got the above error while starting a new CRA app using react-router-dom.

```
import {
  ...
  Switch,
  ...
} from "react-router-dom";
```

The docs had this bit of code at the top that was causing this error. The reason is that in v6, `Switch` has been renamed to `Routes`.

```
import {
  ...
  Routes,
  ...
} from 'react-router-dom';
```

This very quickly fixes the error.

There's a migration doc here.

[https://reactrouter.com/docs/en/v6/upgrading/v5](https://reactrouter.com/docs/en/v6/upgrading/v5)
