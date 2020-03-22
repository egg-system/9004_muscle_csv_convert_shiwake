const moment = require('moment')
const { commander } = require('./commander.js')

const parses = {
  '月日': (value) => {
    const dateString = value.replace('*', commander.shiwakeYear).replace(' ', '')
    return moment(dateString, 'YYYYM.D').format('YYYYMMDD')
  }
}

module.exports = {
  inputs: {
    json: true,
    parses: parses,
  }
}
