---
title: Reinstall global packages when upgrading node.js with nvm
date: 2024/09/14
description: When installing a new version of node.js using nvm, also reinstall global packages
series:
tags: [node, nvm]
category: dev
---

How to reinstall packages from a previous version of node.js using nvm.

`nvm reinstall-packages <version>`

Install new version of node.js, while also reinstalling previous global packages.

`nvm install --reinstall-packages-from=<previous version> <new version>`
