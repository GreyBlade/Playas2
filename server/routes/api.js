const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = "mongodb://jaimec14:123456@ds113455.mlab.com:13455/playasdb";
const Playa = require("../models/playas");
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
  if (err){
    console.log("Error conectando a la base de datos");
  }
});

router.get('/playas', function(req,  res){
  console.log("Peticion de las playas");
  Playa.find({})
    .exec(function(err, playas){
      if (err){
        console.log("error sacando las playas");
      } else{
        res.json(playas);
      }
    });
});

router.get('/playas/:id', function(req, res){
  console.log("Peticion de un solo video");
  Playa.findById(req.params.id)
    .exec(function(err, playa){
      if (err){
        console.log("error sacando las playa");
      } else{
        res.json(playa);
      }
    });
});

router.post('/playa', function(req, res){
  console.log("Ingresando una playa");
  var nuevaPlaya = new Playa();
  nuevaPlaya.nombre = req.body.nombre;
  nuevaPlaya.tipo = req.body.tipo;
  nuevaPlaya.descripcion = req.body.descripcion;
  nuevaPlaya.save(function(err, playaInsertado){
    if (err){
      console.log("Error ingresando   a la base de datos");
    }else{
      res.json(playaInsertado);
    }
  });
});

router.put('/playa/:id', function(req, res){
  console.log("Actualizando una playa");
  Playa.findByIdAndUpdate(req.params.id,
    {
      $set: {nombre: req.body.nombre, tipo: req.body.tipo, descripcion: req.body.descripcion}
    },
    {
      new:true
    },
    function(err, videoActualizado){
      if (err){
        res.send("Error actualizando video");
      }else{
        res.json(videoActualizado);
      }
    }
  );
});

router.delete('/playa/:id', function(req, res){
  console.log("Borrando una playa");
  Playa.findByIdAndRemove(req.params.id,function(err, videoBorrado){
    if (err){
      res.send("Error borrando el video");
    }else{
      res.json(videoBorrado);
    }

  });
});



module.exports = router;
