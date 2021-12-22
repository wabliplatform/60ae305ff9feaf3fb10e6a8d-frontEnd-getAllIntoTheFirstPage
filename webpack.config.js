const path = require('path');

module.exports = {
  entry: {
	'homePage' : './javascript/homePage.js',
	'ShowOneElement' : './javascript/ShowOneElement.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};