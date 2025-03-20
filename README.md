# ex-gen-app

このリポジトリは、Expressジェネレータでアプリを作るための参考例です。
対象は Node.js とバックエンドサーバについて概要を理解しているおり、アプリケーションフレームワークを
利用してアプリケーションを作ろうと思っている人です。

Express は、シンプルなフレームワークで簡単なものは十分できますので、これを使います。
ここのソースは、初心者教育用に次のような追加・修正を加えた。
* indexページの表示内容を増やした。
* helloページを追加して、'POST'メソッドの取扱例を示した。
* `header.ejs` と `footer.ejs`を追加して、ヘッダとフッタを共通化した。
* session機能を利用して情報を保持する例をusersページにいれて見た。

## 最初に
Express を使う場合、Expressに必要なモジュールやファイルを一度に用意してくれる Expressジェネレータを
インストールしておきます。

コマンドプロンプト、または、ターミナルから npm を使ってインストールします。
-g をオプションにつけて、グローバル環境にインストールします。

`> npm install -g express-generator`

## Expressジェネレータでアプリを作るフォルダを生成する

次のような手順で進める。
```
> express --view=ejs ex-gen-app    ；ex-gen-appのところはアプリ名
> cd ex-gen-app                    ；アプリケーション用フォルダに移動
> npm install                      ；必要なパッケージをインストールする
```
その後、`npm start`　でサーバが起動される。
ブラウザから、`http://localhost:3000` をアクセスすると、Welcomeメッセージが返る。

アプリケーションは、これをベースにView、Controlの部分を主として追加／改造する。

セッション機能を利用するには、以下のようにして`epress-session`をインストールする。
```
> npm install express-session
```

## このアプリの内容

1. `http://localhost:3000`  welcome ページ　テキストを表するだけ
2. `http://localhost:3000/hello`  UserName とメッセージを入力する’POST’を使ったページ
3. `http://localhost:3000/users`  User のメッセージを追加表示するページ

### 注記

このリポジトリには、基本的に修正を加えないフォルダ /bin と /node-modules は含んでいない。

このソースは、Windows 11 PCにて作成したものです。

