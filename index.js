const chalk = require("chalk");

const date = `[${new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()}]`

function error(data) {
    console.log(chalk.redBright("[ERROR]"), date, data);
}

function info(data) {
    console.log(chalk.blue("[INFO]"), date, data);
}

function debug(data) {
    console.log(chalk.green("[DEBUG]"), date, data);
}

function fatal(data) {
    console.log(chalk.red("[FATAL]"), date, data);
}

module.exports = { error, info, debug, fatal }