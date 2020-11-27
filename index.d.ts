/**
Whether the current environment is the Windows Terminal.

@example
```
const isWindowsTerminal = require("is-windows-terminal")

// When running in Windows Terminal
console.log(isWindowsTerminal)
//=> true
```
*/
declare const isWindowsTerminal: boolean

export = isWindowsTerminal
