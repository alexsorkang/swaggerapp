'use strict';

var url = require('url');


var ItemsEndpoint = require('./ItemsEndpointService');


module.exports.itemsGet = function itemsGet (req, res, next) {
  var searchcriteria = req.swagger.params['Search criteria'].value;
  

  var result = ItemsEndpoint.itemsGet(searchcriteria);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.itemsPost = function itemsPost (req, res, next) {
  

  var result = ItemsEndpoint.itemsPost();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.itemsIdTruePut = function itemsIdTruePut (req, res, next) {
  

  var result = ItemsEndpoint.itemsIdTruePut();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.itemsIdGet = function itemsIdGet (req, res, next) {
  

  var result = ItemsEndpoint.itemsIdGet();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.itemsIdPut = function itemsIdPut (req, res, next) {
  

  var result = ItemsEndpoint.itemsIdPut();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.itemsIdDelete = function itemsIdDelete (req, res, next) {
  

  var result = ItemsEndpoint.itemsIdDelete();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
