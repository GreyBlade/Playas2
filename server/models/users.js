const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nombre:String;
  username:String;
  email:String;
  password:String;
  rol:String;
});

module.exports = mongoose.model('User', userSchema);
