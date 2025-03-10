Github Pages: https://horo5502.github.io/creator-docs_ja/

# Creator-Docs-ja
[VRChat公式クリエイタードキュメント](https://creators.vrchat.com/)を**非公式に**翻訳したものです。  
翻訳途中なので、まだ翻訳されていないページもあります。未翻訳のページは原文が表示されます。

<!-- 新規翻訳の貢献を受け入れています! 詳細は[こちら](https://horo5502.github.io/creator-docs_ja/how-to-contribute/)から。 -->

公式ドキュメントのGithubリポジトリ:  
Creator Docs  
https://creators.vrchat.com/

VCC Docs  
https://vcc.docs.vrchat.com/  

UdonSharp Docs(内容は本家リポジトリに移行中のよう?)  
https://udonsharp.docs.vrchat.com/  

---
以下Docusaurusの自動生成README
# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.