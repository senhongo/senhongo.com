This is the default layout component to be used for all pages.

There are 2 slots

- header
- unnamed default

The header slot defaults to a generic BaseHead component if unspecified.

The unnamed slot is for content going inside `<main>`

```
*.astro
   │
   ▼
Layout
   ├──► plain html
   │
   ├──► slot name "header"
   │         ├──► uses BaseHead if empty
   │         └──► add custom Head where needed
   │
   └──► slot
            │
            ▼
       content Components
            ├──► Taxonomy
            ├──► BlogRoll
            └──► Article
```
