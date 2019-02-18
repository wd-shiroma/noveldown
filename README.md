# Noveldown

https://noveldown.drdr.work

## what's this

This is a simple page to preview sentences marked down.
 
In Japanese, newspapers and books are written vertically.  
However, horizontal writing is common in web browsers.  
I think that it is necessary to write vertically in order to write beautiful sentences.

This simple page is supposed to be used as a utility for writing beautiful Japanese sentences.

If you need support for other languages, please contact me.

## なにこれ

マークダウンで書いた文章を縦書きでプレビュー表示するためだけのページです。

マークダウンで小説を書きたいと思った時に利用してください。  

そんな状況あまりないですね。そうですね。例えばマークダウンが使えてカスタムCSSが使えるブログに自分の小説を投稿したくなったときとか。皆さんそういう経験ありますよね。あるはずです。僕は信じています。

例えば [WriteFreely](https://writefreely.org) ってブログページを立ち上げるためのWebアプリケーションがあるんですが、それにプレビュー機能がないので、「縦書きにしたらどういうスタイルになるんだろう」って思うはずです。というか僕がそう思いました。なので作りました。それだけです。

いちおうGitHubなので冒頭に英語で概要は書いたけど、正直そんなに難しいことしてないし、イチから作ったほうが簡単だぜ！ってなると思う。

## できること・できないこと

### できること

* ページの左側にマークダウンを書くと右側に縦書き文章が表示されます。
* 設定から、カラーテーマを変更できます(ホワイト・ダーク)。

### できないこと

* 文章の保存：書いてた文章が途中で消えても責任は負えません。
* モバイル対応：多分レイアウト崩れます。
* 多言語対応：して欲しい人が現れたらするかも。
* 青空文庫ルビ：ちょっと欲しいよね。わかる。
* その他：出来ないことがありすぎて挙げきらない。


## 免責事項的な

いかなる不具合が起きても面倒なので僕は責任を負いません。ただ不具合や改善案があってIssueあたりに書いてくれれば対応するなりしないなりすると思います。

あと、偉そうにフリーライセンスAGPL3を適用させるので、フォーク元を掲げた上で自由に改造・再配布してもらって構いません。流石にそこまでするものでもないと思うけど。

## Development

### Enviroments

Node.js (10 or later)
yarn (latest)

### installation

```shell
# install modules
yarn install

# run debug server
yarn run dev

# build javascript and stylesheets
yarn run build

# deploy GitHub Pages
yarn run deploy
```
