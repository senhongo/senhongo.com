---
title: Merge images with Imagemagick
date: 2025/08/02
description:
series:
tags: [imagemagick, images]
category: thoughts
---

Install [imagemagick](https://imagemagick.org/index.php) with:

`brew install imagemagick`

Then run the below command to merge 1.jpg and 2.jpg into a new 12.jpg image.

`magick 1.jpg 2.jpg +append 12.jpg`
