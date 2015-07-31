'use strict';

var url = require('url');


var Health = require('./HealthService');


module.exports.healthGet = function healthGet (req, res, next) {
  

  var result = Health.healthGet();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
