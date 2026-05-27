---
title: 三分法 / Three Column Method
date: 2026/05/25
description: Going into details about the three column running balance ledger
series: CPTA
tags: [簿財]
category: study notes
---

I'm not sure if the english Three Column Method is the right translation but it's what Google gave me. The english results don't seem right.

三分法 is a method for recording sales as it happens into a ledger. The aim is to simplify the recording process and is a standard method in Japanese companies.

## There are only 3 items

- 仕入 : purchase
- 売上 : sales
- 繰越商品 : carryover inventory

When purchasing / selling

```
仕入 10,000 | 買掛金 10,000
売掛金 10,000 | 売上 10,000
```

The counter parties don't particularly matter. It could also be 現金, but all my homework and exercises use 買|売掛金 so I'll use that.

Summary, 三分法の決算手続 is basically

- 売上原価 = 期首商品 + 当期仕入高 - 期末商品
- 整理前の仕入 (前T/B) = 当期仕入高
- 整理後の仕入 (後T/B, 損益勘定) = 売上原価

## Common exam questioning

The CPTA exams will often ask you to derive/create the 6 below formats.

- 決算整理仕訳
- 売上原価の計算
- 後 T/B の作成
- 損益勘定、残高勘定
- 会社計算規則の B/S, P/L
- 略式 B/S, P/L

As a starting point, we have these values

```
    決算整理前仕訳 (前T/B)
----------------------------
繰越商品 80,000 | 売上 250,000
仕入   150,000 |

決算整理事項:
期末商品棚卸高 30,000
```

The values in the T table refer to the values at the beginning of a period 期首商品.

### 1. 決算整理仕訳

| 勘定科目 | 金額   | 勘定科目 | 金額   |
| -------- | ------ | -------- | ------ |
| 仕入     | 80,000 | 繰越商品 | 80,000 |
| 繰越商品 | 30,000 | 売上     | 30,000 |

The first row refers to values at the beginning of the period 期首.

The second row refers to values at the end of the period 期末.

This is the standard 仕訳 and everyone must know how to create this, particularly for 簿記論.

### 2. 売上原価の計算

As a generalisation

> 前T/Bの金額 + 決算整理の金額 = 後T/Bの金額

Useful shorthand for quickly deriving the 売上原価. You don't actually have to draw the box, just visualise it mentally.

```
           原価BOX
-----------------------------
期首商品   nnn |
              | 売上原価   nnn    <--- 貸借差額 / the value we're looking for
______________|______________
仕入高     nnn |
              | 期末商品   nnn     <--- 決算整理事項より
------------------------------
^^^^^^^^^^^^^^
  前 T/B より
```

|          | 売上原価 | の仕訳   |         |
| -------- | -------- | -------- | ------- |
| 期首商品 | 80,000   | 売上原価 | 200,000 |
| 仕入高   | 150,000  | 期末商品 | 30,000  |

The left side sums up to 230,000, so the right side has to be the same value.

Since the 期末商品 is 30,000, the answer is `80k + 150k - 30k = 200k`

### 3. 後 T/B の作成

This is how you calculate it

|          | 勘定科目 | 金額   | 勘定科目 | 金額   |
| -------- | -------- | ------ | -------- | ------ |
| 期首商品 | 仕入     | 80,000 | 繰越商品 | 80,000 |
| 期末商品 | 繰越商品 | 30,000 | 売上     | 30,000 |

```
                           仕入イメージ
                  ----------------------------------
前T/B仕入    --->   当期仕入高   nnn | 期末商品     nnn    <--- 決算整理事項より
                  ----------------|-----------------
前T/B繰越商品 --->   期首商品    nnn | 売上原価   nnnn      <--- 貸借差額

                                    ^^^^^^^^^^^^^^
                                    後T/Bの仕入、損益勘定の仕入
```

This is the final Trial Balance values.

|          | 決算税理後残 | 高試算表 |         |
| -------- | ------------ | -------- | ------- |
| 繰越商品 | 30,000       | 売上     | 250,000 |
| 仕入     | 200,000      |          |         |

Calculate the 仕入 using the 原価BOX method.

### 4. 損益勘定、残高勘定

Basically, use the value from the 後T/B.

```
                          損益
                  -------------------
売上原価の額 --->   仕入  nnn | 売上  nnn   <--- 前T/Bの額


                          残高
                  -------------------
期末商品の額 --->   繰越商品  nnn |
```

The final calculations

|      | 損      | 益   |         |
| ---- | ------- | ---- | ------- |
| 仕入 | 200,000 | 売上 | 250,000 |

|          | 残     | 高  |     |
| -------- | ------ | --- | --- |
| 繰越商品 | 30,000 |     |     |

売上 and 繰越商品 values are directly from the initial statements. So we calculate the 仕入 using the 原価BOX method.

### 5. 会社計算規則の B/S, P/L

賃借対照表 B/S
| 科目 | 金額 | 科目 | 金額 |
| -------- | ------ | -------- | ------ |
| 流動資産 | | | |
| 商 品 | 30,000 | | |

損益計算書 P/L
| 科目 | 金額 | 金額 |
| -------- | ------ |------ |
| 売上高 | |250,000|
| 売上原価 | | |
| > 期首商品棚卸高 | 80,000 ||
| > 当期商品仕入高 | 150,000 ||
| > > 合計 | 230,000 ||
| > 期末商品棚卸高 | 30,000 | 200,000|
| > > 売上総利益 | |50,000 |

Rather than memorise the keywords, I understand it as so

- at the beginning of this period , we start by accounting for last period's left over inventory: `期首` + `商品` + `棚卸高`
- then we account for the purchasing cost for this period: `当期` + `商品` + `仕入高`
- then we calculate the remaining inventory at the end of this period: `期末` + `商品` + `棚卸高`
- `period` + `inventory` + `price`

売上原価 is derived from the below form

売上原価の内訳明細書
| 科目 | 金額 | |
| -------- | ------ | - |
| 期首商品棚卸高 | 80,000 | from 前T/B |
| 当期商品仕入高 | 150,000 | from 前T/B|
| 合計 | 230,000 ||
| 期末商品棚卸高 | 30,000 | from 決算整理事項 |
| 売上原価 | 200,000 ||

### 6. 略式 B/S, P/L

Simplified BS and PL without going into the details

賃借対照表 B/S
| 科目 | 金額 | 科目 | 金額 |
| -------- | ------ | -------- | ------ |
| 商 品 | 30,000 | | |

損益計算書 P/L
| 科目 | 金額 | 科目 | 金額 |
| -------- | ------ | -------- | ------ |
| 売上原価 | 200,000 | 売上高 | 250,000|
