'use strict';

var utils = require('../utils/writer.js');
var Estudiante = require('../service/EstudianteService');

module.exports.search = function search (req, res, next) {
  var searchString = req.swagger.params['searchString'].value;
  var city = req.swagger.params['city'].value;
  var university = req.swagger.params['university'].value;
  Estudiante.search(searchString,city,university)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
