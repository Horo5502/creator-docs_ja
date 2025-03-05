---
sidebar_position: -1
---

# はじめに

[アバター](/avatars)や[ワールド](/worlds)を作成する前に、以下のステップを実行してください。

:::tip

VRChat自体が初めての方は、[VRChatの「はじめに」](https://vrch.at/getting-started)ページを読んでください。

:::

**[VRChat Creator Companion](https://vcc.docs.vrchat.com/)** は、最も簡単で迅速に始める方法です。これにより、[Unity](https://unity.com/)とVRChatソフトウェア開発キット(SDK)がインストールされます。

- VRChatはUnityゲームエンジンを使用しています。アバターやワールドもUnityで作成されます。
- VRChat SDKを使用すると、Unityを使ってアバターやワールドを作成できます。

## 最初のプロジェクト
最初のプロジェクトには、Windowsを使用することをおすすめします。

1. [VRChat Creator Companion(VCC)をダウンロード](https://vrchat.com/download/vcc)します。
    - [ドキュメント](https://vcc.docs.vrchat.com/)を読んでください。
2. VCCをインストールします。
    - デフォルトのインストール場所は`%LocalAppData%/Programs/VRChat Creator Companion`ですが、好きなように変更できます。
4. VCCは自動的に開くはずです。開かない場合は、Windowsで「Creator Companion」と検索してください。
5. 「Create New Project」をクリックします。
6. 「Avatar」または「World project」を選択します。
7. プロジェクトに名前を付けます。
8. 場所を選択します。
9. 「Create Project」をクリックします。

:::note
Android、Quest、またはiOSにアップロードしたいですか？[プラットフォーム](/platforms)ページを読んでください。
:::

## プロジェクトを開く

新しいプロジェクトを開くことができます！新しいプロジェクトを作成した後、Creator Companionの次のページに**Open Project**ボタンが表示されます。また、左サイドバーの**Projects**タブからアクセスすることもできます。

プロジェクトがリストにない場合は、**Create New Project**の横にあるドロップダウンメニューをクリックし、プロジェクト画面から**Add Existing Project**をクリックして選択してください。プロジェクトが開いたら：

1. タイトルバーを確認して、`PC, Mac & Linux Standalone <DX11>`で終わっていることを確認してください。
    - そうでない場合は、`File > Build Settings...`に移動し、`PC, Mac & Linux Standalone`を選択して、左下の`Switch Platform`をクリックしてください。

2. `VRChat SDK > Show Control Panel > Authentication`に移動します。

3. VRChatアカウントにサインインしてください。作成したコンテンツをアップロードするためにはこれが必要です。
    - コンテンツをアップロードするには、少なくとも「New User」[トラストランク](https://docs.vrchat.com/docs/vrchat-safety-and-trust-system)のVRChatアカウントが必要です。Steam、Meta、またはViveportアカウントではコンテンツをアップロードできません。

## Unity Hubを使用する場合
おすすめはしませんが、VCCを使わずに自分でUnityをインストールしたい場合は、[現在サポートされているUnityバージョン](/sdk/upgrade/current-unity-version)ページを確認し、Unity Hubを使用してVRChatが現在サポートしているバージョンのUnityをインストールしてください。

プロジェクトのセットアップにVCCを使用しなかった場合は、SDKもインストールする必要があります。[VRChat Creator Companion](https://vcc.docs.vrchat.com/guides/getting-started)を通じて行ってください。

Unity Hubだけを使ってプロジェクトを作成するには：
* Unity Hubを(またはあえてその道に進んだ場合は、単にエディタを)開きます。
* 新しいプロジェクトを作成し、**3Dに設定して保存**します。
* HDRPやURPは使用しないでください。VRChatはそれを使用しません。

Unity Hubだけを使ってプロジェクトを開くには：
* 右上の**Open**をクリックし、プロジェクトがあるディレクトリを選択します。

## ヒント

* Meta Quest用にVRChatのコンテンツを作成する場合は、Android用にもビルドする必要があります。詳細は[Androidドキュメント](/platforms/android/index.md)を確認してください。
* プロジェクトは大容量のストレージドライブに保存してください。Unityプロジェクトは非常に大きくなることがあります。特にバージョン管理ソフトを使用する場合はなおさらです。
* たくさんの異なるアバターやワールドのために1つのプロジェクトを使用しないでください。これは将来の移行を非常に面倒にします！
* [Git](https://git-scm.com/)や[Unity Version Control](https://unity.com/solutions/version-control)のようなバージョン管理ソフトを使えるなら、ぜひ使ってください！破壊的な変更を簡単に元に戻すことができます。

### 「プレイヤー」と「ユーザー」の用語の理解

VRChatでは、「プレイヤー」と「ユーザー」という用語は文脈によって異なる意味を持つことがあります：

- ユーザー：これは、VRChatを使用しているすべての人を指す標準的な用語です。あなたと同じワールドにいるかどうかに関わらず、プラットフォーム上のすべての参加者に対して使用される一般的な用語です。
- プレイヤー：技術的には、「プレイヤー」はワールドインスタンス内でのユーザーの個別のインスタンスを具体的に指します。この区別は、基盤となるシステムや特定の技術的な機能（マルチプレイヤーの相互作用など）にとってより関連性があります。たとえば、ローカルでワールドをテストする際には、同じユーザーによる複数のプレイヤーがワールドインスタンスに存在することがあります。

### お次は？
プロジェクトの準備が整いました！[ワールド作成](/worlds)や[アバター作成](/avatars)に進んでください。

もし、新しい空のプロジェクトでもエラーが発生する場合は、[サポートチームにご連絡ください](https://vrch.at/support)。
