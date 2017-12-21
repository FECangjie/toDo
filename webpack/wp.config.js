var path = require('path')
const devModule = require('./wp.config.dev');
const prodModule = require('./wp.config.prod');
let finalModule = {};
let ENV = process.env.ENV;

switch (ENV) {
  case 'DEV':
    finalModule = devModule;
    break;
  case 'PROD':
    finalModule = prodModule;
    break;
  default:
    finalModule = prodModule;
    break;
}
module.exports = finalModule;
