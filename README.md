# feathers-gridfs

[![Build Status](https://travis-ci.org/feathersjs/feathers-gridfs.png?branch=master)](https://travis-ci.org/feathersjs/feathers-gridfs)
[![Code Climate](https://codeclimate.com/github/feathersjs/feathers-gridfs/badges/gpa.svg)](https://codeclimate.com/github/feathersjs/feathers-gridfs)
[![Test Coverage](https://codeclimate.com/github/feathersjs/feathers-gridfs/badges/coverage.svg)](https://codeclimate.com/github/feathersjs/feathers-gridfs/coverage)
[![Dependency Status](https://img.shields.io/david/feathersjs/feathers-gridfs.svg?style=flat-square)](https://david-dm.org/feathersjs/feathers-gridfs)
[![Download Status](https://img.shields.io/npm/dm/feathers-gridfs.svg?style=flat-square)](https://www.npmjs.com/package/feathers-gridfs)

> Support GridFs for file storage

## Installation

```
npm install feathers-gridfs --save
```

## Documentation

TBD

## Complete Example

Here's an example of a Feathers server that uses `feathers-gridfs`. 

```js
const feathers = require('@feathersjs/feathers');
const plugin = require('feathers-gridfs');

// Initialize the application
const app = feathers();

// Initialize the plugin
app.configure(plugin());
```

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
