'use strict';

var shoovWebdrivercss = require('shoov-webdrivercss');

// This can be executed by passing the environment argument like this:
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=ie11 mocha
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=chrome mocha
var capsConfig = {
  'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '42.0',
    'os' : 'OS X',
    'os_version' : 'Yosemite',
    'resolution' : '1024x768'
  },
  'ie11': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1024x768'
  }
}

var selectedCaps = process.env.SELECTED_CAPS || undefined;
var caps = selectedCaps ? capsConfig[selectedCaps] : undefined;

var providerPrefix = process.env.PROVIDER_PREFIX ? process.env.PROVIDER_PREFIX + '-' : '';
var testName = selectedCaps ? providerPrefix + selectedCaps : providerPrefix + 'default';

var baseUrl = process.env.BASE_URL ? process.env.BASE_URL : 'https://www.drupal.org';

describe('Drupal.org live site testing', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = shoovWebdrivercss.before(done, caps);
  });

  after(function(done) {
    shoovWebdrivercss.after(done);
  });

  it('should show the home page',function(done) {
    client
      .url(baseUrl)
      .webdrivercss(testName + '.homepage', {
        name: 'homepage',
        exclude:
          [
            // News block.
            '#tab-news',
            // Community stats.
            '#community-stats .highlight',
            // Who uses Drupal.
            '#sites-with-drupal img'
          ],
        remove:
          [
            // Who uses Drupal text
            '#sites-with-drupal p a'
          ],
        screenWidth: selectedCaps == 'chrome' ? [320, 640, 960, 1200] : undefined,
      }, shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show start page',function(done) {
    client
      .url(baseUrl + '/start')
      .webdrivercss(testName + '.start', {
        name: 'start',
        exclude:
          [
            '.narrow-box ul.flat',
            '.get-started.documentation img'
          ],
        screenWidth: selectedCaps == 'chrome' ? [320, 640, 960, 1200] : undefined,
      }, shoovWebdrivercss.processResults)
      .call(done);
  });
});
