# CSV変換プログラムの設定ファイル
## 呼び出し方
- `npm run convert  -- -i{入力CSV} -o{出力CSV} -y{対象年}` 　例：`npm run convert  -- -iinput.csv -ooutput.csv -y2019`

## ファイル構成
|  ファイル名  |  役割  |
|----|----|
|index.js|設定ファイルのエントリポイント|
|inputs.js|入力するCSVのパース設定|
|outputs.js|出力するCSVの設定|
|dummy-outputs.js|レコード内容や変換内容に指定のない列を記載|
|convert.js|コードの変換用ロジックを記載|
|accounts.js|各コードの変換表を記載。key: before, value: afterの連想配列になる|
|accounts-item-code.js|補助科目変換表を記載。|

