---
title: Switching to Netlify
date: 2022/06/01
description: I outline the reasons why I'm switching from GitHub Pages to Netlify
series: site redesign
tags: [architecture]
category: blog
---

The very first version of this website was deployed to GitHub Pages sometime back in 2015 or 2016. It was a good enough choice back then and it's actually much better in recent years as they've finally added support for HTTPS. However, I'm still moving this over to Netlify for the below reasons.

## Analytics

GitHub doesn't provide page analytics. I could use Google Analytics or any of the various other services out there but I wanted something that read from the server logs instead of client site JS.

## It's easy

The source repo of this website is private because I have a a lot of drafts I don't want the world to see (yet). So the deploy process is a little bit more involved then just pushing to a git repository.

My initial plan was to build a GitHub Action that would basically run `next build && next export`, then copy the contents of the `out/` folder over to [thelegendofcode.github.io](https://github.com/thelegendofcode/thelegendofcode.github.io). But I've mostly scratched that itch by building a GitHub Action that lints/formats/prettifies then commits the changes back into the repo so I decided a better use of my time is to move on and work on missing features instead.

Deploying is easy since this site is built with [next.js] and they have a plugin that automagically deploys [next.js] sites.

## I like Netlify as a service

I want them to thrive therefore I'm willing to pay for their services.

[next.js]: https://nextjs.org
