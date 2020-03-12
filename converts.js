const { getSmileAccountCode } = require('./accounts.js')
const { getSmileAccountItemCode } = require('./accounts-item-code.js')

const getSmileCode = (value) => getSmileAccountCode(value)
const getSmileItemCode = (value) => getSmileAccountItemCode(value)
const getSmileCodeIfInputed = (value) => {
  if (value) {
    return getSmileAccountCode(value)
  }
  return value
}

const replaceComma = (value) => value

const taxValue = (value) => {
  return (value === '' || value === '0') ? '' : value
}

const taxCode = (value) => {
  let price = value[0]
  let type = value[1]
  if (price === '' || price === '0') {
    return '000'
  }
  switch(type) {
    case '0':
      return '000' //対象外
    case '1':
      return '115' //課税売上（10%）
    case '3':
      return '120'
    case '5':
    case '7':
      return '415' //課税仕入（10%）
    case '8':
      return '440' //非課税仕入
  }
  return '000'
}

const hendouZiyuCode = (value) => {
  if (['3331', '9211'].includes(value)) {
    return '9999'
  }
  return ''
}

module.exports = {
  getSmileCode,
  getSmileItemCode,
  replaceComma,
  hendouZiyuCode,
  taxValue,
  taxCode,
}
