# MailDecoder

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A library for encoding and decoding email content in Quoted-Printable and JIS character encodings.

## Demo
https://code4fukui.github.io/MailDecoder/

## Features
- Encodes and decodes Quoted-Printable and JIS encoded strings
- Provides `encode` and `decode` functions

## Requirements
None. This is a client-side JavaScript library.

## Usage
Import the `Mail` module and use the `encode` and `decode` functions:

```javascript
import { Mail } from "https://code4fukui.github.io/MailDecoder/Mail.js";

const encodedString = Mail.encode("Quoted-PrintableとJISで変換されたメールをデコードします");
const decodedString = Mail.decode(encodedString);
```

## License
MIT License