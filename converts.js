const { getSmileAccountCode } = require('./accounts.js')

const getSmileCode = (value) => getSmileAccountCode(value)
const getSmileCodeIfInputed = (value) => {
  if (value) {
    return getSmileAccountCode(value)
  }
  return value
}

const replaceComma = (value) => value

module.exports = {
  getSmileCode,
  getSmileCodeIfInputed,
  replaceComma,
}
