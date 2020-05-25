# towords
[![Build Status](https://travis-ci.com/abakermi/towords.svg?branch=master)](https://travis-ci.com/abakermi/towords) [![npm version](https://badge.fury.io/js/%40abakermi%2Ftowords.svg)](https://badge.fury.io/js/%40abakermi%2Ftowords)


convert node stream to words

## Installation

```sh
$ npm install @abakermi/towords --save
```

## Usage

```js
const fs = require('fs');
const input = fs.createReadStream('text.txt');
const wordStream = new wordStream(input);

input.pipe(wordStream).pipe(process.stdout)
```


## License

towords is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)i)