const path = require('path');

module.exports = {
  entry: {
    HarryPotterAPI: './src/js/HarryPotterAPI.js',
    houseView: './src/js/houseView.js',
    teachers: './src/js/teachers.js'
  },
  output: {
    path: path.resolve(__dirname, ''),
    filename: '[name].bundle.js'
  }
};