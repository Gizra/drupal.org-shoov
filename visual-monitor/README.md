# Installation

1. Login to [Shoov](http://shoov.io) and copy/ paste the code from on the `My account` page, in order to get your access token
1. Install mocha globally ``npm install -g mocha``
1. Follow [installation](https://github.com/webdriverio/webdrivercss#install) notes for WebdriverCss
1. `npm install`

## Providers

For local testing use phantomJs ``phantomjs --webdriver=4444``

Otherwise you can use BrowserStack or Sauce Labs, after adding the credentials in Shoov's "My-Account" page:

# Usage

``mocha`` will tests all the files under the ``test`` folder.

The example file shows how a single test file can be executed under multiple platforms and browsers. Assuming we are using browserstack, this can be executed by passing the environment argument like this:

```bash
# Execute the tests using the ie11 config.
PROVIDER_PREFIX=browserstack SELECTED_CAPS=ie11 mocha

# Execute the tests using the chrome on Mac config.
PROVIDER_PREFIX=browserstack SELECTED_CAPS=chrome mocha

# Execute the tests with the default capabilities provided by the `shoov-webdrivercss` library.
mocha
```

After a regression was found check your [Builds](https://app.shoov.io/#/builds) page, or go directly to the link indicated by the failing Mocha test.

# Credits

[Gizra](http://gizra.com)
