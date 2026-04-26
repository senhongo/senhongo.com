---
title: Dev Cycle 2 Log
date: 2025/04/13
description:
series: work log
tags: [millefeuille]
category: work log
---

A few weeks ago, I adoped the [dev week / marketing week] cycle originally proposed by Jon Yongfook ([@yongfook]). I've now just completed the second dev cycle and decided an end of cycle log/report would help tie up some loose ends.

I've found both pros and cons to this approach so here's my thoughts.

## Found it hard to keep things within the week

Skill issue.

I found myself not wanting to stop working on dev tasks. Especially when I was in the middle of something meaty. In a way, it was a problem with (lack of) planning. The task was too large to have finished within a one week cycle.

- have to to learn how to split tasks into smaller bite sized pieces
- I'll also have to be content with leaving tasks unfinished
- have to be more disciplined and focus on a single task
- which also ties back to the first point of 'plan better'

## Despite these setbacks, I still want to continue

The main reason I adopted this method was that I found myself tunnel-visioned into just working on dev tasks. The more I dev-ed, the more dev tasks appeared. It was neverending and I couldn't find the time to work on the blog. And when I did get started working on the blog, the same thing happens again.

Velocity for Millefeuille itself will slow but I think this is a necessary step to ensure that tasks in both lanes keep moving.

## Some flexibility might help

Another issue was that I was on a business trip to Tokyo and thus was busier than usual. I should have taken that into account when planning tasks.

Looking back, I probably should have swapped the cycles around. Marketing cycles are probably a better fit for when travelling.

Another possibility is simply reducing the amount of tasks that require deep focus, leaving mostly chore-like tasks that can be done even when distracted.

## Logging

As there were still a few threads left hanging at the end of Dev Cycle 2, I thought having a log would help both provide some closure, clear up my thoughts and provide a resumption point when begining Dev Cycle 3.

From now on, I intend to write a log at the end of each weekly cycle summarising events and learnings, and providing a quick 'Next Action' for the next cycle.

## What I did

The aim this cycle was to expand upon the initial `Accounts` and `Transactions` prototype and add ways to create and manage `Transactions`.

A quick run down of what was done this week

- added Context API to manage transactions state
- a simple form to add transactions

What I realised when adding the form was that the data structures I created back in Dev Cycle 1 did not match the user journey that I wanted for [Millefeuille]. The data structures were for double entry book keeping and while that is something [Millefeuille] will need eventually, the current aim is to manage future expenses and cash flow predictions.

After realising this mismatch, I switched my attention to designing a UI that makes it easier to create and record future expenses. Having the UI mock up in front of me also made it easier to reason about other features like `estimates`, `completed`, `recurring` and `grouped`.

## What I learned

I had tried to do this 'from the data up', starting with data structures and trying to iterate a UI out of it. I thought that might allow us to build minimally, avoiding unnecessary code and features.

That didn't work.

A bunch of data structures does not represent a user journey. It makes a lot more sense to start with a few quick visuals and start building 'from the UI down'. That lets me apply all of my strengths as both a designer and a developer.

## What next

Need to redesign the data structures to fit our user journey. Currently it has fields we don't need while missing fields that are necessary.

One idea that might be interesting is to store each raw accounting `Entry` as its own block, maybe with a parent Id that points to the `Transaction` like how [Notion] does.

[dev week / marketing week]: https://www.bannerbear.com/blog/why-you-should-do-50-coding-and-50-marketing-as-a-solo-tech-founder/
[@yongfook]: https://twitter.com/yongfook
[Millefeuille]: https://millefeuille.app
[Notion]: https://www.notion.com/blog/data-model-behind-notion
