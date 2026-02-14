---
title: ESLint Flat Config and Next.js
date: 2024/04/11
description: Updating ESLint's config files and so on
series:
tags: [javascript, eslint, nextjs]
category: dev
---

ESLint released a [new config format](https://eslint.org/blog/2022/08/new-config-system-part-2/) while the world wasn't paying attention. Nothing life shattering, everything rolled along as always.

Then [ESLint 9.0 was released](https://eslint.org/blog/2024/04/eslint-v9.0.0-released/) and the new flat config became the default.

Anyway, enough with the back story. Here's my `eslint.config.js` file updated to work with Nextjs. `eslint-config-next` no longer works. The solution is to manually import the 3 plugins included within the config file and add them to the config.

- `@next/eslint-plugin-next`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`

I added them at the top the same I had it in my previous `.eslintrc.json` file so that the various recommended rules after it will have a higher priority, then I added my custom rules to the bottom.

```ts
// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import typescriptParser from "@typescript-eslint/parser";

export default tseslint.config(
  {
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      "@next/next": nextPlugin,
      react: reactPlugin,
      "react-hooks": hooksPlugin,
    },
    rules: {
      ...reactPlugin.configs["jsx-runtime"].rules,
      ...hooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "@next/next/no-img-element": "error",
    },
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
);
```
