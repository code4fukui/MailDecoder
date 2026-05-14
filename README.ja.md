# MailDecoder

Quoted-PrintableおよびJIS文字コードでメールのコンテンツをエンコード・デコードするためのライブラリです。

## デモ
https://code4fukui.github.io/MailDecoder/

## 機能
- Quoted-PrintableおよびJISでエンコードされた文字列のエンコードとデコード
- `encode` および `decode` 関数の提供

## 要件
なし。本ライブラリはクライアントサイドのJavaScriptライブラリです。

## 使い方
`Mail` モジュールをインポートし、`encode` および `decode` 関数を使用します。

```javascript
import { Mail } from "https://code4fukui.github.io/MailDecoder/Mail.js";

const encodedString = Mail.encode("Quoted-PrintableとJISで変換されたメールをデコードします");
const decodedString = Mail.decode(encodedString);
```

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
