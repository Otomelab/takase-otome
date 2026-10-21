# 店じまいの合図 ― 高瀬航 × 小野寺由衣

パーソナルトレーナー × クライアントを題材にした、ブラウザで遊べる乙女向けノベルゲームです。
HTML / CSS / JavaScript だけで動き、ビルドや外部ライブラリは不要です。

- 登場人物：高瀬 航（32）／小野寺 由衣（29）
- 構成：全7回（セッション1〜7）

## 主な機能

- テキスト送り（タップ／クリック）とタイプライター風の表示
- 選択肢による分岐
- **AUTO** オート再生
- **LOG** バックログ
- **BGM** 切り替え（Web Audio API で生成するBGM・鼓動音）
- 心拍数（BPM）メーター：タップすると高瀬の「電子カルテ／裏メモ」を表示
- 立ち絵の表情差分（高瀬10種・由衣11種）、背景切り替え、鼓動エフェクト
- タイトル画面のスチルギャラリー
- スマホ向けレイアウト（ホーム画面追加対応のメタタグ設定あり）

## 遊び方

`index.html` をブラウザで開くだけで起動します。
ローカルサーバーで動かす場合の例：

```bash
python3 -m http.server 8000
# http://localhost:8000 を開く
```

※ フォントは Google Fonts（Shippori Mincho / Zen Kaku Gothic New）を読み込むため、オンライン環境推奨です。

## ファイル構成

```
index.html          画面レイアウト（タイトル・会話ウィンドウ・ログ・ギャラリー）
style.css           スタイル
game.js             ノベルエンジン（進行・選択肢・AUTO・ログ・カルテ表示）
sound.js            BGM・効果音（Web Audio API）
scenario.js         シナリオ本体（第1回）と裏カルテデータ
scenarios/
  session_2.js 〜 session_7.js   第2回〜第7回のシナリオ
assets/             背景・立ち絵・スチル画像
  expressions/takase/   高瀬の表情差分
  expressions/yui/      由衣の表情差分
```

## シナリオの追加方法

`scenarios/session_N.js` で `window.SCENARIO_SESSIONN` に `scenes`（必要なら `secretNotes`）を定義し、
`index.html` で読み込みます。`game.js` は起動時に `SCENARIO_SESSION2`〜`SCENARIO_SESSION7` を `scenario.js` のデータへ統合するので、第8回以降を足すときは `game.js` の統合リストにも追加が必要です。

## 注意

大人の女性向けの恋愛表現を含みます。
