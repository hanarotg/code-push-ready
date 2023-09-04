#! /usr/bin/env node
var shell = require("shelljs");

const os = require("os");

if (os.platform() === "darwin") {
  shell.exec("./macos/init.sh");
} else if (os.platform() === "win32") {
}
