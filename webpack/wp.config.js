var path = require('path')
let finalModule = {};
let ENV = process.env.ENV;
switch (ENV) {
  case 'DEV':
    finalModule = require('./wp.config.dev');
    break;
  case 'PROD':
    finalModule = require('./wp.config.prod');
    break;
  default:
    // finalModule = prodModule;
    break;
}
module.exports = finalModule;
