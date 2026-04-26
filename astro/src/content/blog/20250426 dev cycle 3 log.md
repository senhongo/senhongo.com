---
title: Dev Cycle 3 Log
date: 2025/04/26
description:
series: work log
tags: [millefeuille]
category: work log
---

## What I did

![mockup of the Transactions form in Whimsical](@/assets/images/blog/millefeuille-poc-form.png)

I actually didn't do much this week as work at [Chubic] kept me busy.

I finished building the transactions form UI and using it as a visual guide, I updated the `Transaction` type. With this change, I'm now about to add a transaction, mark if it's an estimate or confirmed value and also mark it as completed.

The more important part is that I made multiple decisions that will affect the path we'll take for the next couple of months.

## What I ~~learned~~ decided

I was wondering how far to take the current version of Millefeuille which is essentially a Proof of Concept. When does it stop being a PoC and start being a product?

The answer is that the PoC is the product. I started building it with the intention to use it for work.

With that decided, the next thing to decide was a schedule. I can't just keep building endlessly. I want to start using Millefeuille (the product) in July, when Millefeuille's (the company) financial year ends.

Next is to decide the tech stack.

Millefeuille is currently being built with Next.js 14 but not intentionally. I intend to switch to plain old React with Vite once the PoC is completed.

Next.js is good for prototyping. It's also something I'm familiar with having used it for the past 4 years to build [Chubic], but it is not a good fit for Millefeuille.

## What next

- editing and deleting Transactions
- add a negative expense (ie. income)
- define recurring Transactions

[Chubic]: https://chubic.com
