---
sidebar_position: 1
---
# Udon

Udonを使うと、プレイヤーがあなたのワールドと面白い方法でインタラクトできるようになります！他のクリエイターが書いたスクリプトを使ったり、自分で独自のゲームやプレハブ、その他の体験を制作したりできます。

## Udonとは何か？

UdonはVRChatワールド用のプログラミング言語[^1]です。スクリプトはシーンオブジェクト、[プレイヤー](./players)、[同期されたネットワーク変数](./networking)などとインタラクトできます。Udonを使うと、あなたのワールドが生き生きとします！

UdonはVRChat *および* Unityエディターの両方で動作します。ワールドをビルドしてアップロードすることなく、スクリプトをテストしてデバッグできます。また、[Udonのデバッグ機能](debugging-udon-projects)も利用できます。

[VRChatワールドを制作した後](/sdk/)、Udonスクリプトを作成する主な方法は2つあります：
- [Udon Node Graph](./graph)は、ノードとワイヤーを使ってフロー、入力、出力を接続するビジュアルプログラミングインターフェースです。
  - GraphはUnityのアニメーター、Blenderのシェーダー、ジオメトリノード、Unrealのブループリントに似ています。
  - GraphはVRChat SDKに特有で、サードパーティツールを必要としません。
  - プログラミングが初めての方や、非常にシンプルなスクリプトだけを制作したい方はGraphを使ってください。
- [UdonSharp](./udonsharp)を使うと、C#を使ってスクリプトを制作できます。
  - UdonSharpはUnityの組み込みC#スクリプティングシステムに似ています。
  - ほとんどのUdonSharpユーザーは[IDE](https://ja.wikipedia.org/wiki/%E7%B5%B1%E5%90%88%E9%96%8B%E7%99%BA%E7%92%B0%E5%A2%83)を使用します。[Visual Studio](https://visualstudio.microsoft.com/ja/vs/unity-tools/)は無料で、[Rider](https://www.jetbrains.com/ja-jp/rider/)は非商用利用で無料です。
  - すでにプログラミングに慣れている方や、強力なスクリプトを制作したい方はUdonSharpを使ってください。


そして、もしあなたが卓越したユーザーなら：

- 独自のコンパイラを書いてUdon Assemblyコードを生成できます。
  - VRChat Udonは技術的にはUdon Assemblyからコンパイルされたバイトコードを実行する[仮想マシン](https://ja.wikipedia.org/wiki/%E4%BB%AE%E6%83%B3%E3%83%9E%E3%82%B7%E3%83%B3)です。
  - Udon Assemblyコードを手動で書くことも*可能*ですが、これは非常に稀です。

## バグ報告と機能リクエスト
バグ報告や機能リクエストを提出するには、VRChatの[Cannyフィードバックボード](https://vrchat.canny.io/udon)を使用してください。

[^1]: 技術に詳しい方へ：**VRChat Udon**は、**Udon Assembly**からコンパイルされたバイトコードを実行するVMです。**Udon Assembly**は、組み込みの**VRChat Udon Node Graph** UIを使用して生成したり、自分で**Udon Assembly**を書いたり、独自のコンパイラを作成して**Udon Assembly**やバイトコードプログラムを直接生成することもできます。

