const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Modelo de tipo playa que tiene nombre, tipo y descripcion
const playaSchema = new Schema({
  nombre:String,
  tipo:String,
  descripcion:String,
});

module.exports = mongoose.model(/*nombre del modelo*/ 'playa', /*modelo que hace referencia*/ playaSchema,

/*coleccion de la bd de la que sacara informacion*/'playas');
