# Lore

## How to deploy without GitHub Actions

```
npx run export

// remove _next and expo directories in ghpage repo
rm -rf _next expo

// back in this repo
mv -v out/* $PATH_TO_GH_PAGE_REPO
```
