---
title: Mac Studio Setup
date: 2023/04/26
description: Setting up my Mac Studio
series:
category: dev
---

I'm sure I had a blog or gist for this back when I did my retina MacBook or 2018 Mac Mini, but I can't find it anymore so here it is, fresh!

## MacOS

### Dock

Auto hide Dock

- システム設定 > デスクトップと Dock > Dock を自動的に表示 / 非表示
  - toggle on

### Keyboard

- システム設定 > キーボード > キーボードショットカット > ファンションキー
  - toggle on

### Internet accounts

- login to various accounts

### AppStore

- [Bear](https://bear.app)

### Safari

- Enable dev tools
  `詳細 > メニューバーに”開発”メニューを表示`

- set blank Homepage
- download 1Password for Safari
  - [Access Your Passwords Online With 1Password For Safari | 1Password](https://1password.com/resources/guides/1password-for-safari/)

### Finder

1. Open Finder, then to settings
   - Finder > 設定
1. デスクトップに表示する項目, check the following
   - 外部ディスク
   - 接続中のサーバ
1. 新規 Finder ウインドウで次の表示
   - select preferred folder (ダウンロード or 書類)
1. 詳細, **uncheck** the following
   - ゴミ箱を空にする前に警告を表示
   - iCloud Drive から削除する前に警告を表示
1. サイドバー, check the following
   - Airdrop
   - アプリケーション
   - ダウンロード
   - $USER folder
   - iCloud Drive
   - 共有
   - デスクトップ
   - 書類
   - ハードディスク
   - 外部ディスク
   - CD, DVD
   - クラウドストレージ
   - Boujour
   - 接続中のサーバ

## Homebrew

Run below command in terminal to install [Homebrew](https://brew.sh).

```
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)""

$ brew install iterm2 coconutbattery figma miro vlc visual-studio-code google-chrome microsoft-edge firefox tableplus the-unarchiver 1password slack yarn git go openjdk sqlite google-cloud-sdk docker node MonitorControl
```

## iTerm

1. Install oh-my-zsh

   - `sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`

2. `vim ~./zshrc` and change theme to `agnostic`
   - [GitHub - agnoster/agnoster-zsh-theme: A ZSH theme designed to disclose information contextually, with a powerline aesthetic](https://github.com/agnoster/agnoster-zsh-theme)
3. install [Powerline fonts](https://github.com/powerline/fonts) for the theme, then update iTerm settings to use it
   - iTerm > Settings > Profiles > Text
   - change Font to `Noto Mono for Powerline`
   - iTerm > Settings > Profiles > Color
   - change Color Presets to Pastel
4. Window > Save Window Arrangement > name as Default
5. iTerm > Settings > General > Startup
   - select `Open Default Window Arrangement` from dropdown

## nvm

1. install nvm
   - https://github.com/nvm-sh/nvm
   - `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash`
1. set preferred version as default
   - `nvm alias default VERSION`

## Yarn

install globally (consider switching to NPM)

```
$ yarn global add typescript firebase-tools
```

## Dev Env

1. setup SSH

```
$ ssh-keygen -t ed25519 -C "name@email.com"

# Start the ssh-agent in the background.
$ eval "$(ssh-agent -s)"

# Update SSH config for macOS
$ vim ~/.ssh/config

Host github.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519

# add SSH key to macOS Keychain
$ ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

2. add SSH to [GitHub settings](https://github.com/settings/keys)

```
# Copies the contents of the id_ed25519.pub to clipboard
$ pbcopy < ~/.ssh/id_ed25519.pub
```

3. setup git

```
git config --global user.name "Your Name"
git config --global user.email "name@email.com"
git config --global init.defaultBranch main
```

4. install `docker for mac`
   - [Install Docker Desktop on Mac | Docker Documentation](https://docs.docker.com/desktop/install/mac-install/)
5. Visual Studio Code > bottom left gear icon > turn on settings sync
6. install [GitUp](https://gitup.co/) git client
7. setup projects direction

```
# create projects folder in root
$ mkdir ~/projects
$ cd $_

# create organisation folder
# then git clone projects into their respective folders
$ mkdir legend\ of\ code
$ cd $_

# repeat for other organisations
```
