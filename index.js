#!/usr/bin/env node

var fs   = require('fs')
var path = require('path')
var exec = require('child_process').exec
var argv = require('minimist')(process.argv.slice(2));


fs.readFile(path.join(__dirname, 'boilerplate.html'), function read(err, data) {
  if (err) return console.log(err)
  var filePath
  if ((filePath = argv.f) !== undefined) {
    // Absolute Path
    if (filePath[0] === "/") {

    // Relative Path
    } else {
      path.join(__dirname, filePath)
    }
  } else {
    var command = "echo '" + data.toString() + "' | pbcopy"
    exec(command, function clipboarded(err, stdout, stdrr) {
      if (err) return console.log(err)
      console.log("Copied!")
    })
  }
})
