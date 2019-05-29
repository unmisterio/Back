'use strict';

var utils = require('../utils/writer.js');
var Admins = require('../service/AdminsService');

module.exports.addCall = function addCall (req, res, next) {
  var description = req.swagger.params['description'].value;
  var universidad = req.swagger.params['universidad'].value;
  Admins.addCall(description,universidad)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
