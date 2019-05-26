module.exports = {
  name: 'ng-test-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ng-test-app/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
