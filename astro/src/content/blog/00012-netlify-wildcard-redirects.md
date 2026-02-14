---
title: Netlify wildcard redirects
date: 2022/09/11
description: Redirecting all paths following a certain pattern to root
series:
tags: [netlify]
category: dev
---

The `Top resources not found` category in my Netlify Analytics dashboard is filled from top to bottom for requests for something like `/$FOO/wp-includes/$BAR/`. Basically, a bunch of bots are trying to access some kind of Wordpress vulnerability that doesn't exist on this site because I'm not using Wordpress. I would love to ignore it but Netlify doesn't provide any way to filter these results thus rendering the analytics useless.

So the solution is to redirect all such requests straight back to root.

Created a file named `_redirects` with the line.

```bash
*/wp-includes/* /
```

The asterisks here are what is known as a wildcard. It basically means redirect every directory named `wp-includes` to root (`/`).

There are more configuration options in the docs but the above is the only thing I'm concerned about.

https://docs.netlify.com/routing/redirects/redirect-options/

## Wait a month

As Netlify's analytics is only for the past 30 days, I should presumably have a working analytics panel in a month's time.

Honestly, I'm rather disappointed in the analytics provided but that is for another time.
