const moment = require('../../csv/node_modules/moment/moment.js')

const parses = {
  '月日': (value) => {
    const dateString = value.replace('*', '2019').replace(' ', '')
    return moment(dateString, 'YYYYM.D').format('YYYYMMDD')
  }
}

module.exports = {
  inputs: {
    json: true,
    parses: parses,
  }
}
