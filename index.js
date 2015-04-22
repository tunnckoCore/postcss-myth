/**
 * postcss-myth <https://github.com/tunnckoCore/postcss-myth>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var postcss = require('postcss');

module.exports = function postcssMyth(input, options) {
  if (typeof input !== 'string') {
    throw new TypeError('[postcss-myth] expects `input` to be string');
  }
  var plugins = [
    require('autoprefixer')(options),
    require('postcss-calc')(options),
    require('postcss-color-function')(options),
    require('postcss-color-hex-alpha')(options),
    require('postcss-color-rebeccapurple')(options),
    require('postcss-custom-media')(options),
    require('postcss-custom-properties')(options),
    require('postcss-font-variant')(options),
    require('postcss-import')(options)
  ];
  return postcss(plugins).process(input, options);
};
