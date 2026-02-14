---
title: Git Config Changes
date: 2025/02/26
description:
series:
tags: [git]
category: dev
---

Some changes to git config settings based on this article I found and the HN thread about it

- [https://blog.gitbutler.com/how-git-core-devs-configure-git/](https://blog.gitbutler.com/how-git-core-devs-configure-git/)
- [https://news.ycombinator.com/item?id=43138368](https://news.ycombinator.com/item?id=43138368)

I'm sure I've already set up some of these but it's nice to have them all in a single place. Now I can copy these over to other computers too.

```
git config --global column.ui auto
git config --global branch.sort -committerdate
git config --global tag.sort version:refname
git config --global init.defaultBranch main
git config --global diff.algorithm histogram
git config --global push.autoSetupRemote true
git config --global push.followTags true
git config --global fetch.prune true
git config --global fetch.pruneTags true
git config --global fetch.all true
git config --global help.autocorrect prompt
git config --global rerere.enabled true
git config --global rerere.autoupdate true
git config --global rebase.autoSquash true
git config --global rebase.autoStash true
git config --global rebase.updateRefs true
git config --global core.fsmonitor true
git config --global core.untrackedCache true
```
