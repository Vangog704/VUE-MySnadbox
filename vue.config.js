const path = require('path')
const fs = require('fs')
var merge = require('webpack-merge')

let outputDir = process.env.OUTPUT_DIR || 'dist';

module.exports = {
	outputDir,	
	productionSourceMap: false,
	css: {
		extract: false,
		loaderOptions: {
			sass: {
				prependData: `@import "@/_variables.scss";`
			}
		}
	}
};
