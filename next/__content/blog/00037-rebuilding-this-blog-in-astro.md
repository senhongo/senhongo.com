---
title: Rebuilding this blog in Astro
date: 2025/04/04
description:
series: astro redesign
tags: [blog, astro, next.js]
category: dev
---

It's been half a year since I last rebuilt this blog so it's time to use the new shiny!

Jokes aside, I just need to _properly finish_ this blog.

I actually wanted to rebuild the blog in [Astro] this same time last year. I instead chose to do a simple re-design so that I could focus my efforts on [Millefeuille] and [Chubic]. Much progress has happened with the latter so I think I'm good now.

## Why Astro?

### Proper Static Site Generation

The current [Next.js] generated site isn't really SSG. Each page is still rendered as a React app even though no JS actually runs on the page. Probably because of this reason, the site loads very slowly.

I just want it to give me plain old HTML and CSS.

### Amazing Built-in Features

[Astro has a built-in markdown renderer. Sweet.](https://docs.astro.build/en/guides/markdown-content/) It means I can remove all the code around [Remark.js]. It's cool but too confusing. Yes, I love having to download and configure a million plug-ins to convert markdown to html. _Who wouldn't?!_ (It's also the reason I gave up using [postcss], but that's another story for another time.)

[It also comes with syntax highlighting! Sweet.](https://docs.astro.build/en/guides/syntax-highlighting/) Something I've avoided adding because of the above reason.

[Content management is built-in too. Sweet.](https://docs.astro.build/en/guides/content-collections/) That means I can also remove all the hacky code I wrote to parse the markdown files.

### Next.js is terrible for websites

I'm not satisfied with how Next.js works as a blog. I think it's great for building a web _app_ but it's actually really terrible for building a web _site_. This can be a whole article itself, actually it is a whole other article that I just haven't published yet.

### Why not Hugo/Ghost/Hexo/11ty/whatever?

Because Astro excites me.

[11ty] was the main runner up to Astro but I preferred writing React over Pug. Also their website looks terribly outdated.

I like [Hugo] but their docs are terrible. I remember spending hours just to do simple stuff like formatting dates the last few times I used Hugo. And I still haven't figured out their CSS workflow after all these years. Rendering fast is cool but doesn't really matter in the end if it's so difficult to use.

I haven't looked at [Ghost] recently but I just didn't like it. Cool editor though.

## What's the timeline?

A week to finish designing the missing parts, filling in placeholders with content and some polish. And a week (or two) to code.

I'd like to blog about building in Astro too.

## What's missing?

- Lots of design elements all over
- Proper use of colours and font styles
- Responsive layouts
- Content

[Millefeuille]: https:///millefeuille.app
[Chubic]: https://chubic.com
[Remark.js]: https://remark.js.org
[Astro]: https://astro.build
[Next.js]: https://nextjs.org
[11ty]: https://www.11ty.dev
[Hugo]: https://gohugo.io
[Ghost]: https://ghost.org
[postcss]: https://postcss.org
