const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

// module.exports = {
//   entry: slsw.lib.entries,
//   target: 'node',
//   mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         include: __dirname,
//         use: [
//           {
//             loader: 'babel-loader'
//           }
//         ],
//       }
//     ]
//   },
//   output: {
//     libraryTarget: 'commonjs',
//     path: path.resolve('.webpack'),
//     filename: '[name].js', // this should match the first part of function handler in serverless.yml
//   },
//   externals: [
//     /^(?!\.|\/).+/i,
//   ]
// };

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: __dirname,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
      }
    ]
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
};
