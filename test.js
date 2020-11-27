const test = require("ava")
const isWindowsTerminal = require(".")

test("main", t => {
	t.is(typeof isWindowsTerminal, "boolean")
})
