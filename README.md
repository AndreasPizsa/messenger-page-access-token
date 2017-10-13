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
const MessengerPageAccessToken = require('messenger-page-access-token');

const messengerPageAccessToken = new MessengerPageAccessToken();

console.log(messengerPageAccessToken.renderName());
// script
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
