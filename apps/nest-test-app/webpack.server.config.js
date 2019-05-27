const path = require('path');
const webpack = require('webpack');
const WebpackConfigFactory = require('@nestjs/ng-universal')
  .WebpackConfigFactory;

const config = WebpackConfigFactory.create(webpack, {
  // Nest server for SSR
  server: './apps/nest-test-app/src/main.ts'
});
config.output = {
  // Puts the output at the root of the dist folder
  path: path.join(__dirname, '../../dist/apps/ng-test-app-server'),
  filename: '[name].js'
};
config.plugins = [
  new webpack.ContextReplacementPlugin(
    // fixes WARNING Critical dependency: the request of a dependency is an expression
    /(.+)?angular(\\|\/)core(.+)?/,
    path.join(__dirname, 'apps/ng-test-app/src'), // location of your src
    {} // a map of your routes
  ),
  new webpack.ContextReplacementPlugin(
    // fixes WARNING Critical dependency: the request of a dependency is an expression
    /(.+)?express(\\|\/)(.+)?/,
    path.join(__dirname, 'apps/ng-test-app/src'), {}
  )
];

module.exports = config;
