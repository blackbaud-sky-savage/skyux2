/**
 * WebDriver configuration options shared between CI and local versions.
 */
(() => {
  'use strict';

  const utils = require('../utils/visual-utils.js');
  const VRC = require('wdio-visual-regression-service/compare');

  module.exports = {
    specs: [
        'src/modules/**/*.visual-spec.ts'
    ],
    baseUrl: 'http://localhost:3000/',
    framework: 'jasmine',
    jasmineNodeOpts: {
      defaultTimeoutInterval: 200000,
    },
    reporters: [
      'dot',
      'spec'
    ],
    sync: false,
    waitforTimeout: 3000,
    services: ['visual-regression'],
    plugins: {
      webdrivercss: {
        mismatchTolerance: 0.05,
        screenWidth: [1280]
      }
    },
    visualRegression: {
      compare: new VRC.LocalCompare({
        referenceName: utils.getScreenshotName('screenshots/reference'),
        screenshotName: utils.getScreenshotName('screenshots/screen'),
        diffName: utils.getScreenshotName('screenshots/diff'),
        mismatchTolerance: .01
      })
    },
    before: (capabilities) => {
      require('ts-node/register');
      capabilities.utils = utils;
    }
  };

})();
