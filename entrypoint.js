#!/usr/bin/env node

var program = require('commander');

program
  .version('1.1.0')
  .option('-l, --list [list]', 'list of customers in CSV file')
  .parse(process.argv)

console.log(program.list);