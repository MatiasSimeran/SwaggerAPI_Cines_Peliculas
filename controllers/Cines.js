'use strict';

var utils = require('../utils/writer.js');
var Cines = require('../service/CinesService');

module.exports.cinesGET = function cinesGET (req, res, next) {
  Cines.cinesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cinesIdDELETE = function cinesIdDELETE (req, res, next, id) {
  Cines.cinesIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cinesIdGET = function cinesIdGET (req, res, next, id) {
  Cines.cinesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cinesIdPUT = function cinesIdPUT (req, res, next, body, id) {
  Cines.cinesIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cinesPOST = function cinesPOST (req, res, next, body) {
  Cines.cinesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
