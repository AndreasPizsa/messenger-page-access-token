# messenger-page-access-token

[![build status](https://img.shields.io/travis/andreaspizsa/messenger-page-access-token.svg)](https://travis-ci.org/andreaspizsa/messenger-page-access-token)
[![code coverage](https://img.shields.io/codecov/c/github/andreaspizsa/messenger-page-access-token.svg)](https://codecov.io/gh/andreaspizsa/messenger-page-access-token)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/andreaspizsa/messenger-page-access-token.svg)](LICENSE)

> Have the receiving page's access_token handy


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install messenger-page-access-token
```

[yarn][]:

```sh
yarn add messenger-page-access-token
```


## Usage

```js
const messenger = require('messenger-core')
const loadPlugins = require('plugin-powered')
const pluginOptions = {
  prefix: 'messenger-'
}

loadPlugins(messenger, {
  'page-access-token': '<<YOUR_PAGE_ACCESS_TOKEN>>'
}, pluginOptions)

// if your bot handles multiple pages
loadPlugins(messenger, {
  'messenger-page-access-token': {
    '<<PAGE_ID>>'         : '<<YOUR_PAGE_ACCESS_TOKEN>>',
    '<<ANOTHER_PAGE_ID>>' : '<<ANOTHER_PAGE_ACCESS_TOKEN>>'
    // etc.
  }, pluginOptions
})

// if you have your page access token store in an environment variable
loadPlugins(messenger, {
  'page-access-token': 'MY_ENVIRONMENT_VARIABLE'
}, pluginOptions)

```


## Contributors

| Name              | Website                           |
| ----------------- | --------------------------------- |
| **Andreas Pizsa** | <https://github.com/AndreasPizsa> |


## License

[MIT](LICENSE) © [Andreas Pizsa](https://github.com/AndreasPizsa)


##

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
