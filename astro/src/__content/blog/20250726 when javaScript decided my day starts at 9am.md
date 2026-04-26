---
title: When JavaScript Decided My Day Starts at 9AM
date: 2025/07/26
description:
series:
tags: [javascript, date, timezones]
category: dev
---

## TL;DR:

new Date('2000-01-01') creates a date at midnight UTC, not local time.  
In Japan (UTC+9), that means 2000-01-01T09:00:00, so our dashboard filters missed all data created before 9AM.

## The Bug

We noticed something strange while fetching data for an admin dashboard: **records created before 9AM were missing!**

Our date filters were simple:

```html
<input type="date" />
```

Which outputs a simple string like

```js
const minDateString = '2000-01-01';
```

So we wrapped it in a Date constructor and compared it in our filter

```js
new Date(minDate) < item.date && item.date < new Date(maxDate);
```

How hard can it be, right? Well...

## Why It Happened

I knew that `new Date('YYYY-MM-DD')` sets the time to midnight. What I didn’t know was that it sets it to midnight in UTC.

For Japan (UTC+9), that means the Date actually becomes `2000-01-01T09:00:00+09:00`.

So when we said “greater than January 1st”, we really meant “greater than 9AM on January 1st”. Hence, anything created from midnight to 8:59:59 was excluded.

## The Fix

Instead of letting new Date() assume UTC, explicitly set it to midnight. (And while we're at it, set the max date range to 1ms before the next day.)

```js
const minDate = new Date(`${minInputDate}T00:00:00`);
const maxDate = new Date(`${maxInputDate}T23:59:59.999`);
```

## Lessons Learned

- `new Date('YYYY-MM-DD')` → midnight UTC
- Always check how date strings are interpreted when time zones matter.
- For filters, prefer constructing with year/month/day explicitly or append a local time.
