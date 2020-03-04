const { getSmileAccountCode } = require('./accounts.js')
const { getSmileAccountSubCode } = require('./accounts-subcode.js')

const getSmileCode = (value) => getSmileAccountCode(value)
const getSmileSubCode = (value) => getSmileAccountSubCode(value)
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
  getSmileSubCode,
  getSmileCodeIfInputed,
  replaceComma,
  hendouZiyuCode,
}
