---
title: Dev Cycle 4 Log
date: 2025/05/10
description:
series: work log
tags: [millefeuille]
category: work log
---

## What I did

Completed the basic CRUD workflow for Transactions. It is now possible to add, edit and delete `Expenses` and `Revenues`.

There are still some UI issues related to state initialisation in child components but the current implementation is good enough _for now_.

The simple reason is that state is managed using multiple `useState`s within each child component. I could try to fix this now, but there are still other features to implement and it'll be more helpful to have a clearer view of the required states before redesigning this one small portion.

## What I learned

It's really hard to divide work into slots smaller than an hour. I'm not sure if I learned anything. I was also driving across Japan and long distance driving is really quite mentally taxing.

Maybe I should try to do the planning before the trip.

## What next

Probably `Recurring and Grouped Transactions`. Though I'm not sure if this is necessary for v0.0.1.

If not, the next option is to re-work the `Accounts` implementation.

[Chubic]: https://chubic.com
