---
title: Renaming files in folder to a sequence of numbers
date: 2022/08/04
description:
series:
tags: [bash]
category: dev
---

```bash
a=1
for i in *.jpg; do
  new=$(printf "%04d.jpg" "$a") #04 pad to length of 4
  mv -i -- "$i" "$new"
  let a=a+1
done
```
