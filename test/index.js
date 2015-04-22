/**
 * postcss-myth <https://github.com/tunnckoCore/postcss-myth>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var fs = require('fs');
var test = require('assertit');
var postcssMyth = require('../index');

test('postcss-myth:', function(done) {
  var fixture = fs.readFileSync('./test/fixture.css', 'utf8');
  var expected = fs.readFileSync('./test/expected.css', 'utf8');
  var actual = postcssMyth(fixture).css;

  test.equal(actual, expected);
  done();
});
