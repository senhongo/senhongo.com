---
title: 簿記一巡の手続 / Accounting Cycle
date: 2026/04/19
description: The Japanese Accounting cycle mostly the same with some slight differences
series: CPTA
tags: [motivation]
category: study notes
wip: true
---

Quick summary

- 開始手続
  - 開始記入
  - 期首再振替
- 営業手続
  - 期中取引の処理
- 決算手続
  - 決算整理前試算表作成
  - 決算整理
  - 決算整理後試算表作成
  - 決算振替
  - 帳簿の締切
  - 財務諸表の作成

## 大陸式 & 英米式

大陸 = Continental Europe, ie. Germany, France etc.

Strict, do everything by the rules, no skipping 仕訳 / journal entry. Everything has to be recorded.

英米 = Anglo, ie. US, UK.

Flexible. 仕訳 / Journal entries are skipped so long as the numbers add up at the end.

## 開始記入 / Opening Entry

Convert left over items from last year's books to this year's.

Basically there are only 4 経過勘定項目 / items to think about here:

| -      | 経過勘定項目                 | -                     |
| ------ | ---------------------------- | --------------------- |
| 見越し | 未払費用 / Accrued Expenses  | 負債 / Liability      |
| 見越し | 未収収益 / Accrued Revenue   | 資産 (売掛金) / Asset |
| 繰延べ | 前払費用 / Deferred Expenses | 資産 / Asset          |
| 繰延べ | 前受収益 / Deferred Revenue  | 負債 / Liability      |

- 前受収益は先にお金をもらい、後でサービスを提供する義務が発生するから → 負債
- 前払はその逆で、先にお金を払ったけど、後でサービスを受ける権利があるから → 資産
- 未払いは、サービスはすでに受けたから、お金を払う義務が発生 → 負債
- 未収は、サービスを提供したから、お金を請求する権利 → 資産

The terms 見越し and 繰延べ are unfamiliar, hence confusing. I know that 未〇〇 means 見越し and 前〇〇 means 繰延べ, I just don't have an intuitive understand of what those words mean.

In accounting terms, 繰延べ means to records the transaction in next year's books even though the service has already been delivered. Conversely, 見越し is to records the transaction in this year's books even though the services hasn't been delivered.

見越し / Accrual expense/revenue recorded _before_ payment, 繰延べ / Deferrals expense/revenue recorded _after_ payment

#### 未〇〇 adds | 前〇〇 subtracts

- 未払 = 借) 費用 | 貸) 未払 = more expenses
- 前払 = 借) 前払 | 貸) 費用 = less expenses
- 未収 = 借) 未収 | 貸) 収益 = more revenue
- 前収 = 借) 収益 | 貸) 前収 = less revenue

## What do we actually do?

期首再振替 / Reversing Entry are made at the beginning of a new accounting period. The Japanese is confusing jargon, it's much more literal in English. Basically flip left and right 賃借反対.

This is a mandatory step that cannot be skipped.

Last year's debts become this year's credits while the credits become debts.

> **前期末の決算整理における費用の見越 / Closing entry for last period**
>
> (借) 支払〇〇 | (貸) 未払〇〇

becomes this

> **当期首の再振替 / Opening entry for current period**
>
> (借) 未払〇〇 | (貸) 支払〇〇

The other 3 scenarios are skipped but they're exactly the same. Just reverse the sides.

## Representing them in the B/S 賃借対照表

| 表示区分         | 経過勘定項目 | 一年基準の適用  | 表示科目     |
| ---------------- | ------------ | --------------- | ------------ |
| 流動負債         | 未払費用     | 原則として不要  | 未払費用     |
|                  | 前受収益     | 同上            | 前受収益     |
| 流動資産         | 未収収益     | 同上            | 未収収益     |
|                  | 前払費用     | 1年以内に費用化 | 前払費用     |
| 投資その他の資産 |              | 1年超えて費用化 | 長期前払費用 |

## Difference when filling in the ledger and the B/S

In a ledger, we want to be as detailed as possible to make it easier for future analysis. So entries are written as 未払利息, 未払給料, 未払家賃 etc

In the B/S, we want a higher level view, everything comes under 未払費用. Same as for 未収, 前受, 前払.
