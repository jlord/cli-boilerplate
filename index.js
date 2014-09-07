#!/usr/bin/env node

var fs   = require('fs')
var path = require('path')
var exec = require('child_process').exec

fs.readFile(path.join(__dirname, 'boilerplate.html'), function read(err, data) {
  if (err) return console.log(err)
  checkSystem(data.toString())
})

function checkSystem(data) {
  if (process.platform === "linux") {
    var command = data + " xclip -selection clipboard"
    return copy(command)
  } else if (process.platform === "darwin") {
    var command = "echo '" + data + "' | pbcopy"
    return copy(command)
  } else if (process.platform === "win32") {
    var command = data + " | pbcopy"
    return copy(command)
  } else {
    return console.log("Sorry your system isn't supported yet :(")
  }
}

function copy(command) {
  exec(command, function clipboarded(err, stdout, stdrr) {
    if (err) return console.log(err)
    console.log("Copied!")
  })
}
