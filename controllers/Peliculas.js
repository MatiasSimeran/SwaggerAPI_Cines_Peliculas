'use strict';

var utils = require('../utils/writer.js');
var Peliculas = require('../service/PeliculasService');

module.exports.peliculasGET = function peliculasGET (req, res, next) {
  Peliculas.peliculasGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.peliculasIdDELETE = function peliculasIdDELETE (req, res, next, id) {
  Peliculas.peliculasIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.peliculasIdGET = function peliculasIdGET (req, res, next, id) {
  Peliculas.peliculasIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.peliculasIdPUT = function peliculasIdPUT (req, res, next, body, id) {
  Peliculas.peliculasIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.peliculasPOST = function peliculasPOST (req, res, next, body) {
  Peliculas.peliculasPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
