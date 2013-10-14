var assert = require('assert'),
    stream = require('readable-stream'),
    james  = require('james'),
    stylus = require('../index.js');

describe('james-ngmin', function() {
  it('should annotate angular injections', function(done) {
    var src  = new stream.PassThrough(),
        dest = new stream.PassThrough();

    src.pipe(stylus()).pipe(dest);
    src.write('angular.module("foo").controller("fooCntl", function ($scope) {});');
    src.end();

    dest.on('finish', function() {
      assert.equal(dest.read().toString(),
        "angular.module('foo').controller('fooCntl', [\n  '$scope',\n  function ($scope) {\n  }\n]);");
      done();
    });
  });
});
