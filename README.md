**NOTE**

_This branch `tutorial` is the first version of `cli-boilerplate` and is kept here because I wrote a [tutorial](http://jlord.github.io/blog/simple-node-module.html) that walks through building this. The branch `master` has since change, more features!, and so it doesn't match up with the tutorial anymore, thus, I've preserved that state here in this branch._

cli-boilerplate
===============

This is a super simple command line module that copies HTML5 boilerplate to your clipboard so that you can open a new file, paste and :boom:.

_Currently just works on Macs or things that have `pbcopy`_

```bash
$ boilme
```

When you paste you get:

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Title</title>
    <link rel="icon" type="image/png" href="favicon.png">
    <link rel="stylesheet" href="assets/style.css">
  </head>
  <body>

  </body>
</html>
```

The boilerplate included here is adapted from the lovely @thefoxis's repository [thefoxis/html-boilerplate](https://github.com/thefoxis/html-boilerplate).

**You can [use it](#use-it) as-is or [adapt it](#adapt-it) to your own boilerplate needs**

## Use it

_You'll need [Node.js](http://www.nodejs.org) and [NPM](http://www.npmjs.org) (which comes when you install Node.js) on your computer._

Install `cli-boilerplate` globally on you computer with NPM:

```bash
$ npm install -g cli-boilerplate
```

From any terminal window, run the `boilme` command to get the boilerplate copied to you clipboard.

```
$ boilme
```

Then paste it where you want it. Done!

## Adapt it

_You'll need [Node.js](http://www.nodejs.org) and [NPM](http://www.npmjs.org) (which comes when you install Node.js) on your computer._

Clone this repository (or a fork of it) to your computer:

```bash
$ git clone git@github.com:jlord/cli-boilerplate.git
```

Open it up in your text editor and edit the `boilerplate.html` file as you'd like it. Save.

```bash
$ cd cli-boilerplate
```

Link this version to your system so that Node uses it when you run `boilme`. From inside the `cli-boilerplate` directory link it:

```bash
$ npm link
```

Then run `boilme` from any terminal window. Yay!
