const path = require('path');
const webpack = require('webpack');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
	entry: {
		app: [`${path.resolve(__dirname, '../src')}/index.tsx`],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx|js|jsx)$/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
				exclude: /node_module/,
			},
		],
	},
	plugins: [
		new InterpolateHtmlPlugin({
			PUBLIC_URL: './',
		}),
		new HtmlWebpackPlugin({
			template: `${path.resolve(__dirname, '../public')}/index.html`,
			filename: 'index.html',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'public/vendor', to: 'vendor' },
				{ from: 'public/favicon.ico', to: 'favicon.ico' },
			],
		}),
		new webpack.ProvidePlugin({
			React: 'react',
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../src'),
		},
		modules: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../node_modules')],
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
	},
};
