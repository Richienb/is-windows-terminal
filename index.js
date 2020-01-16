"use strict"

const isUUID = require("is-uuid")

module.exports = process.platform === "win32" && isUUID.v4(process.env.WT_SESSION)
