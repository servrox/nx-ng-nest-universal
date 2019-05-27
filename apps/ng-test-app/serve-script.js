const {
  LiveReloadCompiler
} = require('@nestjs/ng-universal');

const compiler = new LiveReloadCompiler({
  projectName: 'ng-test-app',
  tsServerConfigFile: 'apps/nest-test-app/tsconfig.json',
  watchDir: 'dist',
  serverBundlePath: 'dist/apps/ng-test-app-server/main.js',
  serverFilePath: 'dist/apps/server-app/main',
  mainBundlePath: 'dist/apps/ng-test-app/main.js',
  indexFilePath: 'dist/apps/ng-test-app/index.html',
  outputDir: 'dist',
  watchSsr: true
});
compiler.run();
