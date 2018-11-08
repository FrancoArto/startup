const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./lib/main.js",
  output: {
    path: path.resolve(__dirname, ""),
    filename: "main.bundle.js"
  }
};
