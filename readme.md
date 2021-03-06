# is-windows-terminal [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/is-windows-terminal/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/is-windows-terminal)

Check if the current environment is the Windows Terminal.

[![NPM Badge](https://nodei.co/npm/is-windows-terminal.png)](https://npmjs.com/package/is-windows-terminal)

## Install

```sh
npm install is-windows-terminal
```

## Usage

```js
const isWindowsTerminal = require("is-windows-terminal")

// When running in Windows Terminal
console.log(isWindowsTerminal)
//=> true
```

## API

### isWindowsTerminal

Type: `boolean`

Whether the current environment is the Windows Terminal.
