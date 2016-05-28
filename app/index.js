'use strict'

var generators = require('yeoman-generator')
var mkdirp = require('mkdirp')

module.exports = generators.Base.extend({
 constructor: function () {
  generators.Base.apply(this, arguments);
  
  console.log(process.argv)
 },

 fun1: function () {
  console.log('fun1 just run')
 },

 fun2: function () {
  console.log('fun2 jusn run')
 }

})
