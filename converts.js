const { getSmileAccountCode } = require('./accounts.js')

const getSmileCode = (value) => getSmileAccountCode(value)
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
  getSmileCodeIfInputed,
  replaceComma,
  hendouZiyuCode,
}
