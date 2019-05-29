'use strict';


/**
 * Obteniendo convocatorias de interes
 * Al pasar por las opciones apropiadas, puede buscar en el inventario disponible una convocatoria de interes 
 *
 * searchString String Recibe un String para filtrar la busqueda (optional)
 * city Integer Lista las convocatorias por una ciudad determinado (optional)
 * university String Lista las convocatorias por una universidad determinada (optional)
 * returns List
 **/
exports.search = function(searchString,city,university) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "description" : "Convocatoria abierta para estudiantes de ingenieria de sistemas UNAL",
  "universidad" : {
    "city" : "Ciudad de Mexico, Mexico",
    "phone" : "408-867-5309",
    "name" : "UNAM",
    "homePage" : "https://www.unam.mx/"
  },
  "id" : "521"
}, {
  "description" : "Convocatoria abierta para estudiantes de ingenieria de sistemas UNAL",
  "universidad" : {
    "city" : "Ciudad de Mexico, Mexico",
    "phone" : "408-867-5309",
    "name" : "UNAM",
    "homePage" : "https://www.unam.mx/"
  },
  "id" : "521"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

