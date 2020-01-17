#!/usr/bin/env node

const timelog = require('../lib/timelog');
const arguments = process.argv.splice(2);
let message = arguments[0];

console.log(timelog.log(message));
