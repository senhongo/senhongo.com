---
title: Store what you compute
date: 2025/07/13
description:
series:
tags: []
category: dev
---

Einstein once said "Never memorise what you can look up in a book". ([No, not really](https://www.businessinsider.com/memorization-facts-and-learning-to-learn-2014-9))

Some React dev also once said "Never store what you can derive".

Say you have a list of numbers 1, 2 and 3. The sum of those numbers is 6. The calculation to sum those numbers up is simple, so you shouldn't store them.

Because if you store the derived output, any change requires edits in at least 2 areas, making it error prone. Especially if it's a piece of code you haven't looked at in half a year.

I've had a change of heart.

Nowadays storage is cheap and compute is expensive so rather than perform the calculation each time the page is loaded (and multiply by number of users and devices), I think it's probably more efficient to do the calculation just once.

It also comes in handy when you're creating a report of reports and the number is just there. Or you're performing an audit. Or you just want to look at some data without having to do math each time.

Yes, there's a nuance. If the number is meant to be manipulated, then derive it each time. But if you're just generating reports, finish your fucking math homework.
