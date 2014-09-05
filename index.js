#!/usr/bin/env node

var fs   = require('fs')
var exec = require('child_process').exec

fs.readFile('boilerplate.html', function read(err, data) {
  if (err) return console.log(err)
  var command = "echo '" + data.toString() + "' | pbcopy"
  exec(command, function clipboarded(err, stdout, stdrr) {
    if (err) return console.log(err)
    console.log("Copied!")
  })
})
