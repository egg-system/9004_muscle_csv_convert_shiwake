const commander = require('commander')
  .option('-c, --config-file <type>')
  .option('-i, --input-csv <type>')
  .option('-o, --output-csv <type>')
  .option('-y, --shiwake-year <type>')
commander.parse(process.argv)


module.exports = {
  commander,
}
