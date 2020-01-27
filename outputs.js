const {
  getSmileCode,
  getSmileCodeIfInputed,
  replaceComma,
} = require('./converts.js')

const { dummuy } = require('./dummy-outputs.js')

const exportColumns = [
  { name: '伝票区切', default: '1' },
  { name: '連番', default: '0' },
  { name: '未使用' },
  { name: '伝票日付', from: '月日' },
  { name: '伝票№' },
  { name: '決算区分', default: '1' },
  { name: '行', default: '1' },
  { 
    name: '借方科目ｺｰﾄﾞ',
    from: '借方CD',
    convert: getSmileCode,
  },
  {
    name: '借方内訳ｺｰﾄﾞ',
    from: '借方補助',
    default: '000000',
    convert: getSmileCodeIfInputed
  },
  { name: '借方税ｺｰﾄﾞ' },
  { name: '借方部門ｺｰﾄﾞ', default: '000000' },
  { name: '未使用' },
  { name: '未使用' },
  { name: '未使用' },
  { name: '未使用' },
  { name: '未使用' },
  { name: '未使用' },
  { name: '未使用' },
  { name: '未使用' },
  { name: '未使用' },
  { name: '未使用' },
  {
    name: '借方金額',
    from: '取引金額',
    convert: replaceComma,
  },
  {
    name: '借方消費税',
    from: '内、消費税等',
    convert: replaceComma,
  },
  { name: '借方税区分', default: '1' },
  { name: '借方摘要ｺｰﾄﾞ' },
  { name: '借方摘要', from: '元帳摘要（仕入れ資産等の総称）' },
  { name: '借方変動事由ｺｰﾄﾞ' },
  { name: '借方Ｃ／Ｆ除外区分' },
  {
    name: '貸方科目ｺｰﾄﾞ',
    from: '貸方CD',
    convert: getSmileCode,
  },
  {
    name: '貸方内訳ｺｰﾄﾞ',
    from: '貸方補助',
    convert: getSmileCodeIfInputed
  },
  { name: '貸方税ｺｰﾄﾞ' },
  { name: '貸方部門ｺｰﾄﾞ', default: "000000" },
  { name: '未使用' },
  { name: '未使用' },
  { name: '未使用' },
  { name: '未使用' },
  { name: '未使用' },
  { name: '未使用' },
  { name: '未使用' },
  { name: '未使用' },
  { name: '未使用' },
  { name: '未使用' },
  {
    name: '貸方金額',
    from: '取引金額',
    convert: replaceComma,
  },
  {
    name: '貸方消費税',
    from: '内、消費税等',
    convert: replaceComma,
  },
  { name: '貸方税区分', default: '1' },
  { name: '貸方摘要ｺｰﾄﾞ' },
  { name: '貸方摘要', from: '元帳摘要（仕入れ資産等の総称）' },
  { name: '貸方変動事由ｺｰﾄﾞ' },
  { name: '貸方Ｃ／Ｆ除外区分' },
  { name: '仕訳入力区分', default: '1' },
  { name: '借方仕入先ｺｰﾄﾞ' },
  { name: '借方手入力仕入先名称' },
  { name: '貸方仕入先ｺｰﾄﾞ' },
  { name: '貸方手入力仕入先名称' },
  { name: '借方債務存在区分' },
  { name: '未使用' },
  { name: '借方前渡存在区分' },
  { name: '借方債務支払予定日' },
]

module.exports = {
  outputs: {
    columns: exportColumns.concat(dummuy)
  }
}
