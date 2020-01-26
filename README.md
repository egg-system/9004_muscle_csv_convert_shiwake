# CSV変換プログラムの設定ファイル
## 呼び出し方
- 変換ツールから呼び出す
    - 変換ツールURL
    - https://github.com/nuno929/csv-convert
- `npm run convert -c{本リポジトリまでの相対パス}/src/index.js -i{入力CSV} -o{出力CSV}`
    - 詳細は、変換ツールのレポジトリを参照

## ファイル構成

|ファイル名|役割|
|--|--|
|index.js|設定ファイルのエントリポイント|
|inputs.js|入力するCSVのパース設定|
|outputs.js|出力するCSVの設定|
|dummy-outputs.js|レコード内容や変換内容に指定のない列を記載|
|convert.js|コードの変換用ロジックを記載|
|accounts.js|各コードの変換表を記載。key: before, value: afterの連想配列になる|