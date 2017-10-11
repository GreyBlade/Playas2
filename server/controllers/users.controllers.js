'use strict'
const User = require('../models/users');
const bcrypt = require('bcrypt-nodejs');

function pruebas(req, res){
  res.status(200).send({
    message:'Probando una accion de el controlador de usuarios'
  });
}

function saveUser(req, res){

  var user = new User();
  var params = req.body;
  console.log(params);
  user.nombre = params.nombre;
  user.username = params.username;
  user.email = params.email;
  user.role = 'ROLE_USER';

  if (params.password){
    //encriptando contraseña

  }else{
    res.status(500).send({
      message: 'Error obteniendo la contraseña'
    });
  }

});

module.exports = {
  pruebas
};
