'use strict';

var url = require('url');


var AdministratorEndpoint = require('./AdministratorEndpointService');


module.exports.adminAuditGet = function adminAuditGet (req, res, next) {
  

  var result = AdministratorEndpoint.adminAuditGet();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.adminPermissionsGet = function adminPermissionsGet (req, res, next) {
  

  var result = AdministratorEndpoint.adminPermissionsGet();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.adminPermissionsPost = function adminPermissionsPost (req, res, next) {
  

  var result = AdministratorEndpoint.adminPermissionsPost();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
