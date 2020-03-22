const { getSmileAccountCode, getAccountDepartmentCode } = require('./accounts.js')
const { getSmileAccountItemCode } = require('./accounts-item-code.js')
const { getSmileTaxCode } = require('./tax-code.js')

const getSmileCode = (value) => getSmileAccountCode(value)
const getSmileItemCode = (value) => getSmileAccountItemCode(value)
const getSmileCodeIfInputed = (value) => {
  if (value) {
    return getSmileAccountCode(value)
  }
  return value
}
const getTaxCode = (accountCode, date) => {
  let smileCode = getSmileCode(accountCode)
  return getSmileTaxCode(smileCode, date)
}

const replaceComma = (value) => value

const smileTaxValue = (tax, taxCode) => {
  if (tax === '' || tax === '0') {
    return ''
  }
  if (['000', '120', '440'].includes(taxCode)) {
    return ''
  }
  return tax
}

const taxValue = (accountCode, date, tax) => {
  let taxCode = getTaxCode(accountCode, date)
  return smileTaxValue(tax, taxCode)
}

const taxDivision = (accountCode, date, tax) => {
  let value = taxValue(accountCode, date, tax)
  return (value === '' || value === '0') ? '0' : '1'
}

const hendouZiyuCode = (value) => {
  if (['3331', '9211'].includes(value)) {
    return '9999'
  }
  return ''
}

module.exports = {
  getSmileCode,
  getTaxCode,
  getAccountDepartmentCode,
  getSmileItemCode,
  replaceComma,
  hendouZiyuCode,
  taxValue,
  taxDivision,
}
