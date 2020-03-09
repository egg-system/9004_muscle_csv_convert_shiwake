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
}
