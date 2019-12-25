#! /usr/bin/env node

const program = require('commander');
const { logPackageVersion } = require('../src/utils');

logPackageVersion();

program
  .usage('<command> [options]')
  .command('init [name]', 'init a project')
  .command('update', 'update cli')
  .parse(process.argv);
