var james = require('james'),
    ngmin = require('ngmin');

module.exports = function(options) {
  return james.createStream(function(file, callback) {
    return callback(ngmin.annotate(file));
  });
};
