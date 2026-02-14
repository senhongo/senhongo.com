---
title: Developing mobile sites with the iOS simulator
date: 2025/05/11
description:
series:
tags: [iOS, safari]
category: dev
---

![screenshot of the iPhone Simulator showing the current website](@/assets/images/blog/ios-simulator.png)

While developing this website, I noticed that the responsive design mode in Safari looked different than when actually looking at the site from my phone.

I know there's a way to load the iOS simulator with the Safari dev console but couldn't remember how. I managed to get it working somehow but some of the steps were non-obvious.

1. Install Xcode
1. Install the iOS simulators when prompted
1. Run XCode
1. From the menubar, Xcode > Open Developer Tool > Simulator
   - to change device, File > Open Simulator > pick your preferred device
1. Start up (iOS)Safari inside the Simulator and open the target website
1. In (macOS)Safari menubar, Develop > iPhone Simulator

I haven't figured out how to get `Open page with Simulator` to work.
