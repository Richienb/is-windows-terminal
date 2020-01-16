import test from "ava"
import isWindowsTerminal from "."

test("main", (t) => {
	t.is(typeof isWindowsTerminal, "boolean")
})
