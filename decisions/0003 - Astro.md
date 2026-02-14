# Astro

Date: 2025-04-17

Status: proposed

## Context

Next.js doesn't actually do proper SSG. The rendered output, even if it doesn't require any client side javascript at all, still outputs a React app. Meaning that start up times are surprisingly slow and travelling back to the previous page causes it ot re-render.

I initially chose to stay on Next.js during last year's re-write because I didn't have much time so chose to focus on the redesign instead.

This year, I want to do it properly.

Over the past few months, I swayed back forth between various options but the main ones that stood out were [Hugo], [11ty] and [Astro].

For a time, 11ty stood out as the winner as I spent a couple weeks in the docs familiarising myself with it. However, when it came time to actually start writing it, I just couldn't bring myself to writing [Pug] or [Moustache] or Handlebars again. Not after 10 years of progress.

So I looked at Hugo again. Then I remembered that writing CSS in Hugo was a huge pain and the docs didn't seem to have changed much since the last time I used it.

In the meantime however, Astro seemed to have improved a lot more since the last time I checked it out. Astro contains a lot of features that I had originally coded myself and would gladly switch out. Main things are markdown to html, syntax highlighting and content management.

## Decision

I will Lore in Astro.

## Consequences

Learning a new framework requires time. This will not not a weekend project.

Therefore I have chosen to split the tasks as so.

1. complete the design
1. implement the design into the current Next.js version
1. scaffold a new Astro build
1. bring the new design over bit by bit

[Hugo]: https://gohugo.io
[11ty]: https://www.11ty.dev
[Astro]: https://astro.build
[Pug]: https://pugjs.org/api/getting-started.html
[Moustache]: https://mustache.github.io
[Handlebars]: https://handlebarsjs.com/guide/
