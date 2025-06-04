// Helpers for setting up the testing environment
const { JSDOM } = require('jsdom')
const fs = require('fs')
const path = require('path')

const html = fs.readFileSync('./index.html', 'utf8')
const dom = new JSDOM(html)
const document = dom.window.document

global.document = document
global.window = dom.window
require('../index.js')

module.exports = {
  document,
  dom,
}
