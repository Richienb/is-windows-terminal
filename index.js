"use strict"
const isWsl = require("is-wsl")
const isUUID = require("is-uuid")

module.exports = (process.platform === "win32" || isWsl) && isUUID.v4(process.env.WT_SESSION)
