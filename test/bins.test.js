const test = require('tape')
const path = require('path')
const binspec = require('./binspec.json')
const fs = require('fs')

test('expected bins are available when this module is consumed', t => {
  const binFolder = path.join(__dirname, '../node_modules/.bin')
  fs.readdir(binFolder, (err, files) => {
    t.error(err, 'read the bin directory')
    binspec.bins.forEach(bin => {
      t.true(files.includes(bin), bin + ' is installed')
    })

    t.end()
  })
})
