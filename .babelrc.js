// we could use the istanbul API
// to make test-run aware of code coverage
// and between each require() collect the coverage to report it
// + would avoid having to re compile & transform source
// + full control on coverage
// - have to pass reporter options from comd line back to istanbul API
// https://github.com/gotwarlost/istanbul#generate-reports-given-a-bunch-of-coverage-json-objects
// const { NODE_ENV } = process.env

module.exports = require("@dmail/shared-config").config("babel", {})
