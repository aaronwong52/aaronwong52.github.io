var webpack = require("webpack");
module.exports = {
	entry: __dirname + "/js/index.js",
	output: {
		path: __dirname + "/out",
		filename: "bundle.js"
	},
	resolve: {
		extensions: [".js", ".css"]
	}
	module: {
		rules: [{
			test:/\.jsx?/,
			exclude: /node_modules/,
			use: "babel-loader"
		}]
	}
};