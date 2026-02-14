---
title: Git Undo Last Commit
date: 2022/05/25
description: Simple one liner to undo last commit
series:
tags: [git]
category: dev
---

```bash
$ git reset --soft head~1
```

This command deletes the last commit and leaves everything in staged.
