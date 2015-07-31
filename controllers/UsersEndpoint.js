'use strict';

var url = require('url');


var UsersEndpoint = require('./UsersEndpointService');


module.exports.usersGet = function usersGet (req, res, next) {
  

  var result = UsersEndpoint.usersGet();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.usersPost = function usersPost (req, res, next) {
  

  var result = UsersEndpoint.usersPost();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.usersEmailGet = function usersEmailGet (req, res, next) {
  

  var result = UsersEndpoint.usersEmailGet();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.usersEmailPut = function usersEmailPut (req, res, next) {
  

  var result = UsersEndpoint.usersEmailPut();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.usersEmailDelete = function usersEmailDelete (req, res, next) {
  

  var result = UsersEndpoint.usersEmailDelete();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.usersLoginPost = function usersLoginPost (req, res, next) {
  

  var result = UsersEndpoint.usersLoginPost();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
