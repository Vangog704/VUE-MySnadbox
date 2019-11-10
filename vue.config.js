const path = require('path')
const fs = require('fs')

var merge = require('webpack-merge')
console.log("vue-config-hello");
module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        prependData: `@import "@/_variables.scss";`
      }
    }
  }
};
