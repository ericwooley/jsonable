# jsonable
[![Build Status](https://travis-ci.org/ericwooley/jsonable.svg)](https://travis-ci.org/ericwooley/jsonable)
[![Code Climate](https://codeclimate.com/github/ericwooley/jsonable/badges/gpa.svg)](https://codeclimate.com/github/ericwooley/jsonable)
[![Test Coverage](https://codeclimate.com/github/ericwooley/jsonable/badges/coverage.svg)](https://codeclimate.com/github/ericwooley/jsonable/coverage)
## Composable javascript

`npm install --save-dev jsonable`

### Usage

Create a javascript file as your entry point and export a plain old javascript object
named `jsonExport`, use javascript as usual to compose your javascript object.
```js
const test = require('./json/test.json')
export const jsonExport = {test}
```
Then use jsonjs binary to create your json file

`jsonjs --entry dist/tests/files/basic-pojo.json.js --out test.json --spaces 5`

to create a json file from your pojo

### Contributing

All code is linted with javascript standard, PR's with lint errors will not be accepted.

run `npm run watch` to begin watching the source, compiling, and running the unit tests.
