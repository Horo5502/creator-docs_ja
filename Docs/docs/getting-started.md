---
sidebar_position: -99
---
import CurrentUnityVersion from '@site/src/components/UnityVersionedText.js';

# ようこそ!

VRChatは、人々と出会い、ユーザーが作成した世界を探索し、独自のアバターを通じて自分を表現できるソーシャルプラットフォームです。熟練した開発者でも初心者でも、VRChat SDKは独自のアイデアを実現するのに役立ちます。

- [VRChat SDK入門](/sdk)
- 独自の[アバター](/avatars)をつくる
- 没入感のある[ワールド](/worlds)をつくる
- 複数の[プラットフォーム](platforms)向けに開発する
- [クリエイターエコノミー](/economy)に参加する
- ドキュメントに[貢献する](/contribute)
- [クリエイターロードマップ](/roadmap)を探索する

## クイックスタート

以下の手順に従って、VRChat SDKをすばやくセットアップしましょう。

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/0u1g0TYoJsU" title="VRChat Creator Companion" frameborder="0" allow="encrypted-media; gyroscope; web-share" allowfullscreen></iframe>
</div>

1. [Creator Companion](https://vrchat.com/download/vcc)をダウンロードしてインストールする。
2. Unityがインストールされていない場合は、Creator CompanionがUnity Hubのダウンロード、バージョン[<CurrentUnityVersion/>](/sdk/upgrade/current-unity-version/)のUnity（VRChat SDK 3.4.2以前はUnity 2019.4.31f1）のインストール、[Unityアカウントの作成](https://id.unity.com/account/new)を手助けします。
3. Creator Companionを使って新しいワールドまたはアバタープロジェクトを作成し、Unityで開く。
4. Unityで[ワールド](/worlds/creating-your-first-world)または[アバター](/avatars/creating-your-first-avatar)を構築し、SDKコントロールパネルを使ってVRChatでテストする。
5. 準備ができたら、SDKコントロールパネルを使ってワールドまたはアバターをVRChatに公開する！

## ワールド制作

VRChatのワールドを作成するには、Unityで典型的な3Dモデル、マテリアル、ライティングを使用してシーンを構築します。独自のスクリプトシステムである[Udon](/worlds/udon)を使ってインタラクティブ性を追加できます。Udonはビジュアルな[Udon Graph](/worlds/udon)で構築するか、[UdonSharp](https://udonsharp.docs.vrchat.com)を使ってC#ライクなコードを書くことができます。[ネットワーキング](/worlds/udon/networking)システムを使用して、プレイヤー間で体験を同期させることができます。

## アバター制作

VRChatのアバターを作成するには、まず3Dキャラクターを作成または見つけ、VRChatで動作するように[リギング](/avatars/creating-your-first-avatar#rigging-your-avatar)されていることを確認します。その後、[リギングされたモデルをインポート](/avatars/creating-your-first-avatar#importing-your-avatar)し、[エクスプレッションとコントロール](/avatars/expression-menu-and-controls)、[アバターダイナミクス](/avatars/avatar-dynamics)などを追加します。
