'use strict';

var url = require('url');


var UsersCloudServiceEndpoint = require('./UsersCloudServiceEndpointService');


module.exports.usersEmailServiceGet = function usersEmailServiceGet (req, res, next) {
  

  var result = UsersCloudServiceEndpoint.usersEmailServiceGet();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.usersEmailServicePost = function usersEmailServicePost (req, res, next) {
  

  var result = UsersCloudServiceEndpoint.usersEmailServicePost();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.usersEmailServiceServiceNameGet = function usersEmailServiceServiceNameGet (req, res, next) {
  

  var result = UsersCloudServiceEndpoint.usersEmailServiceServiceNameGet();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.usersEmailServiceServiceNameDelete = function usersEmailServiceServiceNameDelete (req, res, next) {
  

  var result = UsersCloudServiceEndpoint.usersEmailServiceServiceNameDelete();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
