const path = require("path");

module.exports = {
  // Entry point that indicates where
  // should the webpack starts bundling
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // checks for .js or .jsx files
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/, //checks for .css files
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },

  // Options for resolving module requests
  // extensions that are used
  resolve: { extensions: ["*", ".js", ".jsx"] },

  // Output point is where webpack should
  // output the bundles and assets
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  devServer: {
    historyApiFallback: true,
  },
};
