// import { VisualUtils } from '../../../config/utils/visual-utils';
// import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
// import {
//   beforeEach,
//   describe,
//   expect,
//   inject,
//   it
// } from '@angular/core/testing';

describe('Alert', () => {
  it('should match previous alert screenshot', (done) => {

    const result = browser.url('/alert.html');
    browser.options.desiredCapabilities.utils.compare({
      browser: browser,
      browserResult: result,
      screenshotSuite: 'alert',
      screenshotName: 'default',
      selector: '#screenshot-alert',
      screenWidth: [480, 1280],
      checkAccessibility: false,
      done: done
    });

  });
});
